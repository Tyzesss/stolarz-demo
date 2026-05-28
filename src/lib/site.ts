export const SITE_NAME = "Stolarnia Wrocław";
export const SITE_TITLE = "Meble na wymiar Wrocław - Kuchnie, Szafy, Garderoby | Stolarnia Wrocław";
export const SITE_DESCRIPTION =
  "Projektujemy i wykonujemy meble na wymiar we Wrocławiu i okolicach. Kuchnie, szafy, garderoby i zabudowy stolarskie z pomiarem i montażem.";
export const SITE_OG_IMAGE = "/og-image.svg";

/** Ustaw w .env: VITE_SITE_URL=https://twoja-domena.pl — wymagane do podglądu linków (og:image) */
export const SITE_URL = import.meta.env.VITE_SITE_URL as string | undefined;

export function absoluteUrl(path: string): string | undefined {
  if (!SITE_URL) return undefined;
  return new URL(path, SITE_URL).href;
}
