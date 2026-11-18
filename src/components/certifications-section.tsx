"use client";

import { useState } from "react";
import { certificatesData } from "@/lib/certificates";
import { useLanguage } from "@/lib/i18n";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Award,
  ExternalLink,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  FileText,
} from "lucide-react";

export function CertificationsSection() {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState<"all" | "web" | "cloud-ai" | "tools">("all");

  const filterTabs = [
    { key: "all", label: t("cert.all") },
    { key: "web", label: t("cert.web") },
    { key: "cloud-ai", label: t("cert.cloudAi") },
    { key: "tools", label: t("cert.tools") },
  ] as const;

  const filteredCerts = certificatesData.filter((c) => {
    if (filter === "all") return true;
    return c.category === filter;
  });

  return (
    <section id="certifications" className="container mx-auto max-w-5xl px-4 sm:px-6 scroll-mt-20">
      {/* Clean Header */}
      <div className="space-y-1 mb-5">
        <div className="flex items-center gap-2 text-primary font-semibold text-xs tracking-wide uppercase">
          <Award className="h-3.5 w-3.5" />
          <span>{t("cert.badge")}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">{t("cert.title")}</h2>
        <p className="text-muted-foreground text-sm max-w-xl">
          {t("cert.desc")}
        </p>
      </div>

      {/* Clean Full-Width Filter Buttons (Never cut off) */}
      <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-border/40 pb-4">
        {filterTabs.map((tab) => {
          const isActive = filter === tab.key;
          const count =
            tab.key === "all"
              ? certificatesData.length
              : certificatesData.filter((c) => c.category === tab.key).length;

          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setFilter(tab.key)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${
                isActive
                  ? "bg-foreground text-background border-foreground font-semibold"
                  : "bg-muted/40 text-muted-foreground border-border/70 hover:text-foreground hover:bg-muted"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isActive
                    ? "bg-background/25 text-background font-bold"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {filteredCerts.map((cert) => (
          <Card
            key={cert.id}
            className="group flex flex-col justify-between border-border/60 bg-card hover:border-primary/40 hover:shadow-xs transition-all duration-200"
          >
            <CardHeader className="p-5 sm:p-6">
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <Badge
                  variant="secondary"
                  className="text-[11px] font-medium bg-muted text-foreground border-border/80"
                >
                  <ShieldCheck className="h-3 w-3 mr-1 text-primary" />
                  {cert.issuer}
                </Badge>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{cert.issueDate}</span>
                </div>
              </div>

              <CardTitle className="text-base font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                {lang === "id" ? cert.title : cert.titleEn}
              </CardTitle>

              {cert.credentialId && (
                <p className="text-xs font-mono text-muted-foreground mt-1">
                  ID: <span className="text-foreground">{cert.credentialId}</span>
                </p>
              )}

              <div className="mt-3.5 flex flex-wrap gap-1.5">
                {cert.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-[11px] font-normal bg-muted/20 text-muted-foreground border-border/70"
                  >
                    <CheckCircle2 className="h-2.5 w-2.5 mr-1 text-emerald-500" />
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardHeader>

            <div className="border-t border-border/40 px-5 sm:px-6 py-3 bg-muted/15 flex flex-wrap items-center justify-between gap-2 text-xs">
              {cert.pdfUrl && (
                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FileText className="h-3.5 w-3.5 text-primary" />
                  <span>{lang === "id" ? "Buka PDF" : "View PDF"}</span>
                </a>
              )}

              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-primary hover:underline ml-auto"
                >
                  {t("cert.verify")}
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
