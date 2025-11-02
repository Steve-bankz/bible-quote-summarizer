# The Explained Bible Quote Agent

This repository contains the source code for the "Explained Bible Quote Agent," an AI agent built for Stage 3 of the HNG Internship. The agent is designed to integrate with Telex.im, providing users with inspirational Bible verses and clear, simple explanations based on a topic they provide.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technical Stack](#technical-stack)
- [How It Works](#how-it-works)
- [Setup and Installation](#setup-and-installation)
- [Running Locally](#running-locally)
- [Deployment](#deployment)
- [Telex.im Integration](#telexim-integration)

## Project Overview

The core goal of this project was to build a useful and interactive AI agent using Mastra and integrate it into the Telex.im platform. The agent solves a simple but meaningful problem: the need for quick, accessible, and understandable spiritual encouragement.

A user can interact with the agent in any Telex channel by asking for a Bible verse about a specific topic (e.g., "strength," "hope," "love"). The agent then performs a multi-step workflow to deliver a complete and formatted response.

## Features

- **Topic-Based Verse Retrieval**: Understands user requests for verses on specific topics.
- **External API Integration**: Fetches verse text and references from a public Bible API.
- **AI-Powered Explanations**: Uses a Large Language Model (LLM) via OpenRouter to generate concise and easy-to-understand explanations for each verse.
- **Formatted Responses**: Delivers a clean, well-formatted response using Markdown for a great user experience in Telex.
- **Direct Telex Integration**: Built to work seamlessly with the Telex `a2a/mastra-a2a-node` for direct communication.

## Technical Stack

- **Framework**: Mastra (`@mastra/core@0.23.3`)
- **Language**: TypeScript
- **Runtime**: Node.js
- **Key Libraries**:
  - `zod` for schema validation.
  - `dotenv` for managing environment variables.
- **External Services**:
  - **Bible API**: `https://bible-api.com` for fetching verse data.
  - **OpenRouter**: For accessing various LLMs to generate explanations.
- **Deployment**: Mastra Cloud (via GitHub integration)

## How It Works

The project consists of a single, powerful Mastra agent that handles the entire workflow:

1.  **Receives Request**: The agent's tool is triggered by a message from Telex, which contains the user's full text (e.g., "a verse about peace").
2.  **Parses Topic**: It extracts the key topic ("peace") from the user's message.
3.  **Finds Verse Reference**: It looks up a relevant Bible verse reference from an internal topic map (e.g., "peace" -> "John 14:27").
4.  **Fetches Verse**: It calls the public Bible API to get the full text for that reference.
5.  **Generates Explanation**: It sends the verse and its text to an LLM via OpenRouter with a prompt asking for a simple explanation.
6.  **Formats and Responds**: It combines all the information into a single, user-friendly message and returns it as a JSON object with a `text` field, which Telex then displays in the chat.

## Setup and Installation

To set up and run this project locally, you will need Node.js (v18 or higher) and npm installed.

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Steve-bankz/bible-quote-summarizer.git
    cd your-repository-name
    ```

2.  **Install the dependencies:**

    ```bash
    npm install
    ```

3.  **Create an environment file:**
    Create a file named `.env` in the root of the project directory. This file is required to store your API key for the explanation service.

4.  **Add your API Key:**
    Open the `.env` file and add your OpenRouter API key.
    ```
    OPENROUTER_API_KEY=sk-or-v1-your-key-here
    ```

## Running Locally

This project uses the Mastra development environment for local testing.

1.  **Start the Mastra dev server:**

    ```bash
    npx mastra dev
    ```

    This will start the Mastra Playground, which is available at `http://localhost:4111/`.

2.  **Test in the Playground:**
    - Navigate to the Playground URL in your browser.
    - Select the `getExplainedQuoteByTopic` tool under the `explainedQuoteAgent`.
    - In the input field, provide a JSON object with a topic, like so:
      ```json
      { "topic": "strength" }
      ```
    - Click "Run" to see the agent's output in the browser.

    _(Note: The local Playground for this Mastra version has known input formatting issues. The deployed version is designed to work seamlessly with Telex.)_

## Deployment

This agent is designed to be deployed directly to **Mastra Cloud** via its GitHub integration.

1.  **Push to GitHub**: Ensure your latest code is pushed to a public GitHub repository.
2.  **Connect to Mastra Cloud**:
    - Log in to your Mastra Cloud account.
    - Create a new agent/project and connect it to your GitHub repository.
3.  **Add Environment Variable**:
    - In the Mastra Cloud project settings, navigate to "Environment Variables" or "Secrets".
    - Add your `OPENROUTER_API_KEY` with its value.
4.  **Deploy**: Trigger a new deployment from the dashboard. Mastra Cloud will automatically build and host the agent.

Upon successful deployment, Mastra Cloud will provide a permanent public URL for the agent, which can then be used in Telex.

## Telex.im Integration

To connect this agent to your Telex workflow:

1.  Navigate to your workflow editor in Telex.im.
2.  Find your `a2a/mastra-a2a-node`.
3.  In the node's settings, update the **`url`** field with the permanent URL provided by Mastra Cloud after deployment.
4.  Save and activate the workflow.

The agent will now be live and responsive in your Telex channels.
