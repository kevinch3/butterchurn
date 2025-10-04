#!/usr/bin/env node
import { mkdir, copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = dirname(__dirname);
const vendorDir = join(root, 'examples', 'vendor');

const assets = [
  {
    from: join(root, 'node_modules', 'jquery', 'dist', 'jquery.min.js'),
    to: join(vendorDir, 'jquery.min.js'),
  },
  {
    from: join(root, 'node_modules', 'lodash', 'lodash.min.js'),
    to: join(vendorDir, 'lodash.min.js'),
  },
  {
    from: join(root, 'node_modules', 'butterchurn-presets', 'dist', 'base.min.js'),
    to: join(vendorDir, 'butterchurn-presets-base.min.js'),
  },
  {
    from: join(root, 'node_modules', 'butterchurn-presets', 'dist', 'extra.min.js'),
    to: join(vendorDir, 'butterchurn-presets-extra.min.js'),
  },
  {
    from: join(root, 'node_modules', 'normalize.css', 'normalize.css'),
    to: join(vendorDir, 'normalize.css'),
  },
  {
    from: join(root, 'dist', 'butterchurn.js'),
    to: join(vendorDir, 'butterchurn.js'),
  },
];

async function prepare() {
  await mkdir(vendorDir, { recursive: true });
  const copyActions = assets.map(async ({ from, to }) => {
    await mkdir(dirname(to), { recursive: true });
    await copyFile(from, to);
  });
  await Promise.all(copyActions);
  console.log('Demo assets copied to examples/vendor');
}

prepare().catch((err) => {
  console.error('Failed to prepare demo assets:', err);
  process.exitCode = 1;
});
