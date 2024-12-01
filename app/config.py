# Configurations for GitHub, Slack, and Kestra
import os

SLACK_WEBHOOK_URL = os.getenv("SLACK_WEBHOOK_URL")
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
KESTRA_API_URL = os.getenv("KESTRA_API_URL")
