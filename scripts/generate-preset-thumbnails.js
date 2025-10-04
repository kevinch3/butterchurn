#!/usr/bin/env node
import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = dirname(__dirname);
const examplesDir = join(rootDir, 'examples');
const demoPath = resolve(examplesDir, 'demo.html');
const thumbnailsDir = join(examplesDir, 'thumbnails');

async function capturePresetThumbnails() {
  await mkdir(thumbnailsDir, { recursive: true });

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--allow-file-access-from-files'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 960, height: 540, deviceScaleFactor: 1 });

    const fileUrl = `file://${demoPath}`;
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    await page.waitForFunction('window.__butterchurnDemoReady === true', { timeout: 15000 });

    const presetNames = await page.evaluate(() => window.__butterchurnDemo.getPresetKeys());

    for (const name of presetNames) {
      const fileSafe = name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '_')
        .replace(/^_+|_+$/g, '');
      const outputPath = join(thumbnailsDir, `${fileSafe || 'preset'}.gif`);

      if (existsSync(outputPath)) {
        continue;
      }

      const loaded = await page.evaluate((presetName) => {
        return window.__butterchurnDemo.loadPreset(presetName);
      }, name);

      if (!loaded) {
        console.warn(`Skipping preset (not found on page): ${name}`);
        continue;
      }

      await page.evaluate(() => {
        window.__butterchurnDemo.resume();
      });
      await new Promise((resolve) => setTimeout(resolve, 1200));

      const dataUrl = await page.evaluate(() => window.__butterchurnDemo.captureFrame());
      await page.evaluate(() => {
        window.__butterchurnDemo.pause();
      });

      if (!dataUrl || !dataUrl.startsWith('data:image/png;base64,')) {
        console.warn(`Failed to capture frame for preset: ${name}`);
        continue;
      }

      const pngBuffer = Buffer.from(dataUrl.split(',')[1], 'base64');
      const gifBuffer = await sharp(pngBuffer)
        .resize(120, 68, { fit: 'cover' })
        .gif()
        .toBuffer();

      await writeFile(outputPath, gifBuffer);
      console.log(`Generated thumbnail: ${outputPath}`);
    }
  } finally {
    await browser.close();
  }

  console.log('All preset thumbnails generated.');
}

capturePresetThumbnails().catch((err) => {
  console.error('Failed to generate preset thumbnails:', err);
  process.exitCode = 1;
});
