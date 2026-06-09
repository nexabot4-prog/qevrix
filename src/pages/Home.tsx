import { useEffect } from "react";
import { Link } from "wouter";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";

const domains = [
  { n: "01", k: "Robotics & Automation" },
  { n: "02", k: "Embedded Systems" },
  { n: "03", k: "Artificial Intelligence" },
  { n: "04", k: "EV & Energy Systems" },
  { n: "05", k: "Cybersecurity & Software" },
];

const work = [
  {
    n: "01",
    tag: "Robotics & Automation",
    title: "Autonomous Delivery Robot",
    year: "2026",
    img: "/project-robot.png",
  },
  {
    n: "02",
    tag: "EV & Energy Systems",
    title: "Smart EV Charging Platform",
    year: "2026",
    img: "/project-ev.png",
  },
  {
    n: "03",
    tag: "Cybersecurity & Embedded",
    title: "Secure Smart Access System",
    year: "2026",
    img: "/project-access.png",
  },
];

export function Home() {
  useEffect(() => {
    document.title = "QEVRIX — Engineering Beyond Submission";
  }, []);

  return (
    <SiteLayout>
      {/* [01] HERO */}
      <section
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          minHeight: "100vh",
          paddingTop: "calc(64px + 2rem)",
          paddingBottom: "3rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <Reveal>
            <div className="flex items-center justify-center gap-2 mb-10">
              <span
                className="pill-filled"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                QEVRIX
              </span>
              <span
                className="pill-outline"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Engineering Ecosystem
              </span>
            </div>
          </Reveal>

          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(3rem, 8vw, 6.5rem)",
              fontWeight: 400,
              fontStyle: "italic",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            <Reveal as="span" className="block">
              Engineering Beyond Submission<span style={{ color: "#FF6B00" }}>.</span>
            </Reveal>
          </h1>

          <Reveal delay={240}>
            <p
              style={{
                fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginTop: "24px",
                maxWidth: "480px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              QEVRIX is an engineering ecosystem building systems that last
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div
              style={{
                marginTop: "40px",
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link
                to="/projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "9999px",
                  padding: "12px 28px",
                  fontSize: "13px",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  background: "#FF6B00",
                  color: "#ffffff",
                  border: "1px solid #FF6B00",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  fontWeight: 600,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.filter = "brightness(1.1)";
                  el.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.filter = "";
                  el.style.transform = "none";
                }}
              >
                View Our Work →
              </Link>
              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "9999px",
                  padding: "12px 28px",
                  fontSize: "13px",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  background: "transparent",
                  color: "#ffffff",
                  border: "1px solid rgba(255,255,255,0.2)",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "rgba(255,255,255,0.5)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "rgba(255,255,255,0.2)";
                }}
              >
                Start a Conversation →
              </Link>
            </div>
          </Reveal>

          <Reveal delay={560}>
            <p
              style={{
                marginTop: "40px",
                fontSize: "11px",
                color: "rgba(255,255,255,0.2)",
                letterSpacing: "0.1em",
              }}
            >
              Bengaluru · India · Est. 2026 · Robotics · AI · Embedded · EV · Security
            </p>
          </Reveal>
        </div>
      </section>

      {/* [02] WHAT WE BUILD */}
      <section
        style={{
          paddingTop: "clamp(80px, 12vw, 140px)",
          paddingBottom: "clamp(80px, 12vw, 140px)",
          paddingLeft: "clamp(24px, 6vw, 80px)",
          paddingRight: "clamp(24px, 6vw, 80px)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal>
            <div className="flex items-center gap-2 mb-12">
              <span className="pill-filled">02</span>
              <span className="pill-outline">What We Build</span>
            </div>
          </Reveal>

          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            {domains.map((d, i) => (
              <Reveal key={d.n} delay={i * 80}>
                <div
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    paddingTop: "24px",
                    paddingBottom: "24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "24px",
                    transition: "transform 0.2s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    const title = e.currentTarget.querySelector(".domain-title") as HTMLElement;
                    if (title) title.style.transform = "translateX(8px)";
                  }}
                  onMouseLeave={(e) => {
                    const title = e.currentTarget.querySelector(".domain-title") as HTMLElement;
                    if (title) title.style.transform = "translateX(0)";
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "#FF6B00",
                      letterSpacing: "0.1em",
                      flexShrink: 0,
                    }}
                  >
                    {d.n}
                  </span>
                  <h3
                    className="domain-title"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(1.4rem, 3vw, 2rem)",
                      fontWeight: 400,
                      color: "#ffffff",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    {d.k}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <p
              style={{
                marginTop: "48px",
                fontSize: "14px",
                color: "rgba(255,255,255,0.3)",
                fontStyle: "italic",
                textAlign: "center",
              }}
            >
              — systems that last beyond the deadline.
            </p>
          </Reveal>
        </div>
      </section>

      {/* [03] SELECTED WORK */}
      <section
        style={{
          paddingTop: "clamp(80px, 12vw, 140px)",
          paddingBottom: "clamp(80px, 12vw, 140px)",
          paddingLeft: "clamp(24px, 6vw, 80px)",
          paddingRight: "clamp(24px, 6vw, 80px)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal>
            <div className="flex items-center gap-2 mb-12">
              <span className="pill-filled">03</span>
              <span className="pill-outline">Selected Work</span>
            </div>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1px",
              background: "rgba(255,255,255,0.06)",
            }}
          >
            {work.map((w, i) => (
              <Reveal key={w.n} delay={i * 100}>
                <article
                  style={{
                    position: "relative",
                    aspectRatio: "4/3",
                    overflow: "hidden",
                    background: "#000000",
                    cursor: "pointer",
                    borderBottom: "2px solid transparent",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    const img = el.querySelector("img") as HTMLImageElement;
                    const overlay = el.querySelector(".project-overlay") as HTMLElement;
                    const viewText = el.querySelector(".view-text") as HTMLElement;
                    el.style.borderBottomColor = "#FF6B00";
                    if (img) img.style.transform = "scale(1.04)";
                    if (overlay) overlay.style.background = "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)";
                    if (viewText) viewText.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    const img = el.querySelector("img") as HTMLImageElement;
                    const overlay = el.querySelector(".project-overlay") as HTMLElement;
                    const viewText = el.querySelector(".view-text") as HTMLElement;
                    el.style.borderBottomColor = "transparent";
                    if (img) img.style.transform = "scale(1)";
                    if (overlay) overlay.style.background = "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)";
                    if (viewText) viewText.style.opacity = "0";
                  }}
                >
                  <img
                    src={w.img}
                    alt={w.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                  />
                  <div
                    className="project-overlay"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)",
                      transition: "background 0.3s ease",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "20px",
                      left: "20px",
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.4)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {w.n}
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "rgba(255,255,255,0.6)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      background: "rgba(0,0,0,0.3)",
                      padding: "6px 12px",
                      borderRadius: "9999px",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {w.tag}
                  </span>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      right: "0",
                      padding: "0 24px 20px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        color: "rgba(255,255,255,0.4)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: "6px",
                      }}
                    >
                      {w.year} · {w.tag}
                    </p>
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: 500,
                        color: "#ffffff",
                        lineHeight: 1.3,
                      }}
                    >
                      {w.title}
                    </h3>
                  </div>
                  <div
                    className="view-text"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "13px",
                      color: "#ffffff",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      pointerEvents: "none",
                    }}
                  >
                    View Project →
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={320}>
            <div style={{ marginTop: "32px", textAlign: "right" }}>
              <Link
                to="/projects"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.06em",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)";
                }}
              >
                View All Projects →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* [04] BY THE NUMBERS */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          paddingLeft: "clamp(24px, 6vw, 80px)",
          paddingRight: "clamp(24px, 6vw, 80px)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal>
            <div className="flex items-center gap-2 mb-16">
              <span className="pill-filled">04</span>
              <span className="pill-outline">By The Numbers</span>
            </div>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "80px",
            }}
          >
            {[
              { num: 5, suffix: "+", label: "Systems Built" },
              { num: 5, suffix: "", label: "Engineering Domains" },
              { num: 2026, suffix: "", label: "Founded" },
              { text: "India", label: "Based" },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "clamp(3.5rem, 8vw, 6rem)",
                      fontWeight: 700,
                      fontStyle: "italic",
                      color: "#ffffff",
                      lineHeight: 1,
                    }}
                  >
                    {"text" in s ? s.text : <CountUp end={s.num!} suffix={s.suffix} />}
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "#FF6B00",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginTop: "12px",
                      fontWeight: 500,
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* [05] THE STANDARD */}
      <section
        style={{
          position: "relative",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#080808",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          overflow: "hidden",
          paddingTop: "clamp(80px, 12vw, 140px)",
          paddingBottom: "clamp(80px, 12vw, 140px)",
          paddingLeft: "clamp(24px, 6vw, 80px)",
          paddingRight: "clamp(24px, 6vw, 80px)",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 50% 100%, rgba(255,107,0,0.06) 0%, transparent 55%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <Reveal>
            <div className="flex items-center justify-center gap-2 mb-12">
              <span className="pill-filled">05</span>
              <span className="pill-outline">The Standard</span>
            </div>
          </Reveal>

          <div style={{ lineHeight: 1.05 }}>
            <Reveal as="span" className="block">
              <h2
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "#ffffff",
                }}
              >
                Build.
              </h2>
            </Reveal>
            <Reveal as="span" delay={120} className="block">
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
                  fontWeight: 800,
                  fontStyle: "normal",
                  color: "#ffffff",
                }}
              >
                Innovate.
              </h2>
            </Reveal>
            <Reveal as="span" delay={240} className="block">
              <h2
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "#FF6B00",
                }}
              >
                Evolve.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={360}>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.35)",
                marginTop: "20px",
                letterSpacing: "0.04em",
              }}
            >
              The standard is not what gets submitted. It is what gets built.
            </p>
          </Reveal>

          <Reveal delay={480}>
            <div style={{ marginTop: "40px" }}>
              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#FF6B00",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "14px",
                  padding: "14px 32px",
                  borderRadius: "9999px",
                  textDecoration: "none",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  transition: "filter 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.filter = "brightness(1.08)";
                  el.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.filter = "";
                  el.style.transform = "none";
                }}
              >
                Start a Conversation →
              </Link>
            </div>
            <p
              style={{
                fontSize: "11px",
                color: "rgba(255,255,255,0.18)",
                marginTop: "16px",
                letterSpacing: "0.06em",
              }}
            >
              hello@qevrix.com · India · Remote
            </p>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
