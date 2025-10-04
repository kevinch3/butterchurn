#!/usr/bin/env node
import { cp, mkdir, rename, rm } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = dirname(__dirname);
const examplesDir = join(rootDir, 'examples');
const outputDir = join(rootDir, 'demo-site');

async function prepareGhPages() {
  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });
  await cp(examplesDir, outputDir, { recursive: true });
  const demoPath = join(outputDir, 'demo.html');
  const indexPath = join(outputDir, 'index.html');
  await rename(demoPath, indexPath);
  console.log('Prepared demo-site directory for GitHub Pages');
}

prepareGhPages().catch((err) => {
  console.error('Failed to prepare GitHub Pages content:', err);
  process.exitCode = 1;
});
