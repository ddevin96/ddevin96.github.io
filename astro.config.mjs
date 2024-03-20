import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
    react(),
  ],
  site: 'https://ddevin96.github.io/',
});
