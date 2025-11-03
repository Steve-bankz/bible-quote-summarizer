import { Agent } from "@mastra/core/agent";
import { getExplainedQuoteByTopic } from "../tools/getExplainedQuoteByTopic.js";

export const explainedQuoteAgent = new Agent({
  id: "explainedQuoteAgent",
  name: "Explained Quote Agent",
  instructions: "Takes a topic and returns a Bible verse with explanation.",
  model: {
    providerId: "openrouter",
    modelId: "gpt-4o-mini",
    apiKey: process.env.OPENROUTER_API_KEY,
  },
  tools: { getExplainedQuoteByTopic },
});
