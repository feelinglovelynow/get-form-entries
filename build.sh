#!/bin/bash
pnpm badge &&
rm -rf ./dist ./tsc &&
pnpm tsc &&
node ./esbuild.js &&
cp ./src/index.ts ./dist/index.ts
