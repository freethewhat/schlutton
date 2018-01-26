#!/bin/sh

echo "Start Server" >> /var/www/schlutton/log.txt
export PATH=/home/msutton/.nvm/versions/node/v8.9.4/bin:$PATH
forever start --sourceDir /var/www/schlutton server.js >> /var/www/schlutton/log.txt 2>&1

