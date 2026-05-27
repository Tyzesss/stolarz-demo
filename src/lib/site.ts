export const SITE_NAME = "ClimaLocal";
export const SITE_TITLE = "Klimatyzacja Wrocław – Montaż i Serwis 24h | ClimaLocal";
export const SITE_DESCRIPTION =
  "Montaż klimatyzacji we Wrocławiu i okolicach. Darmowa wycena w 24h, szybki dojazd, gwarancja. Zadzwoń: 600 000 000.";
export const SITE_OG_IMAGE = "/gallery/mieszkanie-krzyki.jpg";

/** Ustaw w .env: VITE_SITE_URL=https://twoja-domena.pl — wymagane do podglądu linków (og:image) */
export const SITE_URL = import.meta.env.VITE_SITE_URL as string | undefined;

export function absoluteUrl(path: string): string | undefined {
  if (!SITE_URL) return undefined;
  return new URL(path, SITE_URL).href;
}
