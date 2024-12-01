import { exec } from "child_process";

// Command to merge a PR
export const handlePRMerge = async ({ command, ack, respond }: any) => {
  await ack();

  const [owner, repo, pr] = command.text.split(" ");
  
  if (!owner || !repo || !pr) {
    return respond("Usage: /pr-merge <owner> <repo> <pr>");
  }

  const mergeCommand = `node app.js merge --owner=${owner} --repo=${repo} --pr=${pr}`;

  exec(mergeCommand, (error, stdout, stderr) => {
    if (error) {
      return respond(`Error: ${stderr}`);
    }
    respond(`Successfully merged PR #${pr} in ${owner}/${repo}`);
  });
};
