import requests
from config import KESTRA_API_URL

def trigger_workflow(workflow_id, inputs):
    url = f"{KESTRA_API_URL}/api/v1/executions"
    payload = {
        "namespace": "slack_repo_monitor",
        "flowId": workflow_id,
        "inputs": inputs
    }
    headers = {"Content-Type": "application/json"}
    response = requests.post(url, json=payload, headers=headers)
    return response.json()
