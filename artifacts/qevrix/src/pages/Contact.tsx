import { useEffect, useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { PillTags } from "@/components/site/PillTags";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block group">
      <span className="font-mono uppercase" style={{ fontSize: 10, letterSpacing: "0.22em", color: "var(--color-muted-foreground)" }}>{label}</span>
      <div className="mt-3" style={{ borderBottom: "1px solid var(--color-border)" }}>
        {children}
      </div>
    </label>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = "Contact — QEVRIX";
  }, []);

  return (
    <SiteLayout>
      <section className="pt-40 md:pt-56 pb-24">
        <div className="container-q">
          <Reveal>
            <PillTags filled="QEVRIX" outline="Contact" className="mb-10" />
          </Reveal>
          <h1 className="text-display-hero max-w-[14ch]">
            <Reveal as="span" className="block">Start a</Reveal>
            <Reveal as="span" delay={120} className="block">
              conversation<span style={{ color: "#FF6B00" }}>.</span>
            </Reveal>
          </h1>
          <Reveal delay={300}>
            <p className="mt-12 max-w-xl text-lg leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
              For collaborations, engineering work, or to learn more about what we are building — write to us.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="container-q grid md:grid-cols-12 gap-16">
          <Reveal className="md:col-span-4 space-y-12">
            <div>
              <p className="label-mono mb-4">Email</p>
              <a href="mailto:hello@qevrix.com" className="font-display text-2xl md:text-3xl font-semibold transition-colors" style={{ color: "var(--color-foreground)", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FF6B00")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-foreground)")}>
                hello@qevrix.com
              </a>
            </div>
            <div>
              <p className="label-mono mb-4">Hours</p>
              <p className="leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>We respond within two working days.</p>
            </div>
            <div>
              <p className="label-mono mb-4">Location</p>
              <p className="leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>Operating globally · Headquarters forthcoming</p>
            </div>
          </Reveal>

          <Reveal delay={160} className="md:col-span-8">
            {sent ? (
              <div className="pt-16" style={{ borderTop: "1px solid var(--color-border)" }}>
                <p className="label-mono mb-6">Received</p>
                <h2 className="text-display-lg">Thank you. We've received your message and will be in touch.</h2>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <Field label="Name">
                    <input required type="text" name="name" className="w-full py-3 text-lg outline-none" style={{ background: "transparent", color: "var(--color-foreground)" }} placeholder="Your name" />
                  </Field>
                  <Field label="Email">
                    <input required type="email" name="email" className="w-full py-3 text-lg outline-none" style={{ background: "transparent", color: "var(--color-foreground)" }} placeholder="you@domain.com" />
                  </Field>
                </div>
                <Field label="Organisation (optional)">
                  <input type="text" name="org" className="w-full py-3 text-lg outline-none" style={{ background: "transparent", color: "var(--color-foreground)" }} placeholder="Company or institution" />
                </Field>
                <Field label="Message">
                  <textarea required name="message" rows={5} className="w-full py-3 text-lg outline-none resize-none" style={{ background: "transparent", color: "var(--color-foreground)" }} placeholder="Tell us what you are building or exploring." />
                </Field>
                <div className="pt-6">
                  <button type="submit" className="btn-pill btn-pill-primary">Send Message</button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
