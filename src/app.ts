import { App } from "@slack/bolt";
import { handleAssign } from "./commands/assign";
import { handlePRMerge } from "./commands/prMerge";
import { handleRepoStatus } from "./commands/repoStatus";
import { handleCreateIssue } from "./commands/createIssue";
import { config } from "./config";

const app = new App({
  token: config.SLACK_BOT_TOKEN,
  signingSecret: config.SLACK_SIGNING_SECRET,
});

// Registering Slack commands to their handlers
app.command("/assign", handleAssign);
app.command("/pr-merge", handlePRMerge);
app.command("/repo-status", handleRepoStatus);
app.command("/create-issue", handleCreateIssue);

(async () => {
  // Starting the Slack bot
  await app.start(process.env.PORT || 3000);
  console.log("Slack bot is running!");
})();
