import { createFileRoute } from "@tanstack/react-router";
import { content, type Value, type ContactLink } from "@/lib/content";
import johanProfile from "@/assets/johan-profile.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <ValueSection />
      <WhyMeSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <header className="flex flex-col items-center justify-center px-6 pt-32 pb-24 text-center">
      <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
        {content.hero.subtitle}
      </p>
      <h1 className="text-5xl md:text-7xl leading-tight max-w-3xl">
        {content.hero.title}
      </h1>
      {content.hero.intro && (
        <p className="mt-8 text-lg md:text-xl font-light text-muted-foreground max-w-xl leading-relaxed">
          {content.hero.intro}
        </p>
      )}
    </header>
  );
}

function ValueCard({ title, description, sub }: Value) {
  return (
    <div className="border-t border-border pt-8">
      <h3 className="text-2xl md:text-3xl mb-4">{title}</h3>
      <p className="text-muted-foreground text-lg leading-relaxed max-w-lg font-light">
        {description}
      </p>
      {sub && (
        <p className="text-muted-foreground/70 text-base leading-relaxed max-w-lg font-light mt-3 pl-4 border-l-2 border-accent">
          {sub}
        </p>
      )}
    </div>
  );
}

function ValueSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="border-t border-border pt-8">
        <h2 className="text-4xl md:text-5xl mb-12">{content.values.heading}</h2>
        <div className="grid gap-16">
          {content.values.items.map((v) => (
            <ValueCard key={v.title} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyMeSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="border-t border-border pt-8">
        <h2 className="text-4xl md:text-5xl mb-12">{content.whyMe.heading}</h2>
        <ul className="space-y-6">
          {content.whyMe.items.map((r) => (
            <li key={r} className="flex items-start gap-4">
              <span className="mt-2 block h-2 w-2 rounded-full bg-accent shrink-0" />
              <span className="text-lg font-light text-muted-foreground leading-relaxed">{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="border-t border-border pt-8">
        <h2 className="text-4xl md:text-5xl mb-12">{content.testimonials.heading}</h2>
        <div className="grid gap-10">
          {content.testimonials.items.map((t) => (
            <blockquote key={t} className="border-l-2 border-accent pl-6 py-2">
              <p className="text-lg md:text-xl font-light italic leading-relaxed text-foreground/80">
                "{t}"
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function renderInline(text: string) {
  return text.split(/\*([^*]+)\*/).map((part, i) =>
    i % 2 === 1 ? <em key={i}>{part}</em> : part
  );
}

function LinkIcon({ url }: { url: string }) {
  if (url.includes("linkedin.com")) {
    return (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    );
  }
  if (url.includes("github.com")) {
    return (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    );
  }
  if (url.includes("scholar.google.com")) {
    return (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 10a8 8 0 0 1 7.162 3.44L24 9.5z"/>
      </svg>
    );
  }
  return null;
}

function ContactLink({ link }: { link: ContactLink }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
    >
      <LinkIcon url={link.url} />
      <span className="text-sm font-medium">{link.name}</span>
    </a>
  );
}

function Footer() {
  return (
    <footer className="max-w-4xl mx-auto px-6 py-16 border-t border-border">
      <div className="flex flex-col items-center gap-6">
        <img src={johanProfile} alt="Profile photo" className="h-20 w-20 rounded-full object-cover" />
        <div className="flex flex-wrap justify-center items-center gap-6">
          {content.contact.links.map((link) => (
            <ContactLink key={link.url} link={link} />
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          {renderInline(content.contact.note)}
        </p>
        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
