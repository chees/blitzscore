#!/bin/bash

npm run build
cp app.yaml dist
cd dist
gcloud app deploy --project dutch-blitz-scorekeeper
