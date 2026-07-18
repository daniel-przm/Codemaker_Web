// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://codemaker.es",
  trailingSlash: "always",
  redirects: {
    "/producto": "/",
  },
  integrations: [
    tailwind(),
    sitemap({
      // Páginas "en construcción" (noindex): fuera del sitemap
      filter: (page) => !["/edu/", "/cursos-online/"].some((p) => page.endsWith(p)),
    }),
    react(),
  ],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
      },
    },
  },
  output: "static",
  build: {
    inlineStylesheets: "auto",
  },
  server: {
    host: true,
    port: 4321,
  },
});