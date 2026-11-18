import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { I18nProvider } from "@/lib/i18n";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Kevin Tandrian | Web Developer & IT Support Portfolio",
  description:
    "Portfolio of Kevin Tandrian, Computer Science graduate from Universitas Atma Jaya Makassar. Specializing in Web Development (PHP, Laravel, TypeScript, Node.js), Deep Learning, and IT Support.",
  keywords: [
    "Kevin Tandrian",
    "Portfolio",
    "Web Developer",
    "IT Support",
    "Laravel",
    "Next.js",
    "TypeScript",
    "Deep Learning",
    "Universitas Atma Jaya Makassar",
    "Makassar",
  ],
  authors: [{ name: "Kevin Tandrian", url: "https://github.com/KevinTandrian" }],
  openGraph: {
    title: "Kevin Tandrian | Web Developer & IT Support",
    description:
      "Lulusan Ilmu Komputer Universitas Atma Jaya Makassar. Web Development (Laravel, TypeScript, Node.js), Deep Learning, & IT Support.",
    url: "https://github.com/KevinTandrian",
    siteName: "Kevin Tandrian Portfolio",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth antialiased" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans transition-colors duration-200 bg-[linear-gradient(to_right,rgba(128,128,128,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.06)_1px,transparent_1px)] bg-[size:32px_32px]">
        <I18nProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
