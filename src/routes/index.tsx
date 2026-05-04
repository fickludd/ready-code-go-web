import { createFileRoute } from "@tanstack/react-router";
import johanProfile from "@/assets/johan-profile.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ready Code Go — Software Consulting" },
      { name: "description", content: "1-man software consulting. Deep expertise in parallel execution, distribution, compilers and persistence. Value delivered as committed code." },
    ],
  }),
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
        Ready Code Go
      </p>
      <h1 className="text-5xl md:text-7xl leading-tight max-w-3xl">
        What we do
      </h1>
    </header>
  );
}

function ValueCard({ title, description, sub }: { title: string; description: string; sub?: string }) {
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
  const values = [
    {
      title: "Reduce time and cost of internal processes",
      description: "Build custom optimized tools to open up bottlenecks in your processes.",
    },
    {
      title: "Increase progress on hard technical problems",
      description: "I bring lots of experience in solving issues around hard software problems like parallel execution, distribution, compilers and persistence.",
      sub: "Value is captured as committed code.",
    },
    {
      title: "Future-proof architecture and technical direction",
      description: "With broad knowledge across all engineering disciplines and a deep first-principles understanding of software, I help you aligning technical direction with business requirements.",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="grid gap-16">
        {values.map((v) => (
          <ValueCard key={v.title} title={v.title} description={v.description} sub={v.sub} />
        ))}
      </div>
    </section>
  );
}

function WhyMeSection() {
  const reasons = [
    "Deep technical expertise from solving the hardest software problems",
    "Highly anchored in end-users, business value and ROI",
    "High speed output using agent-assisted processes as default",
    "I'm good at explaining hard problems simply",
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="border-t border-border pt-8">
        <h2 className="text-4xl md:text-5xl mb-12">Why me?</h2>
        <ul className="space-y-6">
          {reasons.map((r) => (
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

function TestimonialCard({ quote }: { quote: string }) {
  return (
    <blockquote className="border-l-2 border-accent pl-6 py-2">
      <p className="text-lg md:text-xl font-light italic leading-relaxed text-foreground/80">
        "{quote}"
      </p>
    </blockquote>
  );
}

function TestimonialsSection() {
  const testimonials = [
    "It's unreal to watch you code, sometimes it looks like a bad hacker scene from a 90s movie.",
    "Your endless optimism, high energy, and strong sense of responsibility have made working with you such a joy and pleasure.",
    "You bring such a rare combination of sharp thinking, genuine care for customers, and infectious joy to everything you do.",
    "You are one of the smartest and nicest people I have ever worked with and I hope to do it again sometime!",
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="border-t border-border pt-8">
        <h2 className="text-4xl md:text-5xl mb-12">Testimonials</h2>
        <div className="grid gap-10">
          {testimonials.map((t) => (
            <TestimonialCard key={t} quote={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="max-w-4xl mx-auto px-6 py-16 border-t border-border">
      <div className="flex flex-col items-center gap-6">
        <img src={johanProfile} alt="Johan Teleman" className="h-20 w-20 rounded-full object-cover" />
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/johan-teleman-7341263b"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="text-sm font-medium">Johan Teleman</span>
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          Want to work together? You'll find me where first and last name meet <span className="italic">at gmail</span>.
        </p>
        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
