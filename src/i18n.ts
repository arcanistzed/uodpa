import aboutEn from "../public/locales/en/about.json";
import blogEn from "../public/locales/en/blog.json";
import eventsEn from "../public/locales/en/events.json";
import footerEn from "../public/locales/en/footer.json";
import governanceEn from "../public/locales/en/governance.json";
import homeEn from "../public/locales/en/home.json";
import navbarEn from "../public/locales/en/navbar.json";
import teamEn from "../public/locales/en/team.json";
import aboutFr from "../public/locales/fr/about.json";
import blogFr from "../public/locales/fr/blog.json";
import eventsFr from "../public/locales/fr/events.json";
import footerFr from "../public/locales/fr/footer.json";
import governanceFr from "../public/locales/fr/governance.json";
import homeFr from "../public/locales/fr/home.json";
import navbarFr from "../public/locales/fr/navbar.json";
import teamFr from "../public/locales/fr/team.json";

export type Locale = "en" | "fr";
export type Namespace = keyof (typeof translations)["en"];

const translations = {
	en: { about: aboutEn, blog: blogEn, events: eventsEn, footer: footerEn, governance: governanceEn, home: homeEn, navbar: navbarEn, team: teamEn },
	fr: { about: aboutFr, blog: blogFr, events: eventsFr, footer: footerFr, governance: governanceFr, home: homeFr, navbar: navbarFr, team: teamFr },
} as const;

const localizedSegments = {
	about: "a-propos",
	events: "evenements",
	governance: "gouvernance",
	team: "equipe",
} as const;

export function useTranslations(locale: Locale, namespace: Namespace) {
	return (key: string): string => {
		let value: unknown = translations[locale][namespace];
		for (const segment of key.split(".")) {
			if (!value || typeof value !== "object" || !(segment in value)) return key;
			value = (value as Record<string, unknown>)[segment];
		}
		return typeof value === "string" ? value : key;
	};
}

export function localizePath(path: string, locale: Locale): string {
	const segments = path.split("/").filter(Boolean);
	if (locale === "fr" && segments[0] in localizedSegments) {
		segments[0] = localizedSegments[segments[0] as keyof typeof localizedSegments];
	}
	const prefix = locale === "fr" ? "/fr" : "";
	return `${prefix}/${segments.join("/")}${segments.length ? "/" : ""}`;
}

export function switchLocalePath(path: string, locale: Locale): string {
	const segments = path.split("/").filter(Boolean);
	if (segments[0] === "fr") segments.shift();
	const originalSegment = Object.entries(localizedSegments).find(([, translated]) => translated === segments[0])?.[0];
	if (originalSegment) segments[0] = originalSegment;
	return localizePath(`/${segments.join("/")}`, locale);
}
