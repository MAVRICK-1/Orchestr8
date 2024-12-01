#!/bin/bash

# Load environment variables
set -a
source /app/config/.env
set +a

# Start Kestra
exec java -cp /app/lib/* io.kestra.runner.Main server /app/config/application.yml
