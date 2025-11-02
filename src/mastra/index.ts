import "dotenv/config";
import { Mastra } from "@mastra/core/mastra";
import { explainedQuoteAgent } from "./agents/explained-quote-agent";
export const mastra = new Mastra({
// minimal config; add provider/env as needed
agents: { explainedQuoteAgent },
});