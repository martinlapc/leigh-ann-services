// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://services.leighannmartin.com",
  base: "/",
  // Old preview URLs, kept working after the Teal & Clay theme became the main site.
  redirects: {
    "/new": "/",
    "/new/capability-brief": "/capability-brief/",
  },
});
