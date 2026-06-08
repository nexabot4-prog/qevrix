import { useEffect, useState } from "react";

const KEY = "qevrix_cookie_consent";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) {
        const t = setTimeout(() => setShow(true), 800);
        return () => clearTimeout(t);
      }
    } catch {}
  }, []);

  const choose = (v: "accept" | "decline") => {
    try { localStorage.setItem(KEY, v); } catch {}
    setShow(false);
  };

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-label="Cookie consent"
      aria-hidden={!show}
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9998,
        background: "#111111",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "16px 24px",
        transform: show ? "translateY(0)" : "translateY(120%)",
        transition: "transform 600ms cubic-bezier(0.22, 1, 0.36, 1)",
        pointerEvents: show ? "auto" : "none",
      }}
    >
      <div className="container-q" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <p className="cookie-text" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, margin: 0 }}>
          We use cookies to improve your experience.
        </p>
        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={() => choose("decline")}
            style={{ background: "transparent", color: "var(--color-foreground)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 4, padding: "8px 16px", fontSize: 12, fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            Decline
          </button>
          <button
            onClick={() => choose("accept")}
            style={{ background: "#FF6B00", color: "#0A0A0A", border: "1px solid #FF6B00", borderRadius: 4, padding: "8px 18px", fontSize: 12, fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
