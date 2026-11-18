"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ProjectMeta } from "@/lib/mdx";
import { useLanguage } from "@/lib/i18n";
import { ArrowUpRight, FolderGit2 } from "lucide-react";

interface ProjectCardProps {
  project: ProjectMeta;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <Card className="group relative flex flex-col justify-between overflow-hidden border border-border/60 bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300">
      <CardHeader className="p-6">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <FolderGit2 className="h-4 w-4 text-primary" />
            <span>{project.role || "Project"}</span>
          </div>
          {project.metrics && (
            <Badge variant="secondary" className="text-xs font-semibold text-primary bg-primary/10 hover:bg-primary/20">
              {project.metrics}
            </Badge>
          )}
        </div>

        <CardTitle className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
          <Link href={`/projects/${project.slug}`} className="focus:outline-hidden">
            <span className="absolute inset-0" aria-hidden="true" />
            {project.title}
          </Link>
        </CardTitle>

        <CardDescription className="mt-3 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {project.description}
        </CardDescription>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs font-normal border-border/80 bg-muted/40">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <div className="relative z-10 flex items-center justify-between border-t border-border/40 px-6 py-4 bg-muted/20">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:underline">
          {t("projects.viewCase")}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors p-1"
            title="GitHub Repository"
          >
            GitHub
          </a>
        )}
      </div>
    </Card>
  );
}
