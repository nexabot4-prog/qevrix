import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ScrollProgress } from "./ScrollProgress";
import { CookieBanner } from "./CookieBanner";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="page-wrapper min-h-screen"
      style={{ background: "var(--color-background)", color: "var(--color-foreground)" }}
    >
      <div className="page-frame" aria-hidden="true" />
      <ScrollProgress />
      <Nav />
      <main role="main">{children}</main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
