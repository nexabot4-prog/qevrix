import { useEffect } from "react";
import { Link } from "wouter";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { PillTags } from "@/components/site/PillTags";

const projects = [
  {
    index: "01",
    domain: "Robotics & Automation",
    year: "2026",
    title: "Autonomous Delivery Robot",
    summary: "A reusable autonomy layer combining perception, control and safety primitives for ground robotics.",
    body: "An intelligent autonomous delivery platform engineered for indoor logistics, route execution, RFID authentication, and real-time operational visibility. Built around modular robotics architecture, embedded control systems, wireless communication, and web-based management to create a scalable autonomous delivery ecosystem.",
    img: "/project-robot.png",
    metrics: [
      { k: "Navigation Nodes", v: "50+" },
      { k: "Delivery Routes", v: "Dynamic" },
      { k: "Operation Modes", v: "Autonomous + Manual" },
    ],
  },
  {
    index: "02",
    domain: "EV & Energy Systems",
    year: "2026",
    title: "Smart EV Charging Platform",
    summary: "A connected charging infrastructure delivering secure access, intelligent power allocation, and real-time station management.",
    body: "A next-generation charging ecosystem combining wired and wireless charging infrastructure with intelligent monitoring, dynamic power management, and connected user experiences. Engineered to support future mobility systems through scalable energy delivery, real-time analytics, and seamless charging operations.",
    img: "/project-ev.png",
    metrics: [
      { k: "Charging", v: "Wired + Wireless" },
      { k: "Control", v: "Smart Management" },
      { k: "Monitoring", v: "Real-Time" },
    ],
  },
  {
    index: "03",
    domain: "Cybersecurity & Embedded Systems",
    year: "2026",
    title: "Secure Smart Access System",
    summary: "A security-first access control architecture combining embedded systems, computer vision, and privacy-preserving authentication.",
    body: "A security-first architecture integrating embedded systems, intelligent authentication, computer vision, and privacy-preserving access control. Designed around secure identity verification, encrypted access workflows, and continuous monitoring to create trusted physical security environments.",
    img: "/project-access.png",
    metrics: [
      { k: "Authentication", v: "Multi-Layer" },
      { k: "Security", v: "Zero-Knowledge" },
      { k: "Access Logs", v: "Encrypted" },
    ],
  },
  {
    index: "04",
    domain: "AI Vision Systems",
    year: "2026",
    title: "VisionGuard",
    summary: "An AI-powered surveillance platform for intelligent monitoring, anomaly detection, and real-time visual analysis.",
    body: "An AI-powered smart glasses platform designed to improve independence and situational awareness for visually impaired individuals. Combining computer vision, object detection, voice assistance, and intelligent navigation, VisionGuard translates environmental information into actionable guidance in real time.",
    img: "/project-vision.png",
    metrics: [
      { k: "Vision", v: "AI-Powered" },
      { k: "Guidance", v: "Real-Time" },
      { k: "Accessibility", v: "Enhanced" },
    ],
  },
];

export function Projects() {
  useEffect(() => {
    document.title = "Projects — QEVRIX";
  }, []);

  return (
    <SiteLayout>
      {/* Header */}
      <section className="pt-40 md:pt-56 pb-24 md:pb-32">
        <div className="container-q">
          <Reveal>
            <PillTags filled="Projects" outline="Selected Work / 2026" className="mb-10" />
          </Reveal>
          <h1 className="text-display-hero max-w-[18ch]">
            <Reveal as="span" className="block">A small body</Reveal>
            <Reveal as="span" delay={120} className="block">of serious</Reveal>
            <Reveal as="span" delay={240} className="block">
              engineering<span style={{ color: "#FF6B00" }}>.</span>
            </Reveal>
          </h1>
          <Reveal delay={420}>
            <p className="mt-12 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
              Each project is treated like a product launch — designed for clarity, built for endurance, documented for the people who will inherit it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Case studies */}
      <div style={{ borderTop: "1px solid var(--color-border)" }}>
        {projects.map((p, i) => (
          <section
            key={p.index}
            className="py-24 md:py-40"
            style={i !== 0 ? { borderTop: "1px solid var(--color-border)" } : {}}
          >
            <div className="container-q">
              {/* Index row */}
              <Reveal>
                <div className="flex items-center gap-6 mb-10">
                  <span className="font-mono text-xs uppercase tracking-[0.22em]" style={{ color: "#FF6B00" }}>{p.index}</span>
                  <span className="h-px flex-1" style={{ background: "var(--color-border)" }} />
                  <span className="font-mono text-xs uppercase tracking-[0.22em]" style={{ color: "var(--color-muted-foreground)" }}>
                    {p.domain} · {p.year}
                  </span>
                </div>
              </Reveal>

              <Reveal>
                <h2 className="text-display-xl max-w-4xl">{p.title}</h2>
              </Reveal>

              {/* Project image — fixed container with hover scale */}
              <Reveal delay={120}>
                <div
                  className="project-img-wrap mt-14"
                  style={{ aspectRatio: "21/9", position: "relative", borderRadius: 2 }}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
                  />
                  {/* Dark-mode-only gradient overlay */}
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
                    style={{ fontSize: 10, letterSpacing: "0.22em", color: "rgba(255,255,255,0.7)", bottom: 24, left: 24 }}
                  >
                    QEVRIX / {p.title}
                  </span>
                </div>
              </Reveal>

              {/* Description + specs */}
              <div className="mt-16 grid md:grid-cols-12 gap-10">
                <Reveal className="md:col-span-7">
                  <p
                    className="project-summary text-display-lg mb-8"
                    style={{ color: "rgba(255,255,255,0.9)" }}
                  >
                    {p.summary}
                  </p>
                  <p
                    className="project-body leading-relaxed text-base md:text-lg max-w-2xl"
                    style={{ color: "var(--color-muted-foreground)" }}
                  >
                    {p.body}
                  </p>
                </Reveal>
                <Reveal delay={140} className="md:col-span-5 md:pt-2">
                  <dl style={{ borderTop: "1px solid var(--color-border)" }}>
                    {p.metrics.map((m) => (
                      <div
                        key={m.k}
                        className="flex items-baseline justify-between py-5"
                        style={{ borderBottom: "1px solid var(--color-border)" }}
                      >
                        <dt
                          className="font-mono uppercase"
                          style={{ fontSize: 11, letterSpacing: "0.22em", color: "var(--color-muted-foreground)" }}
                        >
                          {m.k}
                        </dt>
                        <dd className="font-display text-2xl md:text-3xl font-semibold">{m.v}</dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* End note */}
      <section className="py-40 md:py-56" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="container-q text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="label-mono mb-10">Next</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="text-display-xl">
              More systems are being built — quietly, and with the same standard.
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-14 flex justify-center">
              <Link to="/contact" className="btn-pill btn-pill-primary">Work with QEVRIX</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
