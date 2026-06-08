import { Link } from "wouter";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-bg mt-40" style={{ background: "var(--color-background)" }}>
      <div className="container-q border-t pt-16 pb-14" style={{ borderColor: "var(--color-border)" }}>
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-5">
            <Link to="/" aria-label="QEVRIX Home" className="font-display text-2xl font-bold tracking-tight inline-block"
              style={{ color: "var(--color-foreground)", textDecoration: "none" }}>
              QEVRI<span className="x-gradient">X</span>
              <span style={{ color: "#FF6B00" }}>.</span>
            </Link>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--color-muted-foreground)", maxWidth: "28ch" }}>
              Engineering Support &amp; Innovation Systems
            </p>
            <p style={{ fontSize: 14, color: "var(--color-muted-foreground)" }}>
              &copy; {year} QEVRIX. All rights reserved.
            </p>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
              <Link to="/privacy" className="hover:text-foreground transition-colors" style={{ color: "inherit", textDecoration: "none" }}>Privacy Policy</Link>
              <span style={{ margin: "0 8px" }}>·</span>
              <Link to="/terms" className="hover:text-foreground transition-colors" style={{ color: "inherit", textDecoration: "none" }}>Terms</Link>
              <span style={{ margin: "0 8px" }}>·</span>
              <Link to="/sitemap" className="hover:text-foreground transition-colors" style={{ color: "inherit", textDecoration: "none" }}>Sitemap</Link>
            </p>
          </div>

          <nav className="flex flex-col gap-3 md:items-center md:pt-1">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/projects", label: "Projects" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} style={{ fontSize: 14, color: "var(--color-muted-foreground)", textDecoration: "none" }}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 md:items-end md:pt-1">
            <a href="mailto:hello@qevrix.com" style={{ fontSize: 14, color: "var(--color-muted-foreground)", textDecoration: "none" }}>
              hello@qevrix.com
            </a>
            <a href="https://instagram.com/qevrix" target="_blank" rel="noreferrer" aria-label="Instagram"
              style={{ fontSize: 14, color: "var(--color-muted-foreground)", textDecoration: "none" }}>
              Instagram
            </a>
            <a href="https://linkedin.com/company/qevrix" target="_blank" rel="noreferrer" aria-label="LinkedIn"
              style={{ fontSize: 14, color: "var(--color-muted-foreground)", textDecoration: "none" }}>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
