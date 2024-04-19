import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://comforting-hummingbird-edf0da.netlify.app/",
  integrations: [preact()]
});