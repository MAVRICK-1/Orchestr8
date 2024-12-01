import { App } from "@slack/bolt";
import { assignIssue } from "../services/github"; // import your function
import { config } from "../config";

import { SlackCommandMiddlewareArgs, SlashCommand } from "@slack/bolt";

export const handleAssign = async ({ command, ack, respond }: SlackCommandMiddlewareArgs) => {
  await ack(); // Acknowledge the Slack command

  const args = command.text.split(" ");
  if (args.length < 2) {
    return respond({
      text: "Please provide a username and issue number in the format: `/assign @username issue_number repository_name`",
    });
  }

  const [username, issueNumber, repo] = args;
  const result = await assignIssue(username, issueNumber, repo);

  if (result.success) {
    return respond({ text: `Successfully assigned ${username} to issue #${issueNumber}` });
  } else {
    return respond({ text: `Failed to assign issue: ${result.message}` });
  }
};
