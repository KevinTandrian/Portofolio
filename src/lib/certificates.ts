export interface Certificate {
  id: string;
  title: string;
  titleEn: string;
  issuer: "Dicoding Indonesia" | "Coursera (Meta)" | "Dicoding x AWS";
  credentialId?: string;
  issueDate: string;
  category: "web" | "cloud-ai" | "tools";
  skills: string[];
  verifyUrl?: string;
  pdfUrl?: string;
}

export const certificatesData: Certificate[] = [
  // Web Development
  {
    id: "backend-js",
    title: "Belajar Back-End Pemula dengan JavaScript",
    titleEn: "Back-End Development with JavaScript",
    issuer: "Dicoding Indonesia",
    issueDate: "Jan 2026",
    category: "web",
    skills: ["Node.js", "RESTful API", "Hapi / Express", "Server Routing", "Postman Testing"],
    pdfUrl: "/certificates/dicoding-backend-pemula-javascript.pdf",
  },
  {
    id: "coursera-meta-html-css",
    title: "HTML and CSS in Depth",
    titleEn: "HTML and CSS in Depth",
    issuer: "Coursera (Meta)",
    credentialId: "U3DAYKC4ST6H",
    issueDate: "Mar 2024",
    category: "web",
    skills: ["Advanced CSS", "Responsive Design", "Flexbox & Grid", "UI Animation", "Web Accessibility"],
    verifyUrl: "https://www.coursera.org/verify/U3DAYKC4ST6H",
    pdfUrl: "/certificates/coursera-html-css-in-depth.pdf",
  },
  {
    id: "coursera-meta-js",
    title: "Programming with JavaScript",
    titleEn: "Programming with JavaScript",
    issuer: "Coursera (Meta)",
    credentialId: "4QAA3C8W49SC",
    issueDate: "Okt 2023",
    category: "web",
    skills: ["JavaScript ES6+", "DOM Manipulation", "OOP & Functional Programming", "Unit Testing (Jest)"],
    verifyUrl: "https://www.coursera.org/verify/4QAA3C8W49SC",
    pdfUrl: "/certificates/coursera-programming-with-javascript.pdf",
  },
  {
    id: "frontend-pemula",
    title: "Belajar Membuat Front-End Web untuk Pemula",
    titleEn: "Front-End Web Development for Beginners",
    issuer: "Dicoding Indonesia",
    issueDate: "Jun 2024",
    category: "web",
    skills: ["DOM & Event Handling", "Web Storage API", "Interactive UI Components"],
    pdfUrl: "/certificates/dicoding-frontend-pemula.pdf",
  },
  {
    id: "sql-dicoding",
    title: "Belajar Dasar Structured Query Language (SQL)",
    titleEn: "Structured Query Language (SQL) Fundamentals",
    issuer: "Dicoding Indonesia",
    issueDate: "Jan 2024",
    category: "web",
    skills: ["Relational Database", "DDL & DML", "Complex Queries & Joins", "Data Integrity"],
    pdfUrl: "/certificates/dicoding-dasar-sql.pdf",
  },
  {
    id: "coursera-meta-intro-fe",
    title: "Introduction to Front-End Development",
    titleEn: "Introduction to Front-End Development",
    issuer: "Coursera (Meta)",
    credentialId: "ZS6MDC2KWJLH",
    issueDate: "Des 2023",
    category: "web",
    skills: ["Web Standards", "Bootstrap", "Core Front-End Architecture"],
    verifyUrl: "https://www.coursera.org/verify/ZS6MDC2KWJLH",
    pdfUrl: "/certificates/coursera-intro-frontend-dev.pdf",
  },

  // Cloud & AI
  {
    id: "aws-genai",
    title: "Belajar Dasar Cloud dan Gen AI di AWS",
    titleEn: "Cloud & Generative AI Fundamentals on AWS",
    issuer: "Dicoding x AWS",
    issueDate: "Okt 2025",
    category: "cloud-ai",
    skills: ["AWS Cloud Architecture", "Generative AI", "Amazon Bedrock", "Cloud Security"],
    pdfUrl: "/certificates/dicoding-aws-cloud-genai.pdf",
  },
  {
    id: "dasar-ai",
    title: "Belajar Dasar AI & Data Science",
    titleEn: "Artificial Intelligence & Data Science Fundamentals",
    issuer: "Dicoding Indonesia",
    issueDate: "Sep 2025",
    category: "cloud-ai",
    skills: ["Machine Learning Concepts", "Neural Networks", "Data Exploration", "Model Evaluation"],
    pdfUrl: "/certificates/dicoding-dasar-ai.pdf",
  },
  {
    id: "python-dicoding",
    title: "Memulai Pemrograman dengan Python",
    titleEn: "Python Programming Fundamentals",
    issuer: "Dicoding Indonesia",
    issueDate: "Feb 2024",
    category: "cloud-ai",
    skills: ["Python Core", "Data Structures", "Control Flow", "File Handling"],
    pdfUrl: "/certificates/dicoding-python.pdf",
  },

  // Tools & Systems
  {
    id: "coursera-version-control",
    title: "Version Control (Git & GitHub)",
    titleEn: "Version Control with Git & GitHub",
    issuer: "Coursera (Meta)",
    credentialId: "8STLNFARH5FE",
    issueDate: "Des 2023",
    category: "tools",
    skills: ["Git CLI", "GitHub Workflows", "Branching & Merging", "Collaboration & PRs"],
    verifyUrl: "https://www.coursera.org/verify/8STLNFARH5FE",
    pdfUrl: "/certificates/coursera-version-control.pdf",
  },
  {
    id: "project-management",
    title: "Belajar Dasar Manajemen Proyek",
    titleEn: "Project Management Fundamentals",
    issuer: "Dicoding Indonesia",
    issueDate: "Des 2023",
    category: "tools",
    skills: ["Project Lifecycle", "Agile & Waterfall", "Sprint Planning", "Risk Management"],
    pdfUrl: "/certificates/dicoding-manajemen-proyek.pdf",
  },
];
