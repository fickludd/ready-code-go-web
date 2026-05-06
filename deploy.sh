#!/usr/bin/env bash
set -euo pipefail

# Required environment variables:
#   S3_ACCESS_KEY_ID
#   S3_SECRET_ACCESS_KEY
#   S3_BUCKET
#   S3_ENDPOINT_URL
#   S3_REGION
#
# Scaleway example:
#   S3_ENDPOINT_URL=https://s3.fr-par.scw.cloud
#   S3_REGION=fr-par
#
# OVH example:
#   S3_ENDPOINT_URL=https://s3.gra.io.cloud.ovh.net
#   S3_REGION=gra

: "${S3_ACCESS_KEY_ID:?}"
: "${S3_SECRET_ACCESS_KEY:?}"
: "${S3_BUCKET:?}"
: "${S3_ENDPOINT_URL:?}"
: "${S3_REGION:?}"

export AWS_ACCESS_KEY_ID="$S3_ACCESS_KEY_ID"
export AWS_SECRET_ACCESS_KEY="$S3_SECRET_ACCESS_KEY"

echo "Building..."
npm run build

echo "Uploading assets (long-lived cache)..."
aws s3 sync dist/ "s3://$S3_BUCKET" \
  --endpoint-url "$S3_ENDPOINT_URL" \
  --region "$S3_REGION" \
  --delete \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude "index.html"

echo "Uploading index.html (no cache)..."
aws s3 cp dist/index.html "s3://$S3_BUCKET/index.html" \
  --endpoint-url "$S3_ENDPOINT_URL" \
  --region "$S3_REGION" \
  --cache-control "no-cache, no-store, must-revalidate"

echo "Done. Site is live."
