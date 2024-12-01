#!/bin/bash

# Set Azure app name and resource group
APP_NAME="kestra-dashboard-app"
RESOURCE_GROUP="kestra-resource-group"
LOCATION="East US"

# Create a resource group
az group create --name $RESOURCE_GROUP --location $LOCATION

# Deploy Kestra dashboard (via Docker or other method)
az webapp create --name $APP_NAME --resource-group $RESOURCE_GROUP --plan <your-plan-name> --deployment-container-image-name <your-docker-image>

# Set environment variables for Azure Web App (like Kestra API URLs)
az webapp config appsettings set --resource-group $RESOURCE_GROUP --name $APP_NAME \
  --settings KESTRA_API_URL=<your-kestra-api-url> KESTRA_CLIENT_ID=<your-client-id>

echo "Kestra Dashboard deployed at: https://$APP_NAME.azurewebsites.net"
