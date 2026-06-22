import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/hooks/useTheme";
import {
  DARK_THEME_COLOR,
  LIGHT_THEME_COLOR,
  THEME_COOKIE_NAME,
  THEME_INIT_SCRIPT,
} from "@/lib/theme";
import "../globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: LIGHT_THEME_COLOR },
    { media: "(prefers-color-scheme: dark)", color: DARK_THEME_COLOR },
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return {
    metadataBase: new URL(siteConfig.url),
    title: messages.metadata.title,
    description: messages.metadata.description,
    alternates: {
      canonical: `${siteConfig.url}/${locale}`,
      languages: {
        en: `${siteConfig.url}/en`,
        es: `${siteConfig.url}/es`,
        "x-default": `${siteConfig.url}/en`,
      },
    },
    openGraph: {
      title: messages.metadata.title,
      description: messages.metadata.description,
      url: `${siteConfig.url}/${locale}`,
      siteName: siteConfig.name,
      locale: locale === "es" ? "es_CL" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: messages.metadata.title,
      description: messages.metadata.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const cookieStore = await cookies();

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const storedTheme = cookieStore.get(THEME_COOKIE_NAME)?.value;
  const htmlClassName = [
    geist.variable,
    geistMono.variable,
    storedTheme === "dark" ? "dark" : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <html lang={locale} className={htmlClassName} suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
