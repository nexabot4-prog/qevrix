import { useEffect } from "react";
import { Link } from "wouter";
import { SiteLayout } from "@/components/site/Layout";
import { PillTags } from "@/components/site/PillTags";

const pages = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms of Service" },
] as const;

export function Sitemap() {
  useEffect(() => {
    document.title = "Sitemap — QEVRIX";
  }, []);

  return (
    <SiteLayout>
      <section className="pt-40 md:pt-56 pb-24">
        <div className="container-q max-w-4xl">
          <PillTags filled="Index" outline="Sitemap" className="mb-10" />
          <h1 className="text-display-hero">Sitemap<span style={{ color: "#FF6B00" }}>.</span></h1>
        </div>
      </section>
      <section className="pb-40">
        <ul className="container-q max-w-3xl" style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
          {pages.map((p) => (
            <li key={p.to} style={{ borderBottom: "1px solid var(--color-border)" }}>
              <Link to={p.to} className="flex items-center justify-between py-6 group" style={{ textDecoration: "none" }}>
                <span className="font-display text-2xl md:text-3xl font-semibold transition-colors group-hover:text-[#FF6B00]"
                  style={{ color: "var(--color-foreground)" }}>
                  {p.label}
                </span>
                <span className="font-mono uppercase" style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--color-muted-foreground)" }}>
                  {p.to}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  );
}
