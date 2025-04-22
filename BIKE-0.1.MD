# BIKE 0.1

Bicycle is a computing platform that transforms how you interact with technology - making it intuitive, powerful, and personal. It serves as a learning and creating platform that evolves with your needs.

BIKE 0.1 is its very first manifestation. 

Real-time, persistent context across everything — not just chat history, but *living memory*.

Bicycle need to:
- Know you
- Evolve with you
- Understand nuance, tone, goals
- Stay fast, personal, private
- Sync across people, organizations, tools

It's not just technology. It's architecture + philosophy.

LLMs help, but gluing everything together—fluid, invisible, smart—is the real challenge.

### PRINCIPLES
1. Conversation *is* the interface
2. Start with the chat layer
3. Add memory + context (LLM + vector store)
4. Connect to everything (calendar, filesystem, web, etc.)
5. Express actions through pure intent, not code
6. Embed dynamic spaces (canvas, docs, UI, logic) inline
7. Enable shared presence, identity, permissions
8. Everything real-time, reactive, alive
9. No apps, no files, no modes—just flow
10. Ship small, weird, now

No code. No drag. No noise.  
Just mind → machine.

The real engine is:  
intent in → context → routing → action → feedback loop

## PHASE 1: CHAT UI
This phase focuses on establishing the core chat interface and basic infrastructure. We'll create a solid foundation with authentication, responsive design, and essential conversational components that will serve as the basis for all future development.

1. ✅ Set up Next.js + React project (Vercel AI Chat)
   - Modern, performance-optimized frontend framework
   - Server-side rendering for fast initial load times
2. ✅ Implement Supabase authentication
   - Secure user login/registration flows with OAuth options
   - Session management and user profile storage
3. ✅ Integrate OpenAI API
   - Connect to GPT-4o for intelligent conversation capabilities
   - Optimize for low-latency responses and context management
4. ✅ Add chat history persistence with Supabase
   - Real-time synchronization of conversations
   - Reliable storage with proper data security

## PHASE 2: UI, CONTEXT, MEMORY & BASIC ACTIONS

This phase builds the core interface and intelligence engine. We'll establish a simple but powerful visual context system that connects to memory and action capabilities. The goal is a minimal but cohesive system for organizing activities across time without overwhelming complexity.

1. ⬜ Improve user experience and identity
   - Logged out state and welcome screen
   - Conversational onboarding (login/signup through chat)
     - Google OAuth integration
   - Prepare interface for multi-user capabilities
     - User presence indicators (avatars for participants)
2. ⬜ Chat input UI flow
   - Single centered chat input at start of conversation
   - Input smoothly transitions to top after submission
   - AI response smoothly replaces input when ready
   - New chat input smoothly appears at center
   - AI answer stays in place till new user prompt
3. ⬜ Enable external service connections. Think "connect anything" but basic for now.
   - Email integration (OAuth for Gmail/Outlook)
     - Send emails via conversation
     - Access inbox content
   - Calendar integration (Google Calendar)
     - Two-way calendar sync
     - Import events as contexts
     - Export BIKE-created events
     - Simple conflict detection
   - Files Integration (Drive)
4. ⬜ Build basic context awareness system (converations = context)
   - Interactive conversation timeline with playback controls (play, pause, restart, speed)
   - Automatic context detection and separation (each conversation is context)
   - Context shift detection and creation (time gaps or complete topic changes)
   - Build data model for conversations (timestamps, user ID, content types)
   - Vector memory store setup (Pinecone, Weaviate, or Chroma)
   - Context-aware prompting with relevant memory retrieval
   - Light context window prioritizing speed over depth (for now)
   - Timeline visualization of past, present, and future contexts
   - Context visual hierarchy
     - Current context name displayed at 100% opacity
     - "Now" context shown at 100% opacity. Always with the black filled dot.
     - Intermediate contexts displayed at 25% opacity
5. ⬜ Implement intent recognition and routing
   - Detect general chat vs. actionable requests
   - Basic intent classification system
   - Route detected intents to appropriate handlers
   - Return action results within conversation flow
6. ⬜ Add temporal planning capabilities
   - Future context creation through conversation
   - Task and reminder creation
   - Link tasks to events or contexts
   - Support for recurring patterns
