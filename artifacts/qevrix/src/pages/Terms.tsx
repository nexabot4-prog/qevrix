import { useEffect } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { PillTags } from "@/components/site/PillTags";

const sections = [
  { h: "Acceptance of Terms", p: "By accessing or using the QEVRIX website, you agree to be bound by these Terms of Service. If you do not agree, please discontinue use of the site." },
  { h: "Use of Website", p: "You agree to use the website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit use of the site by any other party." },
  { h: "Intellectual Property", p: "All content, marks, designs, and source materials on this site are the property of QEVRIX unless otherwise noted. No content may be reproduced or redistributed without prior written permission." },
  { h: "Limitation of Liability", p: "The website and its content are provided on an \"as is\" basis. QEVRIX is not liable for any indirect or consequential losses arising from use of the site or reliance on its content." },
  { h: "Changes to Terms", p: "We may update these terms from time to time. Continued use of the website after any change constitutes acceptance of the revised terms." },
  { h: "Contact", p: "Questions about these terms can be sent to hello@qevrix.com." },
];

export function Terms() {
  useEffect(() => {
    document.title = "Terms of Service — QEVRIX";
  }, []);

  return (
    <SiteLayout>
      <section className="pt-40 md:pt-56 pb-24">
        <div className="container-q max-w-4xl">
          <PillTags filled="Legal" outline="Terms of Service" className="mb-10" />
          <h1 className="text-display-hero">Terms of Service<span style={{ color: "#FF6B00" }}>.</span></h1>
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
