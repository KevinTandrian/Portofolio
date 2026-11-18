import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getProjectBySlug, getProjectSlugs } from "@/lib/mdx";
import { mdxComponents } from "@/components/mdx-components";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectBackBtn, ProjectFooterNav } from "@/components/project-nav-bar";
import { ArrowUpRight, Calendar, User, Award } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Kevin Tandrian",
    };
  }

  return {
    title: `${project.meta.title} | Kevin Tandrian`,
    description: project.meta.description,
    openGraph: {
      title: `${project.meta.title} - Kevin Tandrian`,
      description: project.meta.description,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { meta, content } = project;

  return (
    <article className="min-h-screen pb-20 pt-8 sm:pt-12">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        {/* Back navigation */}
        <div className="mb-8">
          <ProjectBackBtn />
        </div>

        {/* Header Header */}
        <header className="border-b border-border/50 pb-8 mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {meta.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            {meta.title}
          </h1>

          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {meta.description}
          </p>

          {/* Meta Info Bar */}
          <div className="mt-6 flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-muted-foreground pt-4 border-t border-border/30">
            {meta.role && (
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4 text-primary" />
                <span>Role: <strong className="text-foreground font-medium">{meta.role}</strong></span>
              </div>
            )}
            {meta.date && (
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-primary" />
                <span>{meta.date}</span>
              </div>
            )}
            {meta.metrics && (
              <div className="flex items-center gap-1.5">
                <Award className="h-4 w-4 text-emerald-500" />
                <span>Highlight: <strong className="text-foreground font-medium">{meta.metrics}</strong></span>
              </div>
            )}
          </div>

          {/* Action Links */}
          <div className="mt-6 flex flex-wrap gap-3">
            {meta.githubUrl && (
              <Button asChild variant="outline" size="sm" className="rounded-full">
                <a
                  href={meta.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5"
                >
                  GitHub Repository
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </Button>
            )}
            {meta.demoUrl && (
              <Button asChild size="sm" className="rounded-full">
                <a
                  href={meta.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5"
                >
                  Live Demo
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </Button>
            )}
          </div>
        </header>

        {/* MDX Body Content */}
        <main className="prose prose-neutral dark:prose-invert max-w-none">
          <MDXRemote source={content} components={mdxComponents} />
        </main>

        {/* Bottom CTA / Navigation */}
        <ProjectFooterNav />
      </div>
    </article>
  );
}
