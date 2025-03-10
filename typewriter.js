class Typewriter {
    constructor(element, options = {}) {
        this.element = element;
        this.words = element.textContent.trim();
        this.element.textContent = '';
        this.speed = options.speed || 30;
        this.delay = options.delay || 1000;
        this.onComplete = options.onComplete || (() => {});
        this.isRunning = false;
        this.controller = options.controller || null;
    }

    async type() {
        if (this.isRunning) return;
        this.isRunning = true;

        const words = this.words.split('');
        
        for (let i = 0; i < words.length; i++) {
            if (!this.isRunning) break;
            
            this.element.textContent += words[i];
            
            // Add natural-feeling delays for punctuation
            let delay = this.speed;
            if (['.', '!', '?'].includes(words[i])) {
                delay = this.delay;
            } else if ([',', ';'].includes(words[i])) {
                delay = this.delay / 2;
            }
            
            // Scroll to the bottom after each character is typed
            this.scrollToBottom();
            
            await new Promise(resolve => setTimeout(resolve, delay));
        }

        this.isRunning = false;
        this.onComplete();
    }

    scrollToBottom() {
        // Check if user is already at the bottom (or close to it)
        const isAtBottom = this.isUserAtBottom();
        
        // Only auto-scroll if the user is already at the bottom
        // or if the controller doesn't indicate the user has manually scrolled
        if (isAtBottom || (this.controller && !this.controller.userHasScrolled)) {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'auto'
            });
            
            // Reset the userHasScrolled flag if we're using the controller
            if (this.controller) {
                this.controller.userHasScrolled = false;
            }
        }
    }
    
    isUserAtBottom() {
        // Use the controller's method if available
        if (this.controller) {
            return this.controller.isUserAtBottom();
        }
        
        // Calculate how far the user has scrolled
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        );
        
        // Consider the user at the bottom if they're within 100px of the bottom
        const threshold = 100;
        return documentHeight - (scrollTop + windowHeight) <= threshold;
    }

    stop() {
        this.isRunning = false;
    }
}

// Main controller for the typewriter sequence
class TypewriterController {
    constructor() {
        this.activeTypewriter = null;
        this.navButtons = document.getElementById('nav-buttons');
        this.sections = document.querySelectorAll('.section');
        this.conversationFlow = document.getElementById('conversation-flow');
        this.sectionsContent = document.getElementById('sections-content');
        this.activeSection = null;
        this.answeredQuestions = new Set();
        this.isTyping = false;
        this.userHasScrolled = false;
        
        // Initialize event listeners
        this.initEventListeners();
        
        // Add scroll event listener
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }
    
    initEventListeners() {
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', (e) => {
                // Prevent multiple clicks while typing
                if (this.isTyping) return;
                
                const sectionId = e.target.getAttribute('data-section');
                
                // Hide all buttons during typing for a cleaner experience
                this.hideAllButtons();
                
                // Show the section
                this.showSection(sectionId);
            });
        });
    }
    
    hideAllButtons() {
        this.navButtons.classList.remove('visible');
    }
    
    async showSection(sectionId) {
        // If we've already answered this question, don't do anything
        if (this.answeredQuestions.has(sectionId)) {
            return;
        }
        
        // Mark this question as answered and set typing state
        this.answeredQuestions.add(sectionId);
        this.isTyping = true;
        
        // Get the section from the template
        const originalSection = document.getElementById(sectionId);
        
        if (!originalSection) {
            console.error(`Section with ID ${sectionId} not found`);
            this.isTyping = false;
            this.updateNavButtons();
            return;
        }
        
        // Clone the section for the conversation flow
        const sectionClone = originalSection.cloneNode(true);
        sectionClone.id = `${sectionId}-clone`;
        sectionClone.classList.add('active');
        
        // Add the cloned section to the conversation flow
        this.conversationFlow.appendChild(sectionClone);
        
        // Get the content element for typewriter effect
        const contentId = `${sectionId}-content`;
        const clonedContent = sectionClone.querySelector(`[id="${contentId}"]`);
        
        if (!clonedContent) {
            console.error(`Content element with ID ${contentId} not found in cloned section`);
            this.isTyping = false;
            this.updateNavButtons();
            return;
        }
        
        // Store the original text and clear it for the typewriter effect
        const originalText = clonedContent.textContent;
        clonedContent.textContent = '';
        clonedContent.id = `${contentId}-clone`;
        
        // Start the typewriter for this section
        const typewriter = new Typewriter(clonedContent, {
            speed: 10,
            delay: 300,
            onComplete: () => {
                // Typing is complete
                this.isTyping = false;
                
                // Move the nav buttons after this section and show them
                this.moveNavButtonsAfterLastSection();
                
                // No need to scroll here as moveNavButtonsAfterLastSection now handles scrolling
            },
            controller: this
        });
        
        // Set the text to be typed
        typewriter.words = originalText;
        
        // Start typing
        this.activeTypewriter = typewriter;
        await typewriter.type();
    }
    
    moveNavButtonsAfterLastSection() {
        // Remove the nav buttons from their current position
        if (this.navButtons.parentNode) {
            this.navButtons.parentNode.removeChild(this.navButtons);
        }
        
        // Append them to the conversation flow (after the last section)
        this.conversationFlow.appendChild(this.navButtons);
        
        // Update which buttons to show
        this.updateNavButtons();
        
        // Scroll to the bottom after moving nav buttons, but only if user is already at bottom
        if (this.activeTypewriter) {
            this.activeTypewriter.scrollToBottom();
        } else {
            // Check if user is at the bottom before scrolling
            const isAtBottom = this.isUserAtBottom();
            if (isAtBottom) {
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'auto'
                });
            }
        }
    }
    
    updateNavButtons() {
        // Only show buttons for questions that haven't been answered yet
        let hasUnansweredQuestions = false;
        
        document.querySelectorAll('.btn').forEach(button => {
            const sectionId = button.getAttribute('data-section');
            if (this.answeredQuestions.has(sectionId)) {
                button.style.display = 'none';
            } else {
                button.style.display = 'block';
                hasUnansweredQuestions = true;
            }
        });
        
        // Always show the nav buttons container if there are unanswered questions
        if (hasUnansweredQuestions) {
            this.navButtons.classList.add('visible');
        } else {
            this.navButtons.classList.remove('visible');
        }
    }
    
    isUserAtBottom() {
        // Calculate how far the user has scrolled
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        );
        
        // Consider the user at the bottom if they're within 100px of the bottom
        const threshold = 100;
        return documentHeight - (scrollTop + windowHeight) <= threshold;
    }
    
    // Start the initial typewriter for the introduction
    async startIntroduction() {
        const introElement = document.getElementById('typewriter-content');
        if (introElement) {
            this.isTyping = true;
            
            const typewriter = new Typewriter(introElement, {
                speed: 10,
                delay: 300,
                onComplete: () => {
                    // Typing is complete
                    this.isTyping = false;
                    
                    // Move the navigation buttons after the introduction
                    this.moveNavButtonsAfterLastSection();
                },
                controller: this
            });
            
            this.activeTypewriter = typewriter;
            await typewriter.type();
        }
    }

    handleScroll() {
        // Update userHasScrolled flag based on scroll position
        this.userHasScrolled = !this.isUserAtBottom();
    }
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the typewriter controller
    const controller = new TypewriterController();
    
    // Start the introduction
    controller.startIntroduction();
}); 