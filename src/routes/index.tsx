import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Software Consulting — Deep Technical Expertise" },
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
        Software Consulting
      </p>
      <h1 className="text-5xl md:text-7xl leading-tight max-w-3xl">
        What value do I offer?
      </h1>
    </header>
  );
}

function ValueCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="border-t border-border pt-8">
      <h3 className="text-2xl md:text-3xl mb-4">{title}</h3>
      <p className="text-muted-foreground text-lg leading-relaxed max-w-lg font-light">
        {description}
      </p>
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
    },
    {
      title: "Value is captured as committed code",
      description: "",
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
          <ValueCard key={v.title} title={v.title} description={v.description} />
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
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
