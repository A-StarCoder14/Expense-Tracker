#!/usr/bin/env sh

set -e

npm install

cd client

npm install

npm run build

npm start