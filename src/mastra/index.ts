import { Mastra } from "@mastra/core/mastra";
import { weatherWorkflow } from "./workflows/weather-workflow";
import { weatherAgent } from "./agents/weather-agent";
import { VercelDeployer } from "@mastra/deployer-vercel";

export const mastra = new Mastra({
  deployer: new VercelDeployer({
    maxDuration: 100,
    memory: 1536,
    regions: ["cdg1"],
  }),
  workflows: { weatherWorkflow },
  agents: { weatherAgent },
  telemetry: {
    enabled: false,
  },
  observability: {
    default: { enabled: true },
  },
});