7. ⬜ Create documents (files) management and content (artifacts) visualization foundation
   - Content visualization framework for dynamic content generation
     - Basic preview "artifacts" for compatible formats (PDF, images, videos)
     - Artifact System Core Rules:
       - Content is always the subject - there is always an artifact displayed in full screen
       - Artifacts persist until explicitly replaced by context change or conversation request
       - Smooth transitions between artifacts to maintain contextual flow
       - Each artifact represents a unit of attention in the system
       - Artifacts can be referenced, modified, or expanded upon in conversation
     - Artifact state persistence across sessions
     - Basic artifact type system with default renderers
   - Document generation and storage
   - File listing and type identification
   - New document indicators

## PHASE 3: DYNAMIC INTELLIGENT CONTENT

The artifact system is Bicycle's core innovation - dynamically generating and displaying relevant UI components based on conversation context. This phase creates the framework for intelligent content adaptation and seamless transitions between different views and information formats.

0. ⬜ Implement Hello Screen as first artifact
   - Create "Hello, [name]" as the initial artifact displayed on login/startup
   - Apply core artifact rules to Hello Screen:
     - Displays in full screen as the subject of attention
     - Persists until explicitly replaced by context change or conversation
     - Includes smooth transitions when eventually replaced
     - Serves as the initial unit of attention in the system
   - Personalized everything. styling. greeting based on user profile and time of day
   - Include subtle ambient indicators for system status
   - Design for minimal cognitive load while establishing user preference
   - Implement persistence to maintain state across sessions

1. ⬜ Implement advanced component system with multiple view types
   - Calendar and Timeline View
     - Rich chronological display of events and tasks
     - Advanced filters (event/task/reminder/category)
     - Day/week/month views with seamless transitions
     - Create future events via conversation with templates
     - Context-aware templates for common needs
   - Enhanced Event Card
     - Rich interactive interface with dynamic content
     - Intelligent participant suggestions
     - Advanced sync capabilities with external calendars
   - Advanced Task Management
     - Task dependencies and relationships
     - Priority-based organization
     - Intelligent grouping by context
   - Integrated Planning Interface
     - Unified view of related tasks, events, and reminders
     - Smart suggestions based on patterns and preferences

2. ⬜ Develop temporal content system with intelligent integration
   - Dynamically display relevant events/tasks based on conversation context
   - Generate rich timeline previews for upcoming events
   - Advanced sync status with conflict resolution
   - Visual distinction between confirmed vs tentative events
   - Smart transitions between different view formats
   - Link related interactions to contexts with relationship mapping

3. ⬜ Create artifact adaptation system
   - Dynamic UI component generation based on context
   - Content format transformation (text to visual, etc.)
   - Artifact state persistence across sessions
   - Fluid transitions between different information views
   - Interactive elements within artifacts
   - Artifact System Implementation:
     - Full-screen immersive rendering framework that adapts to content type
     - Contextual artifact selection based on conversation intent
     - Artifact lifecycle management (creation, update, transition, archive)
     - History tracking for artifact states and transformations
     - User interaction patterns within artifacts (zoom, scroll, filter, edit)
     - Artifact relationship model (parent/child, related artifacts)
     - Shared artifact viewing with consistent state across users

## PHASE 4: MULTIMODAL & COLLABORATION

This phase expands Bicycle beyond text to include voice, visual, and spatial interactions, while also implementing core collaboration features. We'll create a more natural, intuitive experience that adapts to the user's preferred interaction methods and enables seamless teamwork.

1. ⬜ Develop audio interface with voice recognition and output
   - Voice input via microphone
   - Text-to-speech for responses
   - Voice command recognition
   - Voice as space-time anchor points
2. ⬜ Implement visual recognition system with camera integration
   - Basic user recognition
   - Optional profile linking
   - Visual content creation
   - Visual cues as location context signals
3. ⬜ Build smart assistant with contextual recommendations
   - Context-aware suggestions based on auto-detected space-time
   - Intelligent content organization
   - Guided questioning and reasoning
4. ⬜ Create shared document system with real-time collaboration
   - Embed React-based canvases/docs
   - Real-time sync (YJS or LiveBlocks)
   - Presence via WebSockets
5. ⬜ Implement multi-user conversations with shared context
   - Multi-user conversation capabilities with shared contexts
   - Shared viewing experiences
   - Peloton Mode (synchronized workspaces)
