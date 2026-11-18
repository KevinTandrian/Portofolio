"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const shouldBeDark = savedTheme === "dark" || (!savedTheme && systemPrefersDark);
      if (shouldBeDark) {
        document.documentElement.classList.add("dark");
      }
      return shouldBeDark;
    }
    return false;
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const { lang, setLang, t } = useLanguage();

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleLanguage = () => {
    setLang(lang === "id" ? "en" : "id");
  };

  const navLinks = [
    { label: t("nav.home"), href: "/#" },
    { label: t("nav.services"), href: "/#services" },
    { label: t("nav.about"), href: "/#about" },
    { label: t("nav.projects"), href: "/#projects" },
    { label: t("nav.certifications"), href: "/#certifications" },
    { label: t("nav.experience"), href: "/#experience" },
  ];

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6 rounded-full bg-[#16382b] text-white shadow-xl border border-emerald-900/60 backdrop-blur-md">
          {/* Brand Logo with golden badge icon */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-slate-950 font-black text-sm shadow-xs transition-transform group-hover:scale-105">
              K
            </span>
            <span className="font-bold tracking-tight text-sm sm:text-base text-white group-hover:text-amber-400 transition-colors">
              Kevin<span className="text-amber-400 font-normal">.</span>
            </span>
          </Link>

          {/* Desktop Center Nav Links */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-emerald-100/80 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="h-8 w-8 rounded-full flex items-center justify-center text-emerald-100 hover:text-amber-400 hover:bg-emerald-900/50 transition-colors cursor-pointer"
              title={isDark ? "Light Mode" : "Dark Mode"}
            >
              {isDark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Bilingual Toggle Pill */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="h-8 px-2.5 rounded-full bg-emerald-900/40 border border-emerald-700/50 text-[11px] font-semibold text-emerald-100 hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
              title="Switch Language"
            >
              <span className={lang === "en" ? "text-amber-400 font-bold" : "text-emerald-200"}>EN</span>
              <span className="text-emerald-400/40">/</span>
              <span className={lang === "id" ? "text-amber-400 font-bold" : "text-emerald-200"}>ID</span>
            </button>

            {/* Template-Inspired Contact Button */}
            <Button asChild size="sm" className="rounded-full font-bold bg-white hover:bg-amber-400 text-slate-950 shadow-xs h-8 px-4 ml-1 transition-all">
              <a
                href="https://wa.me/6281342473119"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs"
              >
                {t("nav.cta")}
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex sm:hidden items-center gap-1.5">
            <button
              type="button"
              onClick={toggleLanguage}
              className="h-7 px-2 rounded-full border border-emerald-700/60 text-[11px] font-semibold text-emerald-100"
            >
              {lang.toUpperCase()}
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="h-7 w-7 rounded-full flex items-center justify-center text-emerald-100"
            >
              {isDark ? <Sun className="h-3.5 w-3.5 text-amber-400" /> : <Moon className="h-3.5 w-3.5" />}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open menu"
              className="h-7 w-7 rounded-full flex items-center justify-center text-emerald-100"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 rounded-2xl border border-emerald-900/60 bg-[#16382b]/95 p-4 text-white shadow-2xl backdrop-blur-xl">
            <div className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-medium text-emerald-100/90 hover:text-amber-400 py-1"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-emerald-900/60">
                <Button asChild size="sm" className="w-full rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs">
                  <a
                    href="https://wa.me/6281342473119"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1"
                  >
                    {t("nav.cta")} (WhatsApp)
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
