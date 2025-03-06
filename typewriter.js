class Typewriter {
    constructor(element, text, speed = 30) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.currentIndex = 0;
        this.isTyping = false;
    }

    type() {
        if (this.currentIndex < this.text.length) {
            this.isTyping = true;
            const currentChar = this.text[this.currentIndex];
            
            if (currentChar === '\n') {
                this.element.innerHTML += '<br>';
            } else {
                this.element.innerHTML += currentChar;
            }
            
            // Auto-scroll to keep the latest typed text in view
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
            
            this.currentIndex++;
            setTimeout(() => this.type(), this.speed);
        } else {
            this.isTyping = false;
        }
    }

    start() {
        this.element.innerHTML = '';
        this.currentIndex = 0;
        this.type();
    }
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('typewriter-content');
    const text = content.textContent;
    content.textContent = ''; // Clear the content initially
    
    const typewriter = new Typewriter(content, text, 30);
    typewriter.start();
}); 