6. ⬜ Develop multi-device experience with adaptive layouts
   - Screen-aware content adaptation
   - Dynamic content distribution
   - Collaborative zones with persistent context metadata
7. ⬜ Add interactive reactions with sentiment analysis
   - Reaction capabilities
   - Sentiment analysis
   - Conversation feedback mechanisms
   - Reactions as context metadata
8. ⬜ Build identity system with organizational permissions
   - Auth (Clerk/Supabase/Auth0)
   - Organization structure, permissions
   - Scoped memory and context

## PHASE 5: KNOWLEDGE & INFRASTRUCTURE

The final phase focuses on how information is organized, analyzed, and shared, while also addressing critical infrastructure needs. We'll implement semantic storage, relationship mapping, and analytics to transform raw content into structured knowledge that becomes more valuable over time.

1. ⬜ Build semantic knowledge graph with relationship mapping
   - Content organization by meaning
   - Context relationship mapping
   - Knowledge graph visualization for linked contexts
   - Timeline visualization of interactions
2. ⬜ Create analytics dashboard with usage metrics
   - Context pattern tracking
   - Usage patterns
   - Productivity metrics
   - Learning progress tracking
3. ⬜ Implement export tools and sharing capabilities
   - Content export to standard formats
   - Sharing with external platforms
   - Collaboration with non-Bicycle users
   - Export of linked contexts
4. ⬜ Optimize UI rendering performance for responsive experience
   - Minimize latency for fluid conversation experience
   - Efficient rendering of dynamic components
5. ⬜ Develop error handling with graceful degradation
   - Graceful degradation when services are unavailable
   - Clear error messaging and recovery paths
6. ⬜ Implement automated testing with continuous integration
   - Automated testing for critical user flows
   - Performance and reliability benchmarks
7. ⬜ Set up deployment pipeline with version control
   - Automated build and deployment pipeline
   - Version management and rollback capabilities
8. ⬜ Add encryption and security controls
   - Data encryption in transit and at rest
   - Authentication and authorization controls
9. ⬜ Implement usage monitoring and error logging
   - Usage patterns and performance tracking
   - Error logging and alerting system
10. ⬜ Design optimized data schemas for context system
    - Lightweight schema optimized for real-time performance
    - Balance between flexibility and structured data organization
11. ⬜ Build modular architecture with service separation
    - Edge functions
    - Database for metadata (Postgres)
    - Blob store if needed (S3/R2)

## STACK
- Frontend: Next.js + React, TailwindCSS
- Backend: Node.js
- Database/Auth: Supabase
- Deployment: Vercel
- AI: OpenAI API (GPT-4o), Whisper API, local models (optional)
- Storage: Vector database for space-time contexts, cloud integrations
- Connectivity: WebSockets, REST APIs
- Real-time Sync: YJS or LiveBlocks

## ARTIFACT SYSTEM CONCEPTS
The artifact system serves as the primary visual interface for displaying content. Rather than traditional navigation between screens or pages, Bicycle presents a continuous stream of contextually relevant artifacts.

Key Concepts:
- Artifact: A visual representation of content (document, calendar, media, interactive element)
- Artifact Flow: The continuous stream of artifacts that adapt to conversation context
- Artifact Transitions: Smooth animations between artifacts that maintain spatial continuity
- Artifact States: Persistence of artifact configurations, scroll positions, and user interactions
- Artifact Types: Core renderers for common content (text, images, PDFs, calendars, etc.)
- Artifact Components: Reusable UI elements that compose more complex artifacts
- Artifact Controller: Logic that manages artifact lifecycle, selection, and transitions

Implementation Guidelines:
- Always display something (never an empty state) - default to contextual summaries when no specific artifact
- Full-screen artifacts with minimal UI chrome to emphasize content
- Artifacts should adapt to both conversation context and user interactions
- Support seamless transitions between related artifacts
- Enable artifact history navigation (back/forward) while maintaining context
- Allow references to artifacts in conversation (e.g., "the calendar we were looking at")
- Support multiple artifact views of the same underlying data

