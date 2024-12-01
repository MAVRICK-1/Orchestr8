#!/bin/bash

# Variables
RESOURCE_GROUP="kestra-resource-group"
APP_SERVICE_PLAN="kestra-app-service-plan"
WEB_APP_NAME="kestra-dashboard"
LOCATION="EastUS"

# Login to Azure
az login

# Create a resource group
az group create --name $RESOURCE_GROUP --location $LOCATION

# Create an App Service plan
az appservice plan create --name $APP_SERVICE_PLAN --resource-group $RESOURCE_GROUP --sku B1 --is-linux

# Create a web app for the Kestra dashboard
az webapp create --resource-group $RESOURCE_GROUP --plan $APP_SERVICE_PLAN --name $WEB_APP_NAME --runtime "JRE|11"

# Deploy Kestra dashboard files to the Azure Web App (e.g., from the local folder or a GitHub repository)
# Example using GitHub for CI/CD:
az webapp deployment source config --name $WEB_APP_NAME --resource-group $RESOURCE_GROUP --repo-url https://github.com/your-username/your-repository --branch main --manual-integration

echo "Kestra dashboard deployed to Azure successfully!"
