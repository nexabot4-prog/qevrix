import { useEffect } from "react";
import { Link } from "wouter";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { PillTags } from "@/components/site/PillTags";

const principles = [
  { n: "01", k: "Systems Over Submissions", d: "We measure ourselves by what runs in the real world, not by what is presented in a slide deck." },
  { n: "02", k: "Depth Over Surface", d: "We invest in the unglamorous engineering layers — the ones that decide whether a system lasts a week or a decade." },
  { n: "03", k: "Build to Endure", d: "Every system we touch is engineered to be maintained, extended, and trusted long after the first deployment." },
  { n: "04", k: "Quiet Ambition", d: "We are not loud. We are early. The work, over time, will speak louder than any announcement." },
];

const team = [
  { initials: "FC", name: "Founder & CEO", role: "Engineering Lead · Robotics & Embedded", bio: "Leads QEVRIX's technical direction across robotics, embedded systems, and autonomous platforms. Obsessed with systems that outlive the deadline." },
  { initials: "CF", name: "Co-Founder", role: "AI & Software Systems", bio: "Architects the intelligence layer — AI pipelines, vision systems, and the software platforms that connect machines to people." },
  { initials: "SE", name: "Systems Engineer", role: "Embedded · EV · Security", bio: "Designs and builds the hardware-side systems — from EV charging infrastructure to secure access control architectures." },
];

const glanceData = [
  { k: "Founded", v: "2026" },
  { k: "Focus", v: "Robotics · Embedded · AI · Software" },
  { k: "Location", v: "India · Remote" },
  { k: "Type", v: "Independent Engineering Studio" },
];

