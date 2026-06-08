import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    try {
      return (localStorage.getItem("qevrix_theme") as "dark" | "light") || "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "light") {
      html.classList.add("light-mode");
    } else {
      html.classList.remove("light-mode");
    }
    try {
      localStorage.setItem("qevrix_theme", theme);
    } catch {}
  }, [theme]);

  return { theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) };
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const { theme, toggle } = useTheme();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header className={`navbar-bg fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${open ? "backdrop-blur-xl" : ""}`}
      style={{ background: open ? "rgba(10,10,10,0.9)" : "transparent", borderBottom: open ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
      <div className="container-q flex h-16 md:h-20 items-center justify-between">
        <Link
          to="/"
          aria-label="QEVRIX Home"
          className="flex items-center font-display text-xl md:text-2xl font-bold tracking-tight"
          style={{ color: "var(--color-foreground)", textDecoration: "none" }}
        >
          <img
            src="/qx-logo.png"
            alt="QEVRIX Logo"
            className="qx-logo-img"
            style={{ height: 40, width: "auto", objectFit: "contain", marginRight: 12 }}
          />
          <span>
            QEVRI<span className="x-gradient">X</span>
            <span style={{ color: "#FF6B00" }}>.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={toggle}
            aria-label="Toggle light/dark mode"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: theme === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
              border: theme === "dark" ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(0,0,0,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              cursor: "pointer",
              transition: "all 0.2s",
              flexShrink: 0,
            }}
          >
            {theme === "dark" ? "☀" : "☽"}
          </button>
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

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative h-10 w-10 flex flex-col items-center justify-center gap-1.5"
        >
          <span className={`block h-px w-6 bg-foreground transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
            style={{ background: "var(--color-foreground)" }} />
          <span className={`block h-px w-6 transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            style={{ background: "var(--color-foreground)" }} />
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`}
        style={{ background: "rgba(10,10,10,0.97)" }}>
        <nav className="container-q flex flex-col gap-6 py-10">
          <div className="flex items-center gap-4 mb-2">
            <button
              onClick={toggle}
              aria-label="Toggle light/dark mode"
              style={{
                width: 36, height: 36, borderRadius: "50%",
                background: theme === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
                border: theme === "dark" ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(0,0,0,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, cursor: "pointer",
              }}
            >
              {theme === "dark" ? "☀" : "☽"}
            </button>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: "var(--color-muted-foreground)" }}>
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
          </div>
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
