import { useEffect } from "react";
import { Link } from "wouter";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { PillTags } from "@/components/site/PillTags";
import { CountUp } from "@/components/site/CountUp";

const domains = [
  { n: "01", k: "Robotics", d: "Autonomous mechanical systems engineered for precision in motion, perception, and coordinated action." },
  { n: "02", k: "Automation", d: "Industrial and process automation that compresses time, removes friction, and scales human capability." },
  { n: "03", k: "Embedded Systems", d: "Low-level firmware and hardware integration designed for reliability at the edge of compute." },
  { n: "04", k: "AI Systems", d: "Applied intelligence woven into infrastructure — models, agents, and decision systems built for production." },
  { n: "05", k: "Software Platforms", d: "Foundational platforms that engineers, operators and machines build on top of." },
];

const work = [
  {
    tag: "Robotics & Automation · 2026",
    title: "Autonomous Delivery Robot",
    desc: "A reusable autonomy layer combining perception, control and safety primitives for ground robotics.",
    img: "/project-robot.png",
  },
  {
    tag: "EV & Energy Systems · 2026",
    title: "Smart EV Charging Platform",
    desc: "A connected charging infrastructure delivering secure access, intelligent power allocation, and real-time station management.",
    img: "/project-ev.png",
  },
  {
    tag: "Cybersecurity & Embedded · 2026",
    title: "Secure Smart Access System",
    desc: "A security-first access control architecture combining embedded systems, computer vision, and privacy-preserving authentication.",
    img: "/project-access.png",
  },
];

const testimonials = [
  {
    quote: "QEVRIX builds with the kind of intent you rarely see at the student level. Their work feels production-grade.",
    name: "Placeholder Name",
    role: "Faculty Mentor",
  },
  {
    quote: "Their autonomous platform was the most thoughtfully engineered project we reviewed this year.",
    name: "Placeholder Name",
    role: "Industry Reviewer",
  },
  {
    quote: "A team that treats engineering as a craft, not a checklist. Looking forward to what they build next.",
    name: "Placeholder Name",
    role: "Innovation Partner",
  },
];

