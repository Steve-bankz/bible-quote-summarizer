import { explainedQuoteAgent } from "./agents/explained-quote-agent.js";

async function main() {
  const result = await explainedQuoteAgent.generate("Give me a verse about hope");
  console.log(result.text);
}

main();
