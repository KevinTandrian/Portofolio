"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { ProjectMeta } from "@/lib/mdx";
import { ProjectCard } from "@/components/project-card";
import { CertificationsSection } from "@/components/certifications-section";
import { ImageLightbox } from "@/components/image-lightbox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  GraduationCap,
  MapPin,
  Mail,
  ArrowUpRight,
  ArrowRight,
  Cpu,
  Wrench,
  CheckCircle2,
  Briefcase,
  FileBadge2,
  Play,
} from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.58c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.45 1.03 2.61.12.17 1.78 2.73 4.32 3.82.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.12-.22-.19-.47-.32z" />
    </svg>
  );
}

export function HomeView({ projects }: { projects: ProjectMeta[] }) {
  const { lang, t } = useLanguage();

  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-20 pt-4 sm:pt-8">
      {/* 1. Hero Section - Inspired by the Creative Template */}
      <section className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center pt-4 sm:pt-8">
          {/* Left Column: Heading, Bio, & Action Pills */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            {/* Template-Inspired Bracket Badge */}
            <div className="relative inline-flex items-center px-3.5 py-1 text-xs font-mono font-medium rounded border border-border/80 text-foreground bg-muted/40">
              <span className="absolute -top-1 -left-1 text-[10px] text-amber-500 font-bold">┌</span>
              <span className="absolute -top-1 -right-1 text-[10px] text-amber-500 font-bold">┐</span>
              <span className="absolute -bottom-1 -left-1 text-[10px] text-amber-500 font-bold">└</span>
              <span className="absolute -bottom-1 -right-1 text-[10px] text-amber-500 font-bold">┘</span>
              <span>{t("hero.hello")}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                {t("hero.im")}
                <span className="text-amber-500">{t("hero.name")}</span>
                <br />
                <span className="text-foreground">{t("hero.roleTitle")}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-muted-foreground pt-1">
                {t("hero.basedIn")}
              </p>
            </div>

            {/* Direct Factual Summary */}
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
              {t("hero.summary")}
            </p>

            {/* Creative Pill Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button
                asChild
                className="rounded-full bg-[#16382b] hover:bg-[#1f4a39] text-white pl-6 pr-2 py-6 font-semibold shadow-md inline-flex items-center gap-3 transition-transform hover:scale-[1.02]"
              >
                <a href="#projects">
                  <span>{t("hero.ctaProjects")}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-slate-950 font-bold shadow-xs">
                    <Play className="h-3 w-3 fill-current ml-0.5" />
                  </span>
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-full px-6 py-6 font-medium border-border/80 hover:bg-muted"
              >
                <a
                  href="https://wa.me/6281342473119"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <WhatsappIcon className="h-4 w-4 text-emerald-500" />
                  {t("hero.ctaContact")}
                </a>
              </Button>

              {/* Social Icon Links */}
              <div className="flex items-center gap-1 pl-1">
                <Button asChild variant="ghost" size="icon" className="h-9 w-9 rounded-full" title="GitHub Profile">
                  <a href="https://github.com/KevinTandrian" target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button asChild variant="ghost" size="icon" className="h-9 w-9 rounded-full" title="LinkedIn Profile">
                  <a href="https://www.linkedin.com/in/kevin-tandrian/" target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon className="h-4 w-4 text-blue-600" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button asChild variant="ghost" size="icon" className="h-9 w-9 rounded-full" title="Email">
                  <a href="mailto:kevintandrian9@gmail.com">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Organic Golden Arch & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-6">
            <div className="relative flex items-center justify-center">
              {/* Golden Arch / Oval Backdrop */}
              <div className="absolute h-72 w-64 sm:h-84 sm:w-76 rounded-[48%_52%_70%_30%/45%_55%_65%_35%] bg-amber-500/90 shadow-xl" />

              {/* Kevin Tandrian Portrait - Interactive Full-Scale Lightbox */}
              <div className="relative z-10">
                <ImageLightbox
                  src="/images/profile.jpg"
                  alt="Kevin Tandrian"
                  title="Kevin Tandrian"
                  subtitle="Universitas Atma Jaya Makassar - Web Developer & IT Support"
                  triggerClassName="h-64 w-60 sm:h-76 sm:w-72 rounded-3xl overflow-hidden border-4 border-background shadow-2xl bg-muted/40"
                  imageClassName="h-full w-full object-cover object-top"
                />
              </div>

              {/* Floating Badge 1: Web Developer */}
              <div className="absolute -bottom-2 -left-4 z-20 rounded-full bg-[#16382b] text-white px-3.5 py-1.5 text-xs font-semibold shadow-lg border border-emerald-900 flex items-center gap-1.5 animate-bounce [animation-duration:4s]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>{t("hero.badgeDeveloper")}</span>
              </div>

              {/* Floating Badge 2: IT Support */}
              <div className="absolute bottom-10 -right-4 z-20 rounded-full bg-amber-500 text-slate-950 px-3.5 py-1.5 text-xs font-bold shadow-lg border border-amber-400 flex items-center gap-1.5 animate-bounce [animation-duration:5s]">
                <Wrench className="h-3 w-3" />
                <span>{t("hero.badgeSupport")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services / Technical Capabilities Grid ("Services I Provide") */}
      <section id="services" className="container mx-auto max-w-5xl px-4 sm:px-6 scroll-mt-24">
        <div className="space-y-1 mb-8">
          <div className="flex items-center gap-2 text-primary font-semibold text-xs tracking-wide uppercase">
            <span>—</span>
            <span>{t("services.badge")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            {t("services.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service 1: Web Development */}
          <div className="rounded-3xl border border-border/70 bg-card p-6 sm:p-7 shadow-xs hover:border-amber-500/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{t("services.webTitle")}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {t("services.webDesc")}
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-border/40">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline"
              >
                <span>{t("services.learnMore")}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Service 2: IT Support & Systems */}
          <div className="rounded-3xl border border-border/70 bg-card p-6 sm:p-7 shadow-xs hover:border-amber-500/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-[#16382b]/15 text-[#16382b] dark:text-emerald-400 flex items-center justify-center">
                <Wrench className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{t("services.supportTitle")}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {t("services.supportDesc")}
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-border/40">
              <a
                href="#experience"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                <span>{t("services.learnMore")}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Service 3: AI & Deep Learning */}
          <div className="rounded-3xl border border-border/70 bg-card p-6 sm:p-7 shadow-xs hover:border-amber-500/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{t("services.aiTitle")}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {t("services.aiDesc")}
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-border/40">
              <Link
                href="/projects/deepfake-detection"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                <span>{t("services.learnMore")}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Deep Forest Green Section ("Who is Kevin Tandrian?") */}
      <section id="about" className="container mx-auto max-w-5xl px-4 sm:px-6 scroll-mt-24">
        <div className="rounded-3xl bg-[#16382b] text-white p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Circular Portrait with Golden Ring and Tech Badges */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                {/* Circular Portrait with Lightbox */}
                <div className="h-56 w-56 sm:h-64 sm:w-64 rounded-full p-2 border-4 border-amber-500/90 shadow-2xl bg-amber-500/10 flex items-center justify-center overflow-hidden">
                  <ImageLightbox
                    src="/images/profile.jpg"
                    alt="Kevin Tandrian"
                    title="Kevin Tandrian"
                    subtitle="Universitas Atma Jaya Makassar"
                    triggerClassName="h-full w-full rounded-full overflow-hidden"
                    imageClassName="h-full w-full object-cover object-top"
                  />
                </div>

                {/* Floating Tags Around Portrait */}
                <div className="absolute -top-2 left-0 rounded-full bg-white text-slate-950 px-2.5 py-1 text-[11px] font-bold shadow-md">
                  Laravel
                </div>
                <div className="absolute top-12 -right-4 rounded-full bg-amber-500 text-slate-950 px-2.5 py-1 text-[11px] font-bold shadow-md">
                  TypeScript
                </div>
                <div className="absolute -bottom-2 right-2 rounded-full bg-white text-slate-950 px-2.5 py-1 text-[11px] font-bold shadow-md">
                  Node.js
                </div>
                <div className="absolute bottom-10 -left-4 rounded-full bg-amber-500 text-slate-950 px-2.5 py-1 text-[11px] font-bold shadow-md">
                  IT Support
                </div>
              </div>
            </div>

            {/* Right: Bio & Numbers */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-1">
                <div className="text-amber-400 font-semibold text-xs tracking-wider uppercase">
                  — {t("about.badge")}
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  {t("about.name")}
                </h2>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                <p>{t("about.p1")}</p>
                <p>{t("about.p2")}</p>
                <p>{t("about.p3")}</p>
              </div>

              {/* Quick Stat Numbers in Gold */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-emerald-900/80">
                <div>
                  <span className="block text-xl sm:text-2xl font-black text-amber-400">
                    {t("about.statGpa")}
                  </span>
                  <span className="block text-[11px] text-emerald-200/80 mt-0.5">
                    {t("about.statGpaDesc")}
                  </span>
                </div>
                <div>
                  <span className="block text-xl sm:text-2xl font-black text-amber-400">
                    {t("about.statDegree")}
                  </span>
                  <span className="block text-[11px] text-emerald-200/80 mt-0.5">
                    {t("about.statDegreeDesc")}
                  </span>
                </div>
                <div>
                  <span className="block text-xl sm:text-2xl font-black text-amber-400">
                    {t("about.statResearch")}
                  </span>
                  <span className="block text-[11px] text-emerald-200/80 mt-0.5">
                    {t("about.statResearchDesc")}
                  </span>
                </div>
                <div>
                  <span className="block text-xl sm:text-2xl font-black text-amber-400">
                    {t("about.statStatus")}
                  </span>
                  <span className="block text-[11px] text-emerald-200/80 mt-0.5">
                    {t("about.statStatusDesc")}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Button
                  asChild
                  className="rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-5 shadow-lg"
                >
                  <a
                    href="https://wa.me/6281342473119"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <WhatsappIcon className="h-4 w-4" />
                    <span>WhatsApp: 0813-4247-3119</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Projects Section */}
      <section id="projects" className="container mx-auto max-w-5xl px-4 sm:px-6 scroll-mt-24">
        <div className="space-y-1 mb-8">
          <div className="flex items-center gap-2 text-primary font-semibold text-xs tracking-wide uppercase">
            <span>—</span>
            <span>{t("projects.badge")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            {t("projects.title")}
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl">
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* 6. Certifications Section */}
      <CertificationsSection />

      {/* 7. Experience & Education Section */}
      <section id="experience" className="container mx-auto max-w-5xl px-4 sm:px-6 scroll-mt-24">
        <div className="space-y-1 mb-8">
          <div className="flex items-center gap-2 text-primary font-semibold text-xs tracking-wide uppercase">
            <span>—</span>
            <span>{t("exp.badge")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            {t("exp.title")}
          </h2>
        </div>

        <div className="space-y-6">
          {/* Work / Internship Experience Card */}
          <div className="rounded-3xl border border-border/70 bg-card p-6 sm:p-8 hover:border-primary/40 transition-all shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-border/40 pb-5">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                  <Briefcase className="h-3.5 w-3.5" />
                  <span>{t("exp.internRole")}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">{t("exp.company")}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{t("exp.period")}</p>
              </div>
              <Badge variant="secondary" className="w-fit text-xs">Makassar, Indonesia</Badge>
            </div>

            <div className="mt-5 space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("exp.internSummary")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{t("exp.task1")}</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{t("exp.task2")}</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{t("exp.task3")}</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{t("exp.task4")}</span>
                </div>
              </div>

              {/* Certificate Preview with High-Res Lightbox Modal */}
              <div className="pt-4 border-t border-border/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <ImageLightbox
                    src="/images/sertifikat-magang.jpg"
                    alt="Sertifikat Magang PT. SuracoJaya AbadiMotor"
                    title={t("exp.certModalTitle")}
                    subtitle="Periode Magang: Agustus 2025 - Oktober 2025"
                    triggerClassName="h-16 w-24 sm:h-20 sm:w-28 shrink-0 rounded-xl border border-border/80 shadow-xs"
                    imageClassName="h-full w-full object-cover object-center"
                  />
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                      <FileBadge2 className="h-4 w-4 text-primary" />
                      <span>{t("exp.certModalTitle")}</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      {lang === "id"
                        ? "Klik gambar atau tombol untuk membuka sertifikat ukuran penuh"
                        : "Click thumbnail or button to open full-scale certificate"}
                    </p>
                  </div>
                </div>

                <div className="shrink-0">
                  <ImageLightbox
                    src="/images/sertifikat-magang.jpg"
                    alt="Sertifikat Magang PT. SuracoJaya AbadiMotor"
                    title={t("exp.certModalTitle")}
                    subtitle="Periode Magang: Agustus 2025 - Oktober 2025"
                    triggerClassName="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border/80 bg-muted/60 text-xs font-semibold text-foreground hover:bg-muted transition-colors cursor-pointer"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5 text-amber-500" />
                    <span>{t("exp.viewCert")}</span>
                  </ImageLightbox>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Background Card */}
          <div className="rounded-3xl border border-border/70 bg-card p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-border/40 pb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                  <GraduationCap className="h-3.5 w-3.5" />
                  <span>{t("edu.univ")}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">{t("edu.major")}</h3>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-xs font-bold px-2.5 py-1">
                  {t("edu.gpaBadge")}
                </Badge>
                <Badge variant="secondary" className="w-fit text-xs">Makassar, Indonesia</Badge>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/20 px-3 py-1.5 rounded-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                <span>{t("edu.gpaDesc")}</span>
              </div>
              <h4 className="text-sm font-semibold text-foreground flex items-center gap-2 pt-1">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>{t("edu.thesisTitle")}</span>
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("edu.thesisDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Contact Section */}
      <section id="contact" className="container mx-auto max-w-5xl px-4 sm:px-6 scroll-mt-24">
        <div className="rounded-3xl border border-amber-500/20 bg-linear-to-b from-amber-500/5 to-transparent p-8 sm:p-12 text-center">
          <div className="text-amber-500 font-semibold text-xs tracking-wider uppercase mb-2">
            — {t("nav.contact")}
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {t("contact.title")}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground leading-relaxed text-sm">
            {t("contact.desc")}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-full shadow-md bg-[#16382b] hover:bg-[#1f4a39] text-white font-bold px-8">
              <a
                href="https://wa.me/6281342473119"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <WhatsappIcon className="h-5 w-5 text-emerald-400" />
                {t("contact.waBtn")}
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <a href="mailto:kevintandrian9@gmail.com" className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" />
                {t("contact.emailBtn")}
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Makassar, Indonesia</span>
            </div>
            <a
              href="https://www.linkedin.com/in/kevin-tandrian/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
            >
              <LinkedinIcon className="h-4 w-4 text-blue-600" />
              <span>LinkedIn</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href="https://github.com/KevinTandrian"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
              <span>GitHub</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
