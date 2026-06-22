"use client";

import { useEffect } from "react";
import { DARK_THEME_COLOR, LIGHT_THEME_COLOR, THEME_COOKIE_NAME } from "@/lib/theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    applyTheme(getPreferredTheme());
  }, []);

  return <>{children}</>;
}

export function useThemeToggle() {
  const toggle = () => {
    const nextTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
    persistTheme(nextTheme);
    applyTheme(nextTheme);
  };

  return toggle;
}

type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  const storedTheme = localStorage.getItem(THEME_COOKIE_NAME);

  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function persistTheme(theme: Theme) {
  localStorage.setItem(THEME_COOKIE_NAME, theme);
  document.cookie = `${THEME_COOKIE_NAME}=${theme}; path=/; max-age=31536000; samesite=lax`;
}

function applyTheme(theme: Theme) {
  const isDark = theme === "dark";

  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.style.colorScheme = theme;
  updateMeta("theme-color", isDark ? DARK_THEME_COLOR : LIGHT_THEME_COLOR);
  updateMeta("color-scheme", theme);
}

function updateMeta(name: string, content: string) {
  let meta = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.name = name;
    document.head.appendChild(meta);
  }

  meta.content = content;
}