export function Home() {
  useEffect(() => {
    document.title = "QEVRIX — Engineering Beyond Submission";
  }, []);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 overflow-hidden">
        <div className="container-q flex flex-col items-center">
          <Reveal>
            <PillTags filled="QEVRIX" outline="Engineering Ecosystem" className="justify-center mb-10" />
          </Reveal>
          <h1 className="text-display-hero max-w-[14ch]">
            <Reveal as="span" className="block">Engineering Beyond</Reveal>
            <Reveal as="span" delay={160} className="block">
              Submission<span style={{ color: "#FF6B00" }}>.</span>
            </Reveal>
          </h1>
          <Reveal delay={360}>
            <p className="mt-10 max-w-xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
              Building systems, enabling innovation, and shaping the future of engineering.
            </p>
          </Reveal>
          <Reveal delay={500}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Link to="/projects" className="btn-pill btn-pill-primary">View Work</Link>
              <Link to="/about" className="btn-pill btn-pill-secondary">Inside QEVRIX</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE GAP */}
      <section className="py-40 md:py-64">
        <div className="container-q max-w-5xl mx-auto">
          <Reveal>
            <PillTags filled="01" outline="The Gap" className="mb-10" />
          </Reveal>
          <Reveal>
            <h2 className="text-display-xl">
              Engineering education teaches <span style={{ color: "var(--color-muted-foreground)" }}>concepts.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <h2 className="text-display-xl mt-6">
              Real engineering demands <span style={{ color: "#FF6B00" }}>execution.</span>
            </h2>
          </Reveal>
        </div>
      </section>

      {/* WHY QEVRIX EXISTS */}
      <section className="py-32 md:py-48">
        <div className="container-q">
          <Reveal>
            <PillTags filled="02" outline="Why QEVRIX Exists" className="mb-16" />
          </Reveal>
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <Reveal className="md:col-span-7">
              <h2 className="text-display-xl">
                A bridge between <em className="not-italic" style={{ color: "var(--color-muted-foreground)" }}>what is taught</em> and what gets <span style={{ color: "var(--color-foreground)" }}>built</span>.
              </h2>
            </Reveal>
            <Reveal delay={160} className="md:col-span-5 md:pt-10 space-y-6">
              <p className="leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
                QEVRIX is not an agency, a coaching institute, or a service shop. It is an engineering ecosystem built around a single conviction — that the next generation of engineers must learn by building real systems, not by submitting another assignment.
              </p>
              <p className="leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
                Our mission is to bridge learning and building, and to grow — quietly, deliberately — into a company that defines the engineering standard of its decade.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ENGINEERING DOMAINS */}
      <section className="py-32 md:py-48">
        <div className="container-q mb-20">
          <Reveal>
            <PillTags filled="03" outline="Engineering Domains" className="mb-6" />
            <h2 className="text-display-xl max-w-3xl">Five disciplines. One engineering standard.</h2>
          </Reveal>
        </div>
        <ul className="container-q flex flex-col gap-12 md:gap-16">
          {domains.map((d, i) => (
            <li key={d.n}>
              <Reveal delay={i * 80}>
                <div className="grid md:grid-cols-12 gap-6">
                  <span className="md:col-span-2 font-mono text-xs pt-3" style={{ color: "var(--color-muted-foreground)" }}>{d.n}</span>
                  <h3 className="md:col-span-5 font-display text-3xl md:text-5xl font-semibold tracking-tight">{d.k}</h3>
                  <p className="md:col-span-5 leading-relaxed md:pt-3" style={{ color: "var(--color-muted-foreground)" }}>{d.d}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* STATS — BY THE NUMBERS — no divider lines, generous gap only */}
      <section
        className="py-32 md:py-44"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="container-q">
          <Reveal>
            <PillTags filled="05" outline="By The Numbers" className="mb-16" />
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-20">
            {[
              { num: 5, suffix: "+", label: "Systems Built" },
              { num: 5, suffix: "",  label: "Engineering Domains" },
              { num: 2026, suffix: "", label: "Founded" },
              { text: "India · Remote", label: "Based" },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div>
                  <div className="stat-number">
                    {"text" in s ? s.text : <CountUp end={s.num!} suffix={s.suffix} />}
                  </div>
                  <p
                    className="font-mono uppercase"
                    style={{ color: "#FF6B00", fontSize: 10, letterSpacing: "0.18em", fontWeight: 500, marginTop: 12 }}
                  >
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE VISION */}
      <section className="relative py-40 md:py-64 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(60% 50% at 50% 50%, rgba(255,107,0,0.14), transparent 70%)" }} />
        <div className="container-q relative text-center">
          <Reveal>
            <PillTags filled="06" outline="Future Vision" className="justify-center mb-12" />
          </Reveal>
          <Reveal>
            <h2 className="text-display-hero max-w-[18ch] mx-auto">
              Today an ecosystem.{" "}
              <span style={{ color: "var(--color-muted-foreground)" }}>Tomorrow,</span> a company building the future of engineering.
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-10 max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
              Today: Engineering Support. Tomorrow: Innovation Labs · Automation Systems · R&amp;D · Technology Products · Future Platforms.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="py-32 md:py-48">
        <div className="container-q mb-20 flex items-end justify-between gap-8 flex-wrap">
          <Reveal>
            <PillTags filled="07" outline="Selected Work" className="mb-6" />
            <h2 className="text-display-xl">A small body of work. Built with intent.</h2>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/projects" className="btn-pill btn-pill-secondary">All Projects →</Link>
          </Reveal>
        </div>

        <div className="container-q grid gap-20 md:gap-28">
          {work.map((w, i) => (
            <Reveal key={w.title} delay={i * 80}>
              <article className="grid md:grid-cols-12 gap-8 md:gap-12 items-end">
                {/* Image */}
                <div className="md:col-span-7">
                  <div
                    className="project-img-wrap"
                    style={{ aspectRatio: "16/10", position: "relative", borderRadius: 2 }}
                  >
                    <img
                      src={w.img}
                      alt={w.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
                    />
                    <div
                      className="project-img-overlay"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "40%",
                        background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 100%)",
                        pointerEvents: "none",
                      }}
                    />
                    <span
                      className="absolute font-mono uppercase"
                      style={{ fontSize: 10, letterSpacing: "0.22em", color: "rgba(255,255,255,0.7)", bottom: 20, left: 20 }}
                    >
                      Case Study / 0{i + 1}
                    </span>
                  </div>
                </div>
                {/* Text */}
                <div className="md:col-span-5 space-y-5">
                  <p className="font-mono uppercase" style={{ fontSize: 11, letterSpacing: "0.22em", color: "var(--color-muted-foreground)" }}>{w.tag}</p>
                  <h3 className="font-display text-3xl md:text-4xl font-semibold leading-tight">{w.title}</h3>
                  <p className="leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>{w.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="container-q mt-16 text-center">
          <Reveal>
            <Link to="/projects" className="font-mono uppercase text-sm"
              style={{ color: "#FF6B00", letterSpacing: "0.12em", textDecoration: "none" }}>
              View All Projects →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS / RECOGNITION */}
      <section className="py-32 md:py-48">
        <div className="container-q">
          <Reveal>
            <PillTags filled="Recognition" outline="Placeholder · To be replaced" className="mb-10" />
          </Reveal>
          <Reveal>
            <h2 className="text-display-xl mb-16">What people say.</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 150}>
                <article
                  className="testimonial-card"
                  style={{
                    background: "#0D0D0D",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderLeft: "2px solid #FF6B00",
                    borderRadius: 2,
                    padding: "40px 36px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderTopColor    = "rgba(255,107,0,0.3)";
                    el.style.borderRightColor  = "rgba(255,107,0,0.3)";
                    el.style.borderBottomColor = "rgba(255,107,0,0.3)";
                    el.style.borderLeftColor   = "#FF6B00";
                    el.style.background        = "#111111";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderTopColor    = "rgba(255,255,255,0.07)";
                    el.style.borderRightColor  = "rgba(255,255,255,0.07)";
                    el.style.borderBottomColor = "rgba(255,255,255,0.07)";
                    el.style.borderLeftColor   = "#FF6B00";
                    el.style.background        = "#0D0D0D";
                  }}
                >
                  <div
                    className="quote-mark"
                    style={{ color: "#FF6B00", fontSize: 72, lineHeight: 1, fontFamily: "Georgia, serif", opacity: 0.9, marginBottom: 4 }}
                  >
                    &ldquo;
                  </div>
                  <p
                    className="testimonial-quote"
                    style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, lineHeight: 1.8, fontStyle: "italic", fontFamily: "Georgia, serif", flex: 1, marginTop: -16 }}
                  >
                    {t.quote}
                  </p>
                  <div
                    className="testimonial-divider"
                    style={{ height: 1, background: "rgba(255,255,255,0.06)", margin: "28px 0" }}
                  />
                  <p
                    className="testimonial-name font-mono"
                    style={{ color: "#fff", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="testimonial-role"
                    style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, marginTop: 4 }}
                  >
                    {t.role}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA — THE STANDARD */}
      <section
        className="standard-section relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #0A0A0A 0%, #0D0D0D 100%)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          padding: "120px 0",
        }}
      >
        <div
          aria-hidden="true"
          className="standard-glow pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(255,107,0,0.05) 0%, transparent 60%)" }}
        />
        <Reveal>
          <div className="container-q text-center relative">
            <PillTags filled="08" outline="The Standard" className="justify-center mb-12" />
            <h2 className="standard-heading" style={{ lineHeight: 1.05 }}>
              <Reveal as="span" className="block" style={{ fontSize: "clamp(3rem,8vw,6rem)", fontWeight: 300, fontFamily: "Georgia, serif", fontStyle: "italic" }}>
                Build.
              </Reveal>
              <Reveal as="span" delay={120} className="block font-display" style={{ fontSize: "clamp(3rem,8vw,6rem)", fontWeight: 700, fontStyle: "normal" }}>
                Innovate.
              </Reveal>
              <Reveal as="span" delay={240} className="block" style={{ fontSize: "clamp(3rem,8vw,6rem)", fontWeight: 300, fontFamily: "Georgia, serif", fontStyle: "italic", color: "#FF6B00" }}>
                Evolve.
              </Reveal>
            </h2>
            <Reveal delay={360}>
              <p
                className="standard-sub"
                style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", marginTop: 24, letterSpacing: "0.03em" }}
              >
                The standard is not what gets submitted. It is what gets built.
              </p>
            </Reveal>
            <Reveal delay={480}>
              <div className="mt-12">
                <Link
                  to="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#FF6B00",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: 14,
                    padding: "14px 32px",
                    borderRadius: 4,
                    textDecoration: "none",
                    transition: "background 0.2s, transform 0.2s",
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "#e05a00"; el.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "#FF6B00"; el.style.transform = "none"; }}
                >
                  Start a Conversation →
                </Link>
              </div>
              <p
                className="standard-email"
                style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", marginTop: 20 }}
              >
                hello@qevrix.com · India · Remote
              </p>
            </Reveal>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