Example Flows:
1. Conversation-Initiated Artifact Transition:
   - User: "Show me my schedule for tomorrow"
   - System: [Current artifact transforms into calendar view focused on tomorrow]
   - User: "Add a meeting with Jake at 2pm"
   - System: [Calendar view remains but updates to show new meeting]
   - User: "What documents did Jake share last time?"
   - System: [Calendar smoothly transitions to document gallery, filtered for Jake's shares]

2. Context-Aware Artifact Adaptation:
   - [User enters meeting context with team]
   - System: [Automatically transitions to meeting notes artifact with agenda]
   - [Meeting discussion shifts to project timeline]
   - System: [Notes artifact morphs to include Gantt chart visualization]
   - [Meeting ends]
   - System: [Artifact transitions to meeting summary with action items]

3. Artifact Detail Flow:
   - [User viewing project dashboard artifact]
   - User: "Let's focus on the budget section"
   - System: [Dashboard transitions to detailed budget view artifact]
   - User: "Show me a breakdown of Q2 expenses"
   - System: [Budget artifact updates to show Q2 visualization]
   - User: "Save this as a report"
   - System: [Artifact maintains visualization but adds export UI elements]

Technical Implementation Approach:
- React component system with dynamic artifact rendering based on content type
- Artifact container manages transitions and maintains context
- State management handles artifact history and transitions
- Coordinate system for spatial continuity during transitions
- Animation manager for smooth transitions between artifacts
- Content priority system that determines what artifact should be shown based on conversation
- Artifact registry for registering renderers for different content types
- Observer pattern to update artifacts based on data changes

Visual Rendering Guidelines:
- Immersive Display: Artifacts occupy the full visual space with minimal UI chrome
- Breathing Room: Content is given ample margin and padding (content/padding ratio of 3:1)
- Spatial Consistency: Elements maintain spatial relationships during transitions
- Depth Hierarchy: Use subtle shadows and z-index for layering information
- Focus Points: Each artifact has a clear visual hierarchy with primary focus area
- Transition Physics: Animations follow natural motion with subtle easing (300-500ms duration)
- State Indicators: Visual cues show when artifacts are updating or transitioning
- Typography Scale: Clear type hierarchy with 4 distinct levels (title, heading, body, caption)
- Color System: Neutral background palette with accent colors for active elements only
- Density Control: Dynamic content density based on information importance
- Interaction Affordances: Clear visual cues for interactive elements
- Progression Cues: Visual hints that show relationships between sequential artifacts

Core Artifact Types:
1. Document Artifacts
   - Text Document: Rich text editing with formatting and collaborative editing
   - PDF Viewer: Paginated document with annotations and highlights
   - Markdown: Rich rendering with code highlighting and embedded content
   - Note: Quick capture with formatting and categorization

2. Temporal Artifacts
   - Calendar: Day/week/month views with event creation and manipulation
   - Timeline: Linear visualization of events, tasks with varying time scales
   - Schedule: Grid-based time allocation with blocks and availability
   - History: Chronological view of past interactions and artifacts

3. Visual Artifacts
   - Image Viewer: Full-screen image viewing with zoom and annotations
   - Gallery: Grid of visual content with filtering and organization
   - Chart/Graph: Data visualization with interactive controls
   - Canvas: Free-form drawing and diagramming space

4. Composite Artifacts
   - Dashboard: Multi-panel view with related information clusters
   - Board: Spatial organization of related artifacts (Kanban, etc.)
   - Split View: Side-by-side artifact comparison or complementary content
   - Layered View: Stacked artifacts with transparency and peek-through

5. Interactive Artifacts
   - Form: Structured data entry with validation and submission
   - Table: Structured data with sorting, filtering, and inline editing
   - List: Vertical organization with hierarchy and grouping
   - Configurator: Step-by-step process with decision tree

Each artifact type must implement the core artifact interface but can have specialized behavior and appearance appropriate to its content type and purpose.

## DATA MODEL (Core)
The foundation of Bicycle's context system. This simplified data structure powers the platform's ability to organize interactions into meaningful contexts without explicit user management.

// Minimal Data Model
Context {
  id: string                                    // Unique identifier
  title: string                                 // Human-readable name
  start_time: timestamp                         // When this context begins
  end_time: timestamp                           // When this context concludes
  location: string                              // Simple location reference
  participants: [user_ids]                      // Users involved
  tags: [string]                                // Purpose/topic identifiers
  parent_context_id: string (optional)          // Reference to parent context
  interactions: [interaction_ids]               // Messages/activities contained in this context
  status: string                                // "planned", "active", "completed", "archived"
  is_future: boolean                            // Flag to identify future planning contexts
  
  // Simple sync status
  external_id: string (optional)                // ID in external system (if synced)
  external_source: string (optional)            // "google", "outlook", etc. (if synced)
}

// Single entity type for all temporal items
TimeEntity {
  id: string                                    // Unique identifier
  title: string                                 // Human-readable name
  type: string                                  // "event", "task", "reminder"
  start_time: timestamp (optional)              // When this entity begins
  end_time: timestamp (optional)                // When this entity concludes
  due_date: timestamp (optional)                // For tasks/reminders
  location: string                              // Simple location reference
  status: string                                // "planned", "active", "completed"
  priority: number (optional)                   // Priority level (1-5)
  
  // Relationships
  parent_id: string (optional)                  // Parent event, task or context
  context_id: string (optional)                 // Related context
  
  // Simple sync data
  external_id: string (optional)                // ID in external system (if synced)
  external_source: string (optional)            // "google", "outlook", etc. (if synced)
  is_synced: boolean                            // Whether this syncs with external system
}

Interaction {
  id: string                                    // Unique identifier
  speaker: string                               // User who created this interaction
  content: string                               // Actual message or action data
  timestamp: datetime                           // When this interaction occurred
  type: string                                  // "message", "artifact", "plan"
  context_id: string                            // Which context contains this interaction
  
  // Optional references to entities
  references: [entity_ids] (optional)           // References to temporal entities
  
  metadata: {                                   // Optional extended properties
    location_override: string,                  // Override location for this interaction
    artifact_type: string,                      // Type of artifact (if applicable)
    entity_data: object (optional)              // Minimal data for entity references
  }
}

// Artifact data model
Artifact {
  id: string                                    // Unique identifier
  type: string                                  // "document", "calendar", "media", "canvas", etc.
  content_id: string                            // Reference to content (document_id, event_id, etc.)
  created_at: timestamp                         // When this artifact was created
  last_accessed: timestamp                      // When this artifact was last viewed
  context_id: string                            // Associated context
  interaction_id: string (optional)             // Creating interaction if applicable
  
  // State data for continuity
  view_state: {                                 // Persistent view configuration
    position: object,                           // Scroll position, zoom level, etc.
    filters: object,                            // Active filters or view options
    selection: object,                          // Selected elements or regions
    config: object                              // Component-specific configuration
  }
  
  // Relationships
  related_artifacts: [artifact_ids]             // Links to related artifacts
  parent_artifact_id: string (optional)         // Parent artifact if this is a derivation
  
  // Metadata
  title: string                                 // Display title
  description: string (optional)                // Brief description
  thumbnail: string (optional)                  // Preview image URL
  display_mode: string                          // "full", "split", "background"
  z_index: number                               // Stacking order for layered artifacts
  
  // Interaction handling
  allowed_actions: [string]                     // "edit", "share", "download", etc.
  event_handlers: {                             // Custom event handlers
    on_click: function,                         // Handle click within artifact
    on_scroll: function,                        // Handle scroll within artifact
    on_input: function,                         // Handle user input 
    on_data_update: function                    // Handle data source updates
  }
  
  // Transition data
  transition: {
    entry: {                                    // How artifact enters the view
      type: string,                             // "fade", "slide", "zoom", "morph"
      duration: number,                         // Animation duration in ms
      easing: string                            // Easing function
    },
    exit: {                                     // How artifact exits the view
      type: string,                             // "fade", "slide", "zoom", "morph"
      duration: number,                         // Animation duration in ms
      easing: string                            // Easing function
    }
  }
  
  // Rendering
  renderer: string                              // Component responsible for rendering
  renderer_props: object                        // Props passed to renderer
  layout: {                                     // Layout configuration
    grid_position: object,                      // Position in grid system
    padding: object,                            // Internal padding
    margins: object,                            // External margins
    max_dimensions: object                      // Size constraints
  }
}

// Artifact Registry (for component system)
ArtifactRenderer {
  type: string                                  // Artifact type this renders
  component: React.Component                    // React component to render
  default_props: object                         // Default props
  supported_transitions: [string]               // Transitions this renderer supports
  supported_view_modes: [string]                // View modes this renderer supports
  resource_requirements: object                 // CPU/memory requirements
}