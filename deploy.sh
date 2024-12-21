#!/bin/bash
# Navigate to the app directory
# cd /Dec-2024

# Pull the latest changes from the main branch
git pull origin master

# Install any new or updated dependencies
npm install

# Restart the application using pm2
pm2 restart all


