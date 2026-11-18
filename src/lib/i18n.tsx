"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";

export type Language = "id" | "en";

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

export const translations = {
  id: {
    // Nav
    "nav.home": "Beranda",
    "nav.services": "Keahlian",
    "nav.about": "Tentang",
    "nav.projects": "Proyek",
    "nav.certifications": "Sertifikasi",
    "nav.experience": "Pengalaman",
    "nav.contact": "Kontak",
    "nav.cta": "Hubungi Saya",
    "nav.openToWork": "Siap Bekerja",

    // Hero
    "hero.hello": "Hello There!",
    "hero.im": "Saya ",
    "hero.name": "Kevin Tandrian,",
    "hero.roleTitle": "Web Developer & IT Support",
    "hero.basedIn": "Berbasis di Makassar, Indonesia.",
    "hero.summary": "Lulusan Ilmu Komputer Universitas Atma Jaya Makassar (IPK 3,83). Berfokus pada pengembangan aplikasi web (Laravel, TypeScript, Node.js) dan IT Support (hardware maintenance, dan troubleshooting).",
    "hero.ctaProjects": "Lihat Portofolio",
    "hero.ctaContact": "Hubungi Saya",
    "hero.badgeDeveloper": "Web Developer",
    "hero.badgeSupport": "IT Support",

    // Services / Capabilities
    "services.badge": "Keahlian & Layanan",
    "services.title": "Bidang Kompetensi Teknis",
    "services.learnMore": "Lihat detail proyek",
    "services.webTitle": "Web Development",
    "services.webDesc": "Pengembangan aplikasi web front-end dan backend REST API terintegrasi database relasional (Node.js, Express, TypeScript, Laravel, PostgreSQL, MySQL).",
    "services.supportTitle": "IT Support & Infrastruktur",
    "services.supportDesc": "Instalasi dan konfigurasi sistem operasi/software, troubleshooting hardware, penanganan jaringan LAN, konfigurasi Access Point, dan printer sharing.",
    "services.aiTitle": "AI & Deep Learning",
    "services.aiDesc": "Riset dan pemodelan neural network (ConvNeXt, Temporal Transformer, FFT, DANN) untuk deteksi manipulasi video deepfake menggunakan PyTorch dan OpenCV.",

    // About Section
    "about.badge": "Tentang Saya",
    "about.name": "Kevin Tandrian",
    "about.p1": "Saya adalah lulusan baru Ilmu Komputer dari Universitas Atma Jaya Makassar dengan IPK 3,83. Memiliki fokus utama di bidang Web Development (front-end dan back-end) serta IT Support (hardware maintenance, dan troubleshooting). Terbiasa bekerja mandiri maupun berkolaborasi dalam tim untuk menyelesaikan kendala teknis.",
    "about.p2": "Untuk tugas akhir sarjana, saya merancang dan meneliti model deteksi deepfake video berbasis spasial-frekuensi dan temporal transformer (ConvNeXt, Transformer, DANN, FFT) dengan rata-rata skor AUC 0.9238 lintas dataset. Di bidang web, saya aktif mengembangkan sistem dengan Laravel, TypeScript, Node.js, Tailwind CSS, dan PostgreSQL.",
    "about.p3": "Saya menyukai proses mencari tahu bagaimana sistem bekerja dan memperlakukan setiap bug atau masalah teknis sebagai proses belajar. Terbuka untuk peluang kerja penuh waktu di Makassar maupun relokasi.",
    "about.statGpa": "3.83",
    "about.statGpaDesc": "IPK (Skala 4.00)",
    "about.statResearch": "0.9238 AUC",
    "about.statResearchDesc": "Skor Riset Skripsi",
    "about.statDegree": "Sarjana Komputer",
    "about.statDegreeDesc": "Atma Jaya Makassar",
    "about.statStatus": "Full-Time Ready",
    "about.statStatusDesc": "Siap Onsite / Remote",

    // Projects
    "projects.badge": "Portofolio",
    "projects.title": "Proyek Pilihan & Studi Kasus",
    "projects.subtitle": "Daftar studi kasus proyek nyata yang memperlihatkan alur penyelesaian masalah teknis.",
    "projects.viewCase": "Baca Studi Kasus",

    // Certifications
    "cert.badge": "Sertifikasi",
    "cert.title": "Sertifikasi Terverifikasi",
    "cert.desc": "Pelatihan dan sertifikasi teknis resmi dari Coursera (Meta) dan Dicoding Indonesia.",
    "cert.all": "Semua",
    "cert.web": "Web & Database",
    "cert.cloudAi": "Cloud & AI",
    "cert.tools": "Tools & Workflow",
    "cert.verify": "Verifikasi Kredensial",
    "cert.issued": "Diterbitkan",

    // Experience & Education
    "exp.badge": "Riwayat Kerja & Pendidikan",
    "exp.title": "Pengalaman Kerja & Pendidikan",
    "exp.workTitle": "Pengalaman Magang",
    "exp.internRole": "IT Support Intern",
    "exp.company": "PT. SuracoJaya AbadiMotor",
    "exp.period": "Agustus 2025 – Oktober 2025",
    "exp.internSummary": "Menyelesaikan program magang IT Support dengan fokus pada pemeliharaan hardware komputer, instalasi sistem operasi/software, dan perakitan jaringan LAN kantor.",
    "exp.task1": "Instalasi dan konfigurasi sistem operasi serta software operasional perusahaan.",
    "exp.task2": "Troubleshooting dan perawatan perangkat keras (hardware) komputer.",
    "exp.task3": "Pemasangan jaringan LAN, konfigurasi Access Point, dan printer sharing.",
    "exp.task4": "Dukungan teknis harian bagi pengguna/karyawan.",
    "exp.viewCert": "Lihat Sertifikat Magang",
    "exp.certModalTitle": "Sertifikat Magang - PT. SuracoJaya AbadiMotor",

    // Education
    "edu.badge": "Pendidikan",
    "edu.title": "Pendidikan Formal",
    "edu.univ": "Universitas Atma Jaya Makassar",
    "edu.major": "Sarjana Komputer (S.Kom) - Ilmu Komputer / Teknik Informatika",
    "edu.gpaBadge": "IPK: 3,83 / 4.00",
    "edu.gpaDesc": "Indeks Prestasi Kumulatif (IPK): 3,83 / 4.00",
    "edu.thesisTitle": "Riset Skripsi: Deteksi Deepfake Spasial-Frekuensi & Temporal Transformer",
    "edu.thesisDesc": "Alat early screening verifikasi video jurnalistik berbasis ConvNeXt-Small, 2D FFT, 3-Layer Transformer, DANN lintas 4 domain, dan Temperature Scaling (T = 4.2892) dengan rata-rata AUC 0.9238.",

    // Contact
    "contact.title": "Kontak & Diskusi",
    "contact.desc": "Terbuka untuk peluang kerja penuh waktu di bidang Web Development atau IT Support di Makassar maupun relokasi.",
    "contact.waBtn": "Hubungi via WhatsApp",
    "contact.emailBtn": "Kirim Email",

    // Footer
    "footer.rights": "Hak cipta dilindungi.",
  },
  en: {
    // Nav
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.certifications": "Certificates",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "nav.cta": "Contact Me",
    "nav.openToWork": "Open to Work",

    // Hero
    "hero.hello": "Hello There!",
    "hero.im": "I'm ",
    "hero.name": "Kevin Tandrian,",
    "hero.roleTitle": "Web Developer & IT Support",
    "hero.basedIn": "Based in Makassar, Indonesia.",
    "hero.summary": "Computer Science graduate from Universitas Atma Jaya Makassar (3.83 GPA). Focused on building web applications (Laravel, TypeScript, Node.js) and IT support (hardware maintenance, and troubleshooting).",
    "hero.ctaProjects": "View Projects",
    "hero.ctaContact": "Contact Me",
    "hero.badgeDeveloper": "Web Developer",
    "hero.badgeSupport": "IT Support",

    // Services / Capabilities
    "services.badge": "Services & Expertise",
    "services.title": "Technical Capabilities I Provide",
    "services.learnMore": "Learn more",
    "services.webTitle": "Web Development",
    "services.webDesc": "Developing front-end interfaces and robust backend RESTful APIs integrated with relational databases (Node.js, Express, TypeScript, Laravel, PostgreSQL, MySQL).",
    "services.supportTitle": "IT Support & Systems",
    "services.supportDesc": "OS/software deployment, enterprise hardware troubleshooting, office LAN setup, Access Point configuration, and daily user technical support.",
    "services.aiTitle": "AI & Deep Learning",
    "services.aiDesc": "Neural network research and modeling (ConvNeXt, Temporal Transformer, FFT, DANN) for deepfake video detection using PyTorch and OpenCV.",

    // About Section
    "about.badge": "About Me",
    "about.name": "Kevin Tandrian",
    "about.p1": "I am a recent Computer Science graduate from Universitas Atma Jaya Makassar with a 3.83 GPA. My primary focus is on Web Development (front-end and back-end) as well as IT Support (hardware maintenance, and troubleshooting). Experienced in working independently and collaborating within teams to resolve technical issues.",
    "about.p2": "Throughout my academic journey, I have built a solid foundation in Web Development and Deep Learning. For my final undergraduate project, I developed a deepfake video detection model combining ConvNeXt, Temporal Transformer, Domain Adversarial Neural Networks, and Fast Fourier Transform, achieving an average AUC score of 0.9238 across multiple datasets. Alongside my research, I have hands-on experience working with PHP (Laravel), JavaScript, TypeScript, Node.js, Dart, HTML, Tailwind CSS, MySQL, Python, and PyTorch.",
    "about.p3": "I enjoy exploring how systems work and view every bug or technical issue as an opportunity to gain new insights. I am currently seeking full-time opportunities in Web Development or IT Support. While I am based in Makassar, I am open to relocating outside the city depending on the role and offer.",
    "about.statGpa": "3.83",
    "about.statGpaDesc": "GPA (Scale 4.00)",
    "about.statResearch": "0.9238 AUC",
    "about.statResearchDesc": "Research Score",
    "about.statDegree": "Bachelor of CS",
    "about.statDegreeDesc": "Atma Jaya Makassar",
    "about.statStatus": "Full-Time Ready",
    "about.statStatusDesc": "Onsite / Remote Ready",

    // Projects
    "projects.badge": "Portfolio",
    "projects.title": "Featured Projects & Case Studies",
    "projects.subtitle": "Real-world projects demonstrating technical execution and problem-solving.",
    "projects.viewCase": "Read Case Study",

    // Certifications
    "cert.badge": "Certifications",
    "cert.title": "Verified Certifications",
    "cert.desc": "Official technical certifications completed from Coursera (Meta) and Dicoding Indonesia.",
    "cert.all": "All",
    "cert.web": "Web & Database",
    "cert.cloudAi": "Cloud & AI",
    "cert.tools": "Tools & Workflow",
    "cert.verify": "Verify Credential",
    "cert.issued": "Issued",

    // Experience & Education
    "exp.badge": "Work & Education",
    "exp.title": "Experience & Education",
    "exp.workTitle": "Internship Experience",
    "exp.internRole": "IT Support Intern",
    "exp.company": "PT. SuracoJaya AbadiMotor",
    "exp.period": "August 2025 – October 2025",
    "exp.internSummary": "Hands-on IT Support internship focusing on computer hardware maintenance, operating system deployment, and corporate LAN networking.",
    "exp.task1": "Installing and configuring operating systems and business software.",
    "exp.task2": "Troubleshooting and maintaining enterprise computer hardware.",
    "exp.task3": "Setting up office LAN networks, Access Points, and printer sharing.",
    "exp.task4": "Providing daily responsive technical support to end-users.",
    "exp.viewCert": "View Internship Certificate",
    "exp.certModalTitle": "Internship Certificate - PT Suracojaya Abadimotor",

    // Education
    "edu.badge": "Education",
    "edu.title": "Formal Education",
    "edu.univ": "Universitas Atma Jaya Makassar",
    "edu.major": "Bachelor of Computer Science (S.Kom)",
    "edu.gpaBadge": "GPA: 3.83 / 4.00",
    "edu.gpaDesc": "Grade Point Average (GPA): 3.83 / 4.00 scale",
    "edu.thesisTitle": "Undergraduate Thesis: Spatial-Frequency & Temporal Transformer Deepfake Detection",
    "edu.thesisDesc": "Automated early screening system for journalistic video verification combining ConvNeXt-Small, 2D FFT, 3-Layer Transformer, 4-domain DANN, and Temperature Scaling (T = 4.2892) achieving 0.9238 AUC.",

    // Contact
    "contact.title": "Contact & Connect",
    "contact.desc": "Open for full-time opportunities in Web Development or IT Support, based in Makassar or open to relocate.",
    "contact.waBtn": "Chat on WhatsApp",
    "contact.emailBtn": "Send an Email",

    // Footer
    "footer.rights": "All rights reserved.",
  },
};

const I18nContext = createContext<I18nContextType>({
  lang: "id",
  setLang: () => { },
  t: (key) => key,
});

function subscribeLang(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("portfolio_lang_change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("portfolio_lang_change", callback);
  };
}

function getLangSnapshot(): Language {
  const saved = localStorage.getItem("portfolio_lang");
  return saved === "en" ? "en" : "id";
}

function getLangServerSnapshot(): Language {
  return "id";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(
    subscribeLang,
    getLangSnapshot,
    getLangServerSnapshot
  );

  const setLang = (newLang: Language) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio_lang", newLang);
      window.dispatchEvent(new Event("portfolio_lang_change"));
    }
  };

  const t = (key: string): string => {
    const dict = translations[lang] || translations.id;
    return (dict as Record<string, string>)[key] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useLanguage() {
  return useContext(I18nContext);
}
