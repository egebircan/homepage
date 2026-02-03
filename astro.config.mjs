// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://egebircan.github.io',
  base: '/homepage',
  markdown: {
    shikiConfig: {
      theme: 'vesper',
    },
  },
});
