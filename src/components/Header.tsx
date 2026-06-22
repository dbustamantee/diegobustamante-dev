"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useThemeToggle } from "@/hooks/useTheme";

const sections = [
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "skills", href: "#skills" },
  { key: "contact", href: "#contact" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();
  const toggleTheme = useThemeToggle();

  function switchLocale(locale: "en" | "es") {
    setMobileOpen(false);
    router.replace(pathname + window.location.hash, { locale, scroll: false });
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur-sm">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent-blue focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="font-heading text-lg font-semibold tracking-tight">
          DB
        </a>

        <ul className="hidden items-center gap-6 text-sm md:flex">
          {sections.map(({ key, href }) => (
            <li key={key}>
              <a
                href={href}
                aria-current={activeSection === key ? "true" : undefined}
                className={`transition-colors hover:text-accent-blue ${activeSection === key ? "font-medium text-accent-blue" : "text-ink-muted"}`}
              >
                {t(key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-border"
            aria-label="Toggle theme"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </button>

          {/* Language switcher */}
          <div className="flex items-center gap-1 text-sm">
            <button
              type="button"
              onClick={() => switchLocale("en")}
              className="rounded px-2 py-1 text-ink-muted transition-colors hover:bg-border hover:text-ink"
            >
              EN
            </button>
            <span className="text-ink-subtle">/</span>
            <button
              type="button"
              onClick={() => switchLocale("es")}
              className="rounded px-2 py-1 text-ink-muted transition-colors hover:bg-border hover:text-ink"
            >
              ES
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-border md:hidden"
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen ? (
                <path d="M5 5l10 10M15 5L5 15" />
              ) : (
                <path d="M3 5h14M3 10h14M3 15h14" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border px-6 pb-4 md:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {sections.map(({ key, href }) => (
              <li key={key}>
                <a
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm text-ink-muted transition-colors hover:bg-border hover:text-ink"
                >
                  {t(key)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
