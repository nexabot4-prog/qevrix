import { Link } from "wouter";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-bg mt-40" style={{ background: "var(--color-background)" }}>
      <div className="container-q border-t pt-16 pb-14" style={{ borderColor: "var(--color-border)" }}>
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-5">
            {/* Wordmark */}
            <Link
              to="/"
              aria-label="QEVRIX Home"
              className="inline-block"
              style={{ textDecoration: "none" }}
            >
              <span className="wordmark" style={{ fontSize: 20 }}>
                <span className="wordmark-main">Qevri</span><span className="wordmark-x">X</span>
              </span>
            </Link>

            {/* Tagline */}
            <p
              className="footer-tagline"
              style={{
                fontSize: 12,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.4)",
                fontStyle: "italic",
                letterSpacing: "0.05em",
              }}
            >
              — Engineering Beyond Submission —
            </p>

            <p style={{ fontSize: 14, color: "var(--color-muted-foreground)" }}>
              &copy; {year} QEVRIX. All rights reserved.
            </p>
            <p
              className="footer-copyright"
              style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}
            >
              <Link to="/privacy" style={{ color: "inherit", textDecoration: "none" }}>Privacy Policy</Link>
              <span style={{ margin: "0 8px" }}>·</span>
              <Link to="/terms" style={{ color: "inherit", textDecoration: "none" }}>Terms</Link>
              <span style={{ margin: "0 8px" }}>·</span>
              <Link to="/sitemap" style={{ color: "inherit", textDecoration: "none" }}>Sitemap</Link>
            </p>
          </div>

          <nav className="flex flex-col gap-3 md:items-center md:pt-1">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/projects", label: "Projects" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                style={{ fontSize: 14, color: "var(--color-muted-foreground)", textDecoration: "none" }}
              >
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
