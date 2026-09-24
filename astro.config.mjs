// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployment target. Override with env vars in CI or locally:
//   SITE_URL=https://bravoalpha2.github.io  SITE_BASE=/-PersonalPage.github.io
// If you rename the repo to "bravoalpha2.github.io" (recommended), set SITE_BASE=/
const site = process.env.SITE_URL ?? 'https://bravoalpha2.github.io';
const base = process.env.SITE_BASE ?? '/-PersonalPage.github.io';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
  vite: { build: { cssMinify: true } },
});
