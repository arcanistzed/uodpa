import { readFileSync } from "node:fs";

const namespaces = ["about", "blog", "events", "footer", "governance", "home", "navbar", "team"];
const flatten = (value, prefix = "") => Object.entries(value).flatMap(([key, child]) => {
	const path = prefix ? `${prefix}.${key}` : key;
	return child && typeof child === "object" ? flatten(child, path) : [path];
});

for (const namespace of namespaces) {
	const load = locale => JSON.parse(readFileSync(new URL(`../public/locales/${locale}/${namespace}.json`, import.meta.url)));
	const english = flatten(load("en")).sort();
	const french = flatten(load("fr")).sort();
	if (JSON.stringify(english) !== JSON.stringify(french)) {
		throw new Error(`Translation keys differ for ${namespace}`);
	}
}

console.log(`Validated ${namespaces.length} translation namespaces.`);
