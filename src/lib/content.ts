import raw from "../../content.md?raw";

export interface Value {
  title: string;
  description: string;
  sub?: string;
}

export interface ContactLink {
  name: string;
  url: string;
}

export interface Contact {
  links: ContactLink[];
  note: string;
}

export interface SiteContent {
  hero: { title: string; subtitle: string; intro?: string };
  values: { heading: string; items: Value[] };
  whyMe: { heading: string; items: string[] };
  testimonials: { heading: string; items: string[] };
  skills: { heading: string; items: string[] };
  cta: { heading: string; body: string; link: ContactLink };
  contact: Contact & { heading: string };
}

function parseSections(md: string): { heading: string; body: string }[] {
  return md
    .split(/^## /m)
    .slice(1)
    .map((part) => {
      const nl = part.indexOf("\n");
      return { heading: part.slice(0, nl).trim(), body: part.slice(nl + 1) };
    });
}

function parseHero(text: string): SiteContent["hero"] {
  const lines = text.trim().split("\n").map((l) => l.trim()).filter(Boolean);
  const intro = lines.slice(2).join(" ") || undefined;
  return {
    title: lines[0]?.replace(/^#+\s*/, "") ?? "",
    subtitle: lines[1] ?? "",
    intro,
  };
}

function parseValues(text: string): Value[] {
  return text
    .split(/^### /m)
    .filter((p) => p.trim())
    .map((part) => {
      const nl = part.indexOf("\n");
      const title = part.slice(0, nl).trim();
      const body = part.slice(nl + 1).trim();
      const subMatch = body.match(/^>\s*(.+)$/m);
      const sub = subMatch?.[1]?.trim();
      const description = body.replace(/^>.*$/gm, "").trim();
      return sub ? { title, description, sub } : { title, description };
    });
}

function parseList(text: string): string[] {
  return text
    .split("\n")
    .filter((l) => l.trim().startsWith("- "))
    .map((l) => l.trim().slice(2).trim());
}

function parseBlockquotes(text: string): string[] {
  return text
    .split("\n")
    .filter((l) => l.trim().startsWith("> "))
    .map((l) => l.trim().slice(2).trim());
}

function parseCTA(text: string): { body: string; link: ContactLink } {
  const linkMatch = text.match(/\[([^\]]+)\]\(([^)]+)\)/);
  const link = linkMatch ? { name: linkMatch[1], url: linkMatch[2] } : { name: "", url: "" };
  const body = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "").trim();
  return { body, link };
}

function parseContact(text: string): Contact {
  const links: ContactLink[] = [];
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match;
  while ((match = linkRegex.exec(text)) !== null) {
    links.push({ name: match[1], url: match[2] });
  }
  const note = text
    .split("\n")
    .filter((l) => l.trim() && !/^\[.+\]\(.+\)/.test(l.trim()))
    .join(" ")
    .trim();
  return { links, note };
}

function parse(): SiteContent {
  const parts = raw.split(/^## /m);
  const heroPart = parts[0];
  const sections = parseSections(raw);
  const [valuesSection, whyMeSection, testimonialsSection, skillsSection, ctaSection, contactSection] = sections;

  return {
    hero: parseHero(heroPart),
    values: {
      heading: valuesSection?.heading ?? "",
      items: parseValues(valuesSection?.body ?? ""),
    },
    whyMe: {
      heading: whyMeSection?.heading ?? "",
      items: parseList(whyMeSection?.body ?? ""),
    },
    testimonials: {
      heading: testimonialsSection?.heading ?? "",
      items: parseBlockquotes(testimonialsSection?.body ?? ""),
    },
    skills: {
      heading: skillsSection?.heading ?? "",
      items: parseList(skillsSection?.body ?? ""),
    },
    cta: {
      heading: ctaSection?.heading ?? "",
      ...parseCTA(ctaSection?.body ?? ""),
    },
    contact: {
      heading: contactSection?.heading ?? "",
      ...parseContact(contactSection?.body ?? ""),
    },
  };
}

export const content = parse();
