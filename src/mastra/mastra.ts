import "dotenv/config";
import { Mastra } from "@mastra/core/mastra";
import { explainedQuoteAgent } from "./agents/explained-quote-agent.js";

export const mastra = new Mastra({
  agents: { explainedQuoteAgent },
});
