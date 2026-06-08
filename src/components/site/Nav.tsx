import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

function useTheme() {
  const theme = "dark";
  
  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("light-mode");
  }, []);

  return { theme };
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const { theme } = useTheme();
  const isDark = true;
  
  // Suppress unused warning - theme is part of the hook interface
  void theme;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className={`navbar-bg fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${open ? "backdrop-blur-xl" : ""}`}
      style={{
        background: open ? "rgba(10,10,10,0.9)" : "transparent",
        borderBottom: open ? "1px solid rgba(255,255,255,0.07)" : "none",
      }}
    >
      <div className="container-q flex h-16 md:h-20 items-center justify-between">

        {/* ── Brand logo ─────────────────────────────────────────────────── */}
        <Link
          to="/"
          aria-label="QEVRIX Home"
          className="flex items-center"
          style={{ textDecoration: "none", gap: 14 }}
        >
          {/* PNG monogram — dark mode only */}
          {isDark && (
            <img
              src="/qx-logo.png"
              alt=""
              aria-hidden="true"
              style={{
                height: 48,
                width: "auto",
                objectFit: "contain",
              }}
              className="hidden md:block"
            />
          )}
          {isDark && (
            <img
              src="/qx-logo.png"
              alt=""
              aria-hidden="true"
              style={{
                height: 40,
                width: "auto",
                objectFit: "contain",
              }}
              className="md:hidden"
            />
          )}

          {/* Playfair Display wordmark — always visible */}
          <span className="wordmark navbar-logo-text" style={{ fontSize: 26 }}>
            <span className="wordmark-main">Qevri</span>
            <span
              style={{
                background: 'linear-gradient(145deg, #ffffff 0%, #ffffff 42%, #FF6B00 52%, #FF6B00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
                fontFamily: 'inherit',
                fontWeight: 'inherit',
                fontSize: 'inherit',
              }}
            >
              X
            </span>
          </span>
        </Link>

        {/* ── Desktop nav ────────────────────────────────────────────────── */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const isActive = l.to === "/" ? location === "/" : location.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                aria-label={l.label}
                className="font-mono text-[11px] uppercase tracking-[0.18em] transition-colors"
                style={{
                  color: isActive ? "var(--color-foreground)" : "var(--color-muted-foreground)",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* ── Hamburger ──────────────────────────────────────────────────── */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative h-10 w-10 flex flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`block h-px w-6 transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
            style={{ background: "var(--color-foreground)" }}
          />
          <span
            className={`block h-px w-6 transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            style={{ background: "var(--color-foreground)" }}
          />
        </button>
      </div>

      {/* ── Mobile drawer ──────────────────────────────────────────────── */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`}
        style={{ background: "rgba(10,10,10,0.97)" }}
      >
        <nav className="container-q flex flex-col gap-6 py-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-display text-4xl font-semibold"
              style={{ color: "var(--color-foreground)", textDecoration: "none" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
