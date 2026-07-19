import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://uodpa-apnuo.org",
	integrations: [icon(), sitemap()],
	i18n: {
		defaultLocale: "en",
		locales: ["en", "fr"],
		routing: { prefixDefaultLocale: false },
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
