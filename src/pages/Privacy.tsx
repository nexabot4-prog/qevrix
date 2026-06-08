import { useEffect } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { PillTags } from "@/components/site/PillTags";

const sections = [
  { h: "Introduction", p: "QEVRIX (\"we\", \"us\", \"our\") respects your privacy. This policy explains what we collect when you interact with our website and how that information is used." },
  { h: "Data We Collect", p: "We collect information you voluntarily provide through contact forms (such as your name and email), and basic technical data automatically logged by our hosting infrastructure (such as IP address, browser type, and pages visited)." },
  { h: "How We Use Your Data", p: "Data is used solely to respond to enquiries, improve the website experience, and maintain operational security. We do not sell or rent personal data to third parties." },
  { h: "Cookies", p: "We use minimal cookies and local storage entries to remember your preferences (for example, cookie consent). You may decline non-essential cookies via the banner shown on first visit." },
  { h: "Third-Party Services", p: "The site may use trusted infrastructure providers for hosting, analytics, and font delivery. These providers process data on our behalf under their own privacy terms." },
  { h: "Your Rights", p: "You may request access to, correction of, or deletion of any personal data we hold about you. To exercise these rights, contact us using the address below." },
  { h: "Contact", p: "For any privacy-related questions, write to hello@qevrix.com." },
];

export function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy — QEVRIX";
  }, []);

  return (
    <SiteLayout>
      <section className="pt-40 md:pt-56 pb-24">
        <div className="container-q max-w-4xl">
          <PillTags filled="Legal" outline="Privacy Policy" className="mb-10" />
          <h1 className="text-display-hero">Privacy Policy<span style={{ color: "#FF6B00" }}>.</span></h1>
          <p className="mt-8 font-mono uppercase" style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, letterSpacing: "0.18em" }}>
            Last updated: June 2026
          </p>
        </div>
      </section>
      <section className="pb-40">
        <div className="container-q max-w-3xl space-y-12">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">{s.h}</h2>
              <p className="leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
