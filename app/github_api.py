import requests
from config import GITHUB_TOKEN

def fetch_issues(repo):
    url = f"https://api.github.com/repos/{repo}/issues"
    headers = {"Authorization": f"Bearer {GITHUB_TOKEN}"}
    response = requests.get(url, headers=headers)
    return response.json()

def assign_issue(repo, issue_number, assignee):
    url = f"https://api.github.com/repos/{repo}/issues/{issue_number}/assignees"
    headers = {"Authorization": f"Bearer {GITHUB_TOKEN}"}
    payload = {"assignees": [assignee]}
    response = requests.post(url, json=payload, headers=headers)
    return response.json()
