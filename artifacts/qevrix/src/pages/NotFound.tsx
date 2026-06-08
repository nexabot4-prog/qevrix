import { useEffect } from "react";
import { Link } from "wouter";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { CookieBanner } from "@/components/site/CookieBanner";

export function NotFound() {
  useEffect(() => {
    document.title = "404 — QEVRIX";
  }, []);

  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh", color: "#fff", position: "relative" }}>
      <ScrollProgress />
      <Nav />
      <div className="page-frame" aria-hidden="true" />

      {/* Faint QX watermark */}
      <span aria-hidden="true" style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "40vw",
        color: "rgba(255,255,255,0.015)",
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        pointerEvents: "none",
        userSelect: "none",
        whiteSpace: "nowrap",
        zIndex: 0,
      }}>
        QX
      </span>

      <main role="main" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "40px 24px", position: "relative", zIndex: 1 }}>
        {/* Logo */}
        <img src="/qx-logo.png" alt="QEVRIX Logo" style={{ height: 48, width: "auto", objectFit: "contain", marginBottom: 48, opacity: 0.8 }} />

        {/* Ghost 404 */}
        <div
          className="glitch-404"
          aria-label="404"
          style={{
            fontSize: "clamp(8rem, 20vw, 16rem)",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontWeight: 700,
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.15)",
            lineHeight: 1,
            marginBottom: 32,
          }}
        >
          404
        </div>

        {/* Label */}
        <div style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
          <span className="pill pill-filled" style={{ fontSize: 11 }}>[ ERROR ]</span>
          <span className="pill pill-outline" style={{ fontSize: 11 }}>[ Page Not Found ]</span>
        </div>

        <h1 style={{ fontSize: 24, fontWeight: 400, color: "#fff", marginBottom: 12 }}>
          This system doesn't exist.
        </h1>
        <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.4)", maxWidth: 400, marginBottom: 40 }}>
          The page you are looking for was not found, moved, or never existed. Return to a working system.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          <Link to="/"
            style={{
              padding: "12px 28px",
              borderRadius: 4,
              fontSize: 13,
              textDecoration: "none",
              background: "#FF6B00",
              color: "#fff",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontWeight: 600,
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#e05a00")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#FF6B00")}
          >
            ← Back to Home
          </Link>
          <Link to="/projects"
            style={{
              padding: "12px 28px",
              borderRadius: 4,
              fontSize: 13,
              textDecoration: "none",
              background: "transparent",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.2)",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")}
          >
            View Projects
          </Link>
        </div>

        {/* Radial glow */}
        <div aria-hidden="true" style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "50vh",
          background: "radial-gradient(ellipse at 50% 100%, rgba(255,107,0,0.05) 0%, transparent 60%)",
          pointerEvents: "none",
          zIndex: 0,
        }} />
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}
