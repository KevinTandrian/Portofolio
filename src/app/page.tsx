import { getAllProjects } from "@/lib/mdx";
import { HomeView } from "@/components/home-view";

export default function HomePage() {
  const projects = getAllProjects();
  return <HomeView projects={projects} />;
}
