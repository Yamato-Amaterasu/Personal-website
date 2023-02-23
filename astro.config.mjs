import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://astro.build/",
  integrations: [mdx(), sitemap(), tailwind()],
  outDir: "public",
  publicDir: "static",
});
