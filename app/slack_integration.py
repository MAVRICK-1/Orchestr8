from github_api import assign_issue, fetch_issues

def process_slack_command(command_data):
    command = command_data.get("text", "").strip()
    if command.startswith("/assign"):
        return handle_assign(command)
    elif command.startswith("/list-issues"):
        return handle_list_issues(command)
    else:
        return {"text": "Unknown command"}

def handle_assign(command):
    _, assignee, issue_number, repo = command.split()
    response = assign_issue(repo, issue_number, assignee)
    if response:
        return {"text": f"Issue #{issue_number} assigned to {assignee}"}
    return {"text": "Failed to assign issue"}

def handle_list_issues(command):
    _, repo = command.split()
    issues = fetch_issues(repo)
    if issues:
        formatted_issues = "\n".join([f"- #{i['number']}: {i['title']}" for i in issues])
        return {"text": f"Open issues in {repo}:\n{formatted_issues}"}
    return {"text": "No open issues found"}
