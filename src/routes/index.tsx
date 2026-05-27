import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Wrench,
  Snowflake,
  Wind,
  ShieldCheck,
  Zap,
  Home,
  Award,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";
import heroImage from "@/assets/hero.png";
import { MobileCarousel } from "@/components/MobileCarousel";
import { StickyCallBar } from "@/components/StickyCallBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { SITE_TITLE, SITE_DESCRIPTION } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
    ],
  }),
});

const BRAND = "ClimaLocal";
const PHONE_DISPLAY = "600 000 000";
const PHONE_HREF = "tel:600000000";
const EMAIL = "kontakt@climalocal.pl";
const EMAIL_HREF = "mailto:kontakt@climalocal.pl";
const CITY = "Wrocław i okolice";
const ADDRESS = "ul. Przykładowa 12, Wrocław";
const HOURS = "Pn - Sob: 8:00 - 18:00";
const MAPS_URL = "https://maps.google.com/?q=Klimatyzacja+Wroclaw";

const NAV_LINKS = [
  { href: "#uslugi", label: "Usługi" },
  { href: "#dlaczego-my", label: "Dlaczego my" },
  { href: "#opinie", label: "Opinie" },
  { href: "#realizacje", label: "Realizacje" },
  { href: "#faq", label: "FAQ" },
  { href: "#wycena", label: "Wycena" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

const services = [
  { icon: Snowflake, title: "Montaż klimatyzacji", desc: "Profesjonalny montaż split i multi-split w domach i mieszkaniach." },
  { icon: Wrench, title: "Serwis i przeglądy", desc: "Coroczne przeglądy, czyszczenie i ozonowanie urządzeń." },
  { icon: Wind, title: "Rekuperacja", desc: "Dobór i montaż systemów wentylacji mechanicznej z odzyskiem ciepła." },
  { icon: Zap, title: "Pompy ciepła", desc: "Dobór i instalacja pomp powietrze-woda dla domów jednorodzinnych." },
  { icon: Home, title: "Klima do biura", desc: "Systemy klimatyzacji dla lokali usługowych i biur." },
  { icon: ShieldCheck, title: "Naprawa awaryjna", desc: "Szybka reakcja w przypadku awarii – dojazd nawet tego samego dnia." },
];

const whyUs = [
  { icon: Zap, title: "Dojazd w 24h", desc: "Szybka reakcja w całym Wrocławiu i okolicach." },
  { icon: Award, title: "5 lat gwarancji", desc: "Pełna gwarancja na montaż i urządzenia." },
  { icon: Home, title: "Lokalna firma", desc: "Działamy w regionie od ponad 10 lat." },
  { icon: CheckCircle2, title: "Darmowa wycena", desc: "Bezpłatny pomiar i wycena na miejscu." },
];

const reviews = [
  { name: "Anna K.", text: "Montaż szybki i czysty. Polecam każdemu, kto szuka solidnej firmy we Wrocławiu." },
  { name: "Marek W.", text: "Bardzo profesjonalna ekipa. Przyjechali na czas, wszystko działa idealnie." },
  { name: "Justyna P.", text: "Najlepsza cena z 5 ofert i super doradztwo przy wyborze modelu." },
  { name: "Tomasz L.", text: "Świetny serwis – po roku zrobili przegląd, wszystko jak nowe." },
  { name: "Karolina M.", text: "Polecam! Konkretni, kulturalni i bardzo szybcy. 5 gwiazdek." },
];

const gallery = [
  { image: "/gallery/mieszkanie-krzyki.jpg", alt: "Montaż klimatyzatora ściennego w salonie mieszkania" },
  { image: "/gallery/dom-bielany.jpg", alt: "Jednostki zewnętrzne klimatyzacji na elewacji domu" },
  { image: "/gallery/biuro-centrum.jpg", alt: "Klimatyzator ścienny w biurze" },
  { image: "/gallery/apartament-stare-miasto.jpg", alt: "Klimatyzator ścienny w apartamencie" },
  { image: "/gallery/dom-oborniki.jpg", alt: "Jednostka zewnętrzna klimatyzacji na elewacji domu" },
  { image: "/gallery/lokal-psie-pole.jpg", alt: "Klimatyzator ścienny w lokalu usługowym" },
];

const faqs = [
  { q: "Ile kosztuje montaż klimatyzacji?", a: "Standardowy montaż split 2,5–3,5 kW to koszt od 1800 zł brutto. Cena zależy od długości instalacji i typu urządzenia." },
  { q: "Jak szybko możecie zamontować klimatyzację?", a: "W sezonie zazwyczaj 3–7 dni od akceptacji wyceny. Poza sezonem nawet w 48h." },
  { q: "Czy oferujecie darmową wycenę?", a: "Tak. Wycena na miejscu lub zdalnie (na podstawie zdjęć) jest całkowicie bezpłatna i niezobowiązująca." },
  { q: "Jaką gwarancję dostanę?", a: "5 lat gwarancji na urządzenie (przy corocznym przeglądzie) oraz 2 lata na sam montaż." },
  { q: "Czy serwisujecie urządzenia kupione gdzie indziej?", a: "Tak, serwisujemy wszystkie popularne marki klimatyzatorów – niezależnie od miejsca zakupu." },
];

function CTAButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={PHONE_HREF}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-accent px-6 py-4 text-base font-semibold text-primary-foreground shadow-cool hover:shadow-glow active:scale-[0.98] transition-smooth ${className}`}
    >
      <Phone className="h-5 w-5" />
      Zadzwoń teraz
    </a>
  );
}

function LeadForm({ variant = "light" }: { variant?: "light" | "dark" }) {
  const inputClass =
    variant === "dark"
      ? "h-12 w-full rounded-xl border border-white/25 bg-white/10 px-4 text-base text-white placeholder:text-white/50 outline-none transition-smooth focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/30"
      : "h-12 w-full rounded-xl border border-input bg-muted/40 px-4 text-base outline-none transition-smooth focus:border-accent focus:ring-2 focus:ring-accent/30";

  const consentTextClass = variant === "dark" ? "text-white/65" : "text-muted-foreground";
  const consentLinkClass =
    variant === "dark"
      ? "text-brand-cyan underline underline-offset-2 hover:text-white"
      : "text-accent underline underline-offset-2 hover:text-foreground";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = PHONE_HREF;
      }}
      className="grid gap-2.5 text-left"
    >
      <input required type="tel" placeholder="Twój telefon" className={inputClass} />
      <input required type="text" placeholder="Imię" className={inputClass} />
      <label className={`flex cursor-pointer items-start gap-2.5 text-xs leading-snug ${consentTextClass}`}>
        <input
          required
          type="checkbox"
          name="rodo"
          className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-input accent-[var(--brand-teal)]"
        />
        <span>
          Akceptuję{" "}
          <Link to="/polityka-prywatnosci" className={consentLinkClass}>
            Politykę Prywatności
          </Link>{" "}
          i wyrażam zgodę na kontakt w sprawie wyceny (RODO).
        </span>
      </label>
      <button
        type="submit"
        className="h-12 rounded-full bg-gradient-accent font-semibold text-primary-foreground shadow-cool hover:shadow-glow transition-smooth"
      >
        Poproś o darmową wycenę
      </button>
    </form>
  );
}

function ServiceCard({ s }: { s: (typeof services)[number] }) {
  const Icon = s.icon;
  return (
    <div className="h-full rounded-2xl border border-border bg-card p-5 text-center shadow-card transition-spring md:text-left md:hover:-translate-y-1 md:hover:shadow-cool">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent text-primary-foreground shadow-glow max-md:mx-auto">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
    </div>
  );
}

function WhyCard({ w, dark = false }: { w: (typeof whyUs)[number]; dark?: boolean }) {
  const Icon = w.icon;
  if (dark) {
    return (
      <div className="h-full rounded-xl border border-white/10 bg-white/5 p-3 text-center shadow-card backdrop-blur-md transition-spring max-md:shadow-sm md:rounded-2xl md:p-5 md:hover:-translate-y-1 md:hover:shadow-cool">
        <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-accent text-primary-foreground shadow-glow md:mb-3 md:h-14 md:w-14">
          <Icon className="h-5 w-5 md:h-7 md:w-7" />
        </div>
        <h3 className="text-sm font-semibold leading-snug text-white md:text-base">{w.title}</h3>
        <p className="mt-1 hidden text-sm leading-relaxed text-white/70 md:block">{w.desc}</p>
      </div>
    );
  }
  return (
    <div className="h-full rounded-2xl border border-border bg-card p-5 text-center shadow-card transition-spring md:hover:-translate-y-1 md:hover:shadow-cool">
      <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-accent text-primary-foreground shadow-glow">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="font-semibold text-foreground">{w.title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
    </div>
  );
}

function ReviewCard({ r }: { r: (typeof reviews)[number] }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 text-center shadow-card transition-spring md:text-left md:hover:-translate-y-1 md:hover:shadow-cool">
      <div className="flex items-center justify-center gap-3 md:justify-start">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
          {r.name[0]}
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-foreground">{r.name}</p>
          <div className="mt-0.5 flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">&ldquo;{r.text}&rdquo;</p>
    </div>
  );
}

function GalleryCard({ g }: { g: (typeof gallery)[number] }) {
  return (
    <div className="relative h-52 overflow-hidden rounded-2xl border border-white/10 bg-brand-deep shadow-card ring-1 ring-white/5 md:h-56">
      <img
        src={g.image}
        alt={g.alt}
        className="h-full w-full object-cover"
        loading="lazy"
        decoding="async"
        width={800}
        height={480}
      />
    </div>
  );
}

const contactCards = [
  { type: "phone", icon: Phone, title: "Zadzwoń", value: PHONE_DISPLAY, href: PHONE_HREF },
  { type: "email", icon: Mail, title: "E-mail", value: EMAIL, href: EMAIL_HREF },
  { type: "address", icon: MapPin, title: "Adres", value: ADDRESS, href: MAPS_URL },
  { type: "hours", icon: Clock, title: "Godziny", value: HOURS, href: null as string | null },
];

function ContactCard({ c }: { c: (typeof contactCards)[number] }) {
  const Icon = c.icon;
  const inner = (
    <div className="h-full rounded-2xl border border-border bg-card p-5 text-center shadow-card transition-spring md:text-left md:hover:-translate-y-1 md:hover:shadow-cool">
      <Icon className="mb-3 h-6 w-6 text-accent max-md:mx-auto" />
      <p className="text-sm text-muted-foreground">{c.title}</p>
      <p className="mt-1 font-semibold text-foreground">{c.value}</p>
    </div>
  );
  return c.href ? (
    <a href={c.href} target={c.type === "address" ? "_blank" : undefined} rel="noreferrer" className="block h-full">
      {inner}
    </a>
  ) : (
    inner
  );
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border backdrop-blur-xl bg-background/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        <a
          href="#top"
          className="flex items-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-accent text-primary-foreground shadow-glow">
            <Snowflake className="h-5 w-5" />
          </div>
          <span className="font-bold tracking-tight text-foreground">{BRAND}</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground transition-smooth hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PHONE_HREF}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-cool hover:shadow-glow transition-smooth"
          >
            <Phone className="h-4 w-4" /> Zadzwoń
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex rounded-full p-2 text-foreground transition-smooth hover:bg-muted md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-b border-border bg-background/95 backdrop-blur-xl animate-fade-in md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-4 text-left">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-border/50 py-3 text-base font-semibold text-foreground transition-smooth last:border-0 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href={PHONE_HREF}
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-accent py-3 text-sm font-semibold text-primary-foreground shadow-cool transition-smooth"
            >
              <Phone className="h-4 w-4" /> Zadzwoń teraz
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background max-md:text-center">
      <SiteHeader />

      <section
        id="top"
        className="relative scroll-mt-24 overflow-hidden bg-gradient-hero px-4 pt-6 pb-10 text-primary-foreground max-md:min-h-[36rem] md:min-h-[34rem] md:pt-12 md:pb-16"
      >
        <div
          className="hero-photo"
          style={{ backgroundImage: `url(${heroImage})` }}
          role="img"
          aria-label=""
        />
        <div className="hero-photo-scrim" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 opacity-25 max-md:opacity-20 md:opacity-35"
          style={{ background: "var(--gradient-radial)" }}
        />
        <div className="relative z-10 mx-auto max-w-6xl md:grid md:grid-cols-2 md:gap-10 md:items-center">
          <div className="md:text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              <CheckCircle2 className="h-3.5 w-3.5" /> Darmowa wycena w 24h
            </span>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              Montaż i Serwis
              <br />
              Klimatyzacji,
              <br />
              {CITY}
            </h1>
            <p className="mt-3 text-base text-white/80 md:text-lg">
              Szybki montaż, darmowa wycena w 24h i profesjonalny dobór urządzeń.
            </p>
            <div className="mt-5 flex justify-center md:justify-start">
              <CTAButton />
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/70 md:justify-start">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-cyan text-brand-cyan" />
                ))}
              </div>
              <span>4.9 / 5 · 48 opinii Google</span>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-card p-5 text-card-foreground shadow-card ring-1 ring-white/10 md:mt-0 max-md:text-center md:text-left">
            <p className="text-sm font-semibold text-foreground">Oddzwonimy w ciągu godziny</p>
            <p className="mt-1 text-xs text-muted-foreground">Zostaw numer – darmowa wycena bez zobowiązań.</p>
            <div className="mt-4">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section
        id="uslugi"
        eyebrow="Usługi"
        title="Nasze usługi"
        subtitle="Kompleksowa obsługa klimatyzacji od A do Z."
      >
        <MobileCarousel items={services} renderItem={(s) => <ServiceCard s={s} />} />
        <div className="hidden md:grid grid-cols-3 gap-5">
          {services.map((s) => (
            <ServiceCard key={s.title} s={s} />
          ))}
        </div>
      </Section>

      {/* WHY US */}
      <Section
        id="dlaczego-my"
        eyebrow="Zalety"
        title="Dlaczego my"
        subtitle="Lokalnie, szybko i z gwarancją."
        dark
      >
        <div className="grid grid-cols-2 gap-2 md:hidden">
          {whyUs.map((w) => (
            <WhyCard key={w.title} w={w} dark />
          ))}
        </div>
        <div className="hidden md:grid grid-cols-4 gap-5">
          {whyUs.map((w) => (
            <WhyCard key={w.title} w={w} dark />
          ))}
        </div>
      </Section>

      {/* REVIEWS */}
      <Section
        id="opinie"
        eyebrow="Opinie"
        title="Opinie klientów"
        subtitle="4.9 / 5 na podstawie 48 opinii w Google Maps."
      >
        <div className="mx-auto mb-8 flex max-w-md flex-col items-center gap-2 rounded-2xl border border-border bg-card px-6 py-4 shadow-card sm:flex-row sm:justify-center sm:gap-4">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-center text-sm font-semibold text-foreground sm:text-left">
            4.9 / 5 · <span className="font-normal text-muted-foreground">48 opinii w Google Maps</span>
          </p>
        </div>
        <MobileCarousel items={reviews} renderItem={(r) => <ReviewCard r={r} />} />
        <div className="hidden md:grid grid-cols-3 gap-5">
          {reviews.slice(0, 3).map((r) => (
            <ReviewCard key={r.name} r={r} />
          ))}
        </div>
      </Section>

      {/* GALLERY */}
      <Section
        id="realizacje"
        eyebrow="Portfolio"
        title="Nasze realizacje"
        subtitle="Wybrane montaże w Twojej okolicy."
        dark
      >
        <MobileCarousel dark items={gallery} renderItem={(g) => <GalleryCard g={g} />} />
        <div className="hidden md:grid grid-cols-3 gap-5">
          {gallery.map((g) => (
            <GalleryCard key={g.image} g={g} />
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section
        id="faq"
        eyebrow="FAQ"
        title="Najczęstsze pytania"
        subtitle="Wszystko, co warto wiedzieć przed montażem."
      >
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full text-left">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground md:text-base">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* FINAL CTA */}
      <section
        id="wycena"
        className="relative scroll-mt-24 overflow-hidden bg-brand-deep px-4 pt-6 pb-12 md:pt-8 md:pb-14"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{ background: "var(--gradient-radial)" }}
        />
        <div className="relative mx-auto max-w-3xl text-center text-primary-foreground">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">Darmowa wycena</p>
          <h2 className="mt-1.5 text-2xl font-bold tracking-tight md:text-4xl">Potrzebujesz klimatyzacji?</h2>
          <p className="mt-2 text-base text-white/80">Darmowa wycena w 24h.</p>
          <div className="mx-auto mt-8 max-w-md rounded-2xl border border-white/15 bg-white/10 p-5 shadow-cool backdrop-blur-md max-md:text-center md:text-left max-md:[&_form]:text-left">
            <p className="text-sm font-semibold text-white">Wolisz oddzwonienie?</p>
            <p className="mt-1 text-xs text-white/70">Zostaw numer — oddzwonimy w ciągu godziny.</p>
            <div className="mt-4">
              <LeadForm variant="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <Section
        id="kontakt"
        eyebrow="Kontakt"
        title="Skontaktuj się z nami"
        subtitle="Zadzwoń, napisz na e-mail lub odwiedź nas — jesteśmy czynni Pn–Sob 8:00–18:00."
      >
        <MobileCarousel items={contactCards} renderItem={(c) => <ContactCard c={c} />} />
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactCards.map((c) => (
            <ContactCard key={c.title} c={c} />
          ))}
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-brand-deep px-4 pt-8 pb-24 text-primary-foreground md:pb-8">
        <div className="mx-auto max-w-6xl text-center text-sm text-white/70">
          <p className="font-bold text-white">{BRAND} - Klimatyzacja i Serwis</p>
          <p className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <a href={PHONE_HREF} className="inline-flex items-center gap-1 transition-smooth hover:text-white">
              <Phone className="h-3.5 w-3.5" /> {PHONE_DISPLAY}
            </a>
            <a href={EMAIL_HREF} className="inline-flex items-center gap-1 transition-smooth hover:text-white">
              <Mail className="h-3.5 w-3.5" /> {EMAIL}
            </a>
            <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {ADDRESS}</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {HOURS}</span>
          </p>
          <p className="mt-3 text-xs">
            <Link
              to="/polityka-prywatnosci"
              className="underline underline-offset-2 transition-smooth hover:text-white"
            >
              Polityka Prywatności (RODO)
            </Link>
            {" · "}© {new Date().getFullYear()} {BRAND}. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </footer>

      <StickyCallBar />
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  muted,
  dark,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  muted?: boolean;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 overflow-hidden px-4 pt-6 pb-10 md:pt-8 md:pb-14 ${
        dark
          ? "bg-brand-deep text-primary-foreground"
          : muted
            ? "bg-gradient-cool"
            : ""
      }`}
    >
      {dark && (
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{ background: "var(--gradient-radial)" }}
        />
      )}
      <div className="relative mx-auto max-w-6xl">
        <div className={`text-center ${eyebrow ? "mb-5 md:mb-8" : "mb-6 md:mb-10"}`}>
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              {eyebrow}
            </p>
          )}
          <h2
            className={`text-2xl font-bold tracking-tight md:text-4xl ${
              eyebrow ? "mt-1.5" : ""
            } ${dark ? "text-white" : "text-foreground"}`}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className={`text-sm leading-relaxed md:text-base ${
                eyebrow ? "mt-1.5" : "mt-2"
              } ${dark ? "text-white/70" : "text-muted-foreground"}`}
            >
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