export function About() {
  useEffect(() => {
    document.title = "About — QEVRIX";
  }, []);

  return (
    <SiteLayout>
      {/* Intro */}
      <section className="pt-40 md:pt-56 pb-32 md:pb-48">
        <div className="container-q">
          <Reveal>
            <PillTags filled="QEVRIX" outline="About" className="mb-10" />
          </Reveal>
          <h1 className="text-display-hero max-w-[16ch]">
            <Reveal as="span" className="block">An engineering</Reveal>
            <Reveal as="span" delay={120} className="block">company in its</Reveal>
            <Reveal as="span" delay={240} className="block">
              first chapter<span style={{ color: "#FF6B00" }}>.</span>
            </Reveal>
          </h1>
          <Reveal delay={420}>
            <p className="mt-12 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
              QEVRIX is an emerging engineering ecosystem. We design, build and operate systems across robotics, automation, embedded hardware, AI and the software platforms that hold them together. Today we are small. The intent is long.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The Story */}
      <section className="py-32 md:py-48" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="container-q grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-3">
            <PillTags filled="01" outline="The Story" />
          </Reveal>
          <div className="md:col-span-9 space-y-10">
            <Reveal>
              <h2 className="text-display-xl">
                Born out of a frustration with engineering that ends at the <span style={{ color: "var(--color-muted-foreground)" }}>deadline.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-3xl leading-relaxed text-base md:text-lg" style={{ color: "var(--color-muted-foreground)" }}>
                QEVRIX started with a simple observation. The engineers around us were capable of remarkable work, but the systems they were asked to build rarely outlived the courses, the projects, or the submissions they were attached to. We wanted a different kind of practice — one where engineering was treated as a craft, not a checkbox.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="max-w-3xl leading-relaxed text-base md:text-lg" style={{ color: "var(--color-muted-foreground)" }}>
                So we began building. Quietly. Without trying to look like a startup or a service business. The first chapter is about earning trust through real systems. The chapters after that are about turning that trust into products, platforms and labs that compound over years.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-32 md:py-48" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="container-q grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-3">
            <PillTags filled="02" outline="Vision" />
          </Reveal>
          <div className="md:col-span-9">
            <Reveal>
              <h2 className="text-display-xl max-w-4xl">
                To become one of the engineering companies that defines how the next generation of systems is built.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-10 max-w-3xl leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
                We want QEVRIX to be remembered the way the great engineering houses of every era are remembered — for the depth of their work, the durability of their systems, and the people they shaped along the way.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-32 md:py-48" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="container-q mb-16">
          <Reveal>
            <PillTags filled="03" outline="Engineering Philosophy" className="mb-6" />
            <h2 className="text-display-xl max-w-3xl">Four principles. Held without compromise.</h2>
          </Reveal>
        </div>
        <ul className="container-q flex flex-col gap-12 md:gap-16 mt-4">
          {principles.map((p, i) => (
            <li key={p.n}>
              <Reveal delay={i * 80}>
                <div className="grid md:grid-cols-12 gap-6">
                  <span className="md:col-span-2 font-mono text-xs pt-3" style={{ color: "var(--color-muted-foreground)" }}>{p.n}</span>
                  <h3 className="md:col-span-5 font-display text-3xl md:text-4xl font-semibold tracking-tight">{p.k}</h3>
                  <p className="md:col-span-5 leading-relaxed md:pt-2" style={{ color: "var(--color-muted-foreground)" }}>{p.d}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* TEAM */}
      <section className="py-32 md:py-48" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="container-q mb-16">
          <Reveal>
            <PillTags filled="04" outline="The Team" className="mb-6" />
            <h2 className="text-display-xl max-w-3xl">The people behind the systems.</h2>
          </Reveal>
        </div>
        <div className="container-q grid gap-6 md:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={i} delay={i * 100}>
              <article
                style={{
                  background: "linear-gradient(135deg, #111111, #0D0D0D)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  padding: "36px 32px",
                  height: "100%",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "rgba(255,107,0,0.25)";
                  el.style.boxShadow = "0 8px 32px rgba(255,107,0,0.06)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "rgba(255,255,255,0.08)";
                  el.style.boxShadow = "none";
                }}
              >
                <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(255,107,0,0.08)", border: "1.5px solid rgba(255,107,0,0.35)", color: "#FF6B00", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 700 }}>
                  {m.initials}
                </div>
                <h3 style={{ color: "#fff", fontSize: 17, fontWeight: 600, marginTop: 18 }}>{m.name}</h3>
                <p className="font-mono uppercase" style={{ color: "#FF6B00", fontSize: 11, letterSpacing: "0.08em", marginTop: 5 }}>{m.role}</p>
                <div style={{ height: 1, background: "rgba(255,255,255,0.06)", margin: "18px 0" }} />
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.75 }}>{m.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="container-q text-center mt-10 italic" style={{ color: "rgba(255,255,255,0.25)", fontSize: 12 }}>
          * Placeholder profiles — names and photos will be updated.
        </p>
      </section>

      {/* AT A GLANCE */}
      <section className="py-32 md:py-48" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="container-q mb-16">
          <Reveal>
            <PillTags filled="05" outline="At A Glance" className="mb-6" />
            <h2 className="text-display-xl max-w-3xl">QEVRIX in four lines.</h2>
          </Reveal>
        </div>
        <div className="container-q grid sm:grid-cols-2 gap-y-10 gap-x-12">
          {glanceData.map((row) => (
            <Reveal key={row.k}>
              <div className="pt-5" style={{ borderTop: "1px solid var(--color-border)" }}>
                <p className="font-mono uppercase" style={{ color: "#FF6B00", fontSize: 11, letterSpacing: "0.16em" }}>{row.k}</p>
                <p className="mt-2 font-display text-2xl md:text-3xl font-semibold">{row.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Long-term */}
      <section className="py-40 md:py-56" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="container-q text-center max-w-4xl mx-auto">
          <Reveal>
            <PillTags filled="06" outline="The Long View" className="justify-center mb-12" />
          </Reveal>
          <Reveal delay={120}>
            <p className="text-display-lg">
              We are not optimising for this year. We are building a company that should still be doing serious engineering work in 2045.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-16 flex justify-center">
              <Link to="/contact" className="btn-pill btn-pill-primary">Talk to QEVRIX</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
