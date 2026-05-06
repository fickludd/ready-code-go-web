import { createFileRoute } from "@tanstack/react-router";
import { content, type Value } from "@/lib/content";
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

function Footer() {
  return (
    <footer className="max-w-4xl mx-auto px-6 py-16 border-t border-border">
      <div className="flex flex-col items-center gap-6">
        <img src={johanProfile} alt={content.contact.linkedinName} className="h-20 w-20 rounded-full object-cover" />
        <div className="flex items-center gap-4">
          <a
            href={content.contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="text-sm font-medium">{content.contact.linkedinName}</span>
          </a>
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
