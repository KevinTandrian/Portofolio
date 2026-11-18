"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export function ProjectBackBtn() {
  const { lang } = useLanguage();
  return (
    <Button asChild variant="ghost" size="sm" className="-ml-3 text-muted-foreground hover:text-foreground">
      <Link href="/#projects" className="inline-flex items-center gap-1.5">
        <ArrowLeft className="h-4 w-4" />
        {lang === "id" ? "Kembali ke Proyek" : "Back to Projects"}
      </Link>
    </Button>
  );
}

export function ProjectFooterNav() {
  const { lang } = useLanguage();
  return (
    <footer className="mt-16 border-t border-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <Button asChild variant="ghost" size="sm">
        <Link href="/#projects" className="inline-flex items-center gap-1.5">
          <ArrowLeft className="h-4 w-4" />
          {lang === "id" ? "Lihat Semua Proyek" : "View All Projects"}
        </Link>
      </Button>

      <Button asChild size="sm" className="rounded-full">
        <a
          href="https://wa.me/6281342473119"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1"
        >
          {lang === "id" ? "Diskusi via WhatsApp" : "Discuss on WhatsApp"}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </Button>
    </footer>
  );
}
