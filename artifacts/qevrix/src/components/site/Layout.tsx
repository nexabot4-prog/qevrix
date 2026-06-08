import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="page-wrapper min-h-screen"
      style={{ background: "var(--color-background)", color: "var(--color-foreground)" }}
    >
      <div className="page-frame" aria-hidden="true" />
      <Nav />
      <main role="main">{children}</main>
      <Footer />
    </div>
  );
}
