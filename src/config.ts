// src/config.ts
import dotenv from "dotenv";
dotenv.config();

export const config = {
  GITHUB_TOKEN: process.env.GITHUB_TOKEN || "",
  SLACK_WEBHOOK_URL: process.env.SLACK_WEBHOOK_URL || "",
  SLACK_BOT_TOKEN: process.env.SLACK_BOT_TOKEN || "",
  SLACK_SIGNING_SECRET: process.env.SLACK_SIGNING_SECRET || "",
  KESTRA_BASE_URL: process.env.KESTRA_BASE_URL || "http://localhost:8080",
  KESTRA_API_TOKEN: process.env.KESTRA_API_TOKEN || "",
};
