# Bicycle - AI-Native Educational Computer

## Overview

Bicycle is an AI-native computer designed specifically for education. This repository contains a prototype demo of the BIKE conversational interface for education, focusing on the interaction between teachers, students, and the AI.

The prototype demonstrates a scenario where a teacher is creating a computer history lesson with BIKE's assistance, followed by the classroom experience where students interact with the content.

## Project Structure

- `bike-dynamic.html` - Main demo page that loads conversation data dynamically
- `bike.js` - JavaScript functions for rendering the conversation data
- `conversations.json` - JSON data containing conversation scenarios
- `BIKE.html` - Original static HTML prototype (for reference)
- `BIKE-0.1.MD` - Project vision and design principles

## Key Features

- **Dynamic Rendering**: Conversation content is loaded from a JSON file and rendered dynamically
- **Modular Design**: Separates content from presentation for easy editing and expansion
- **Interactive Elements**: QA containers, timeline, matching activities, and other interactive modules
- **Scenario Management**: Tools for creating, editing, and exporting conversation scenarios

## Getting Started

1. Clone this repository
2. Open `bike-dynamic.html` in a web browser to view the demo
3. Explore the conversation structure in `conversations.json`
4. Modify the JSON to create new scenarios or customize existing ones

## JSON Structure

The conversation data is structured as follows:

```json
{
  "scenario": "Scenario Name",
  "design": {
    "colors": { /* Theme colors */ }
  },
  "participants": {
    "participant_id": {
      "type": "teacher|student|ai",
      "name": "Participant Name",
      "avatar": "URL to avatar image"
    }
  },
  "conversation": [
    {
      "id": "message-id",
      "speaker": "participant_id",
      "content": "Message content",
      "qa": {
        "question": "Question text",
        "answer": "Answer text"
      }
    },
    {
      "id": "module-id",
      "type": "module",
      "module_type": "timeline|hook-selection|matching-activity|knowledge-graph|tangent-tracker|student-dashboard",
      "title": "Module Title",
      "content": { /* Module-specific content */ }
    }
  ]
}
```

## Creating New Scenarios

You can create new scenarios either by:

1. Using the "New Scenario" button in the UI
2. Directly editing the `conversations.json` file
3. Exporting an existing scenario and modifying it

## Design Philosophy

Bicycle is built around these key principles:

- **Simplicity with depth** - "Low floor, high ceiling" approach to accessibility and capability
- **Context-driven experience** - Context built from multiple sources for enhanced learning
- **Dynamic interfaces** - Content defines UI appearance and behavior, adapting in real-time
- **Critical thinking first** - Every interaction designed to foster analytical thinking

## Future Development

- Support for multiple scenarios in the JSON file
- Real-time collaborative editing
- Integration with learning management systems
- Enhanced interactivity and gamification elements
- Expanded module types for different learning activities

## License

This project is for demonstration purposes. See license file for details. 