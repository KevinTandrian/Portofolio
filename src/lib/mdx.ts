import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ProjectMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  featured?: boolean;
  demoUrl?: string;
  githubUrl?: string;
  coverImage?: string;
  role?: string;
  metrics?: string;
}

export interface ProjectData {
  meta: ProjectMeta;
  content: string;
}

const PROJECTS_PATH = path.join(process.cwd(), "src", "content", "projects");

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(PROJECTS_PATH)) {
    return [];
  }
  return fs
    .readdirSync(PROJECTS_PATH)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getProjectBySlug(slug: string): ProjectData | null {
  try {
    const realSlug = slug.replace(/\.mdx$/, "");
    const fullPath = path.join(PROJECTS_PATH, `${realSlug}.mdx`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const meta: ProjectMeta = {
      slug: realSlug,
      title: data.title ?? realSlug,
      description: data.description ?? "",
      date: data.date ?? "",
      tags: Array.isArray(data.tags) ? data.tags : [],
      featured: Boolean(data.featured),
      demoUrl: data.demoUrl,
      githubUrl: data.githubUrl,
      coverImage: data.coverImage,
      role: data.role,
      metrics: data.metrics,
    };

    return { meta, content };
  } catch (error) {
    console.error(`Error loading project ${slug}:`, error);
    return null;
  }
}

export function getAllProjects(): ProjectMeta[] {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug)?.meta)
    .filter((meta): meta is ProjectMeta => meta !== undefined);

  return projects.sort((a, b) => (Date.parse(b.date) || 0) - (Date.parse(a.date) || 0));
}

export function getFeaturedProjects(): ProjectMeta[] {
  return getAllProjects().filter((project) => project.featured);
}
