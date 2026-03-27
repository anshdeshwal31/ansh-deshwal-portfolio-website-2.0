"use client";

import Image from "next/image";
import PillNav from "./components/PillNav";
import WhatsAppWidget from "./components/WhatsAppWidget";

/* ─── NAV ITEMS ─── */
const navItems = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certs", href: "#certifications" },
  { label: "Resume", href: "#resume" },
  { label: "Achievements", href: "#achievements" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/* ─── SKILLS DATA ─── */
const allSkills = [
  { name: "C++", icon: "https://icon.icepanel.io/Technology/svg/C%2B%2B-%28CPlusPlus%29.svg", category: "Languages" },
  { name: "TypeScript", icon: "https://icon.icepanel.io/Technology/svg/TypeScript.svg", category: "Languages" },
  { name: "SQL", icon: "https://icon.icepanel.io/Technology/svg/MySQL.svg", category: "Languages" },
  { name: "Next.js", icon: "https://icon.icepanel.io/Technology/svg/Next.js.svg", category: "Frameworks" },
  { name: "React.js", icon: "https://icon.icepanel.io/Technology/svg/React.svg", category: "Frameworks" },
  { name: "Express.js", icon: "https://icon.icepanel.io/Technology/svg/Express.svg", category: "Frameworks" },
  { name: "Node.js", icon: "https://icon.icepanel.io/Technology/svg/Node.js.svg", category: "Frameworks" },
  { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg", category: "Frameworks" },
  { name: "Tailwind CSS", icon: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg", category: "Frameworks" },
  { name: "shadcn/ui", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", category: "Frameworks" },
  { name: "AWS", icon: "https://icon.icepanel.io/Technology/svg/AWS.svg", category: "Cloud & DevOps" },
  { name: "Docker", icon: "https://icon.icepanel.io/Technology/svg/Docker.svg", category: "Cloud & DevOps" },
  { name: "Kubernetes", icon: "https://icon.icepanel.io/Technology/svg/Kubernetes.svg", category: "Cloud & DevOps" },
  { name: "CI/CD", icon: "https://icon.icepanel.io/Technology/svg/GitHub-Actions.svg", category: "Cloud & DevOps" },
  { name: "Prometheus", icon: "https://icon.icepanel.io/Technology/svg/Prometheus.svg", category: "Cloud & DevOps" },
  { name: "Grafana", icon: "https://icon.icepanel.io/Technology/svg/Grafana.svg", category: "Cloud & DevOps" },
  { name: "Helm", icon: "https://icon.icepanel.io/Technology/svg/Helm.svg", category: "Cloud & DevOps" },
  { name: "ArgoCD", icon: "https://icon.icepanel.io/Technology/svg/Argo-CD.svg", category: "Cloud & DevOps" },
  { name: "Kafka", icon: "https://icon.icepanel.io/Technology/svg/Apache-Kafka.svg", category: "Cloud & DevOps" },
  { name: "LangChain", icon: "/skills/langchain.svg", category: "AI & Data" },
  { name: "n8n", icon: "/skills/n8n.png", category: "AI & Data" },
  { name: "MongoDB", icon: "https://icon.icepanel.io/Technology/svg/MongoDB.svg", category: "Databases" },
  { name: "PostgreSQL", icon: "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg", category: "Databases" },
  { name: "Redis", icon: "https://icon.icepanel.io/Technology/svg/Redis.svg", category: "Databases" },
];

const coursework = ["DSA", "OOP", "OS", "Computer Networks", "Software Engineering", "DBMS"];

/* ─── PROJECTS DATA ─── */
const projects = [
  {
    name: "Briefly",
    techStack: "Next.js · ReactJS · LangChain · Gemini · PostgreSQL · NeonDB",
    date: "Jun 2025 – Jul 2025",
    description: "An AI-powered PDF summarization platform allowing users to upload and process documents, generating structured summaries with search, download, and organization features.",
    bullets: [
      "Integrated Google Generative AI via LangChain to produce context-aware summaries, reducing manual reading time by 70%.",
      "Designed a PostgreSQL (Neon) data model to persist user documents and summaries with user-level isolation.",
      "Optimized backend query performance through indexed searches, improving summary fetch time by 40%.",
    ],
    projectUrl: "https://briefly-drab.vercel.app/",
    githubUrl: "https://github.com/anshdeshwal31/Briefly",
    image: "/projects/briefly.png",
    skills: ["Next.js", "React.js", "LangChain", "PostgreSQL"],
  },
  {
    name: "QueryForge",
    techStack: "Python · TypeScript · Django · NextJS · FAISS · Framer Motion",
    date: "Apr 2025 – May 2025",
    description: "An AI-driven document Q/A system converting PDFs, DOCX, TXT, and Markdown files into searchable knowledge bases with real-time semantic querying.",
    bullets: [
      "Implemented document chunking, embedding generation, and semantic search using LangChain and FAISS.",
      "Built caching to avoid redundant embedding generation, improving query speed for repeated usage.",
      "Reduced processing cost and improved repeat-query latency by 50% via embedding-level caching.",
    ],
    projectUrl: "https://queryforge-frontend.onrender.com/",
    githubUrl: "https://github.com/anshdeshwal31/QueryForge",
    image: "/projects/queryforge.png",
    skills: ["Python", "TypeScript", "Next.js", "FAISS"],
  },
  {
    name: "Hospitrix",
    techStack: "ReactJS · ExpressJS · NodeJS · MongoDB · TailwindCSS · Razorpay",
    date: "Feb 2025 – Mar 2025",
    description: "A robust hospital management web app to streamline healthcare operations for patients, doctors, and administrators.",
    bullets: [
      "Engineered the frontend using React.js with reusable components, responsive layouts, and intuitive navigation.",
      "Built a secure backend with Node.js and Express.js, creating RESTful APIs for auth and scheduling.",
      "Integrated Razorpay payment gateway and JWT-based authentication and authorization.",
    ],
    projectUrl: "https://hospitrix-frontend.onrender.com/",
    githubUrl: "https://github.com/anshdeshwal31/hospitrix",
    image: "/projects/hospitrix.png",
    skills: ["React.js", "Node.js", "MongoDB", "Express.js"],
  },
];

/* ─── CERTIFICATIONS DATA ─── */
const certifications = [
  { name: "Data Structures and Algorithm", issuedBy: "Lovely Professional University (iamneo)", date: "Dec 2024", skillsLearned: ["DSA", "Problem Solving", "Algorithmic Thinking", "C++"], image: "/certifications/certificate1.png", driveLink: "https://drive.google.com/file/d/1RGlHtnjF3M8EkLoKx3DvffMSE2ecQKAy/view?usp=sharing" },
  { name: "Java Programming", issuedBy: "Lovely Professional University (iamneo)", date: "May 2025", skillsLearned: ["Java", "OOP", "Collections", "Multithreading"], image: "/certifications/certificate2.png", driveLink: "https://drive.google.com/file/d/1cCur8MMnBFB5aVmu3fZ7HYbmv35K4Q9p/view?usp=sharing" },
  { name: "Object Oriented Programming", issuedBy: "Lovely Professional University (iamneo)", date: "Dec 2024", skillsLearned: ["OOP", "Design Patterns", "Abstraction", "Polymorphism"], image: "/certifications/certificate3.png", driveLink: "https://drive.google.com/file/d/19ZBfi7WJq6kdi_KYUSAml4eM6OBy9Bbc/view?usp=sharing" },
];

/* ─── ACHIEVEMENTS DATA ─── */
const achievements = [
  { icon: "🏆", title: "500+ DSA Problems Solved", description: "Solved 500+ DSA problems on various coding platforms like LeetCode, GeeksForGeeks, and CodingNinjas.", date: "Mar 2026" },
  { icon: "🚀", title: "Smart India Hackathon — Finalist", description: "Developed an Ayurveda website in a 36-hour hackathon and reached the finals of Smart India Hackathon.", date: "Sept 2025" },
];

/* ─── ABOUT HIGHLIGHTS ─── */
const aboutHighlights = [
  { title: "Full-Stack Builder", desc: "End-to-end delivery from pixel-perfect UI to scalable APIs, databases, and cloud infra." },
  { title: "Creative Coder", desc: "Playful interfaces, smooth micro-interactions, and illustration-first design thinking." },
  { title: "DevOps & Cloud", desc: "Docker, Kubernetes, AWS — shipping reliable, observable systems with CI/CD confidence." },
  { title: "AI & Automation", desc: "Building intelligent workflows with LangChain, n8n, and custom AI-powered tooling." },
];

/* ─── SOCIAL LINKS ─── */
const socialLinks = [
  { name: "GitHub", url: "https://github.com/anshdeshwal31", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/anshdeshwal31/", icon: "linkedin" },
  { name: "Twitter / X", url: "https://x.com/marcus_313131", icon: "x" },
  { name: "Email", url: "mailto:anshdeshwal1234@gmail.com", icon: "email" },
];

/* ─── SVG ICONS ─── */
const GithubIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
);
const LinkedInIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);
const XIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const MailIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
);
const DownloadIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" /></svg>
);
const SocialIcon = ({ type, className }: { type: string; className?: string }) => {
  switch (type) {
    case "github": return <GithubIcon className={className} />;
    case "linkedin": return <LinkedInIcon className={className} />;
    case "x": return <XIcon className={className} />;
    case "email": return <MailIcon className={className} />;
    default: return null;
  }
};

/* ─── Skill categories with colors ─── */
const categoryMeta: Record<string, { color: string }> = {
  "Languages": { color: "#a78bfa" },
  "Frameworks": { color: "#f472b6" },
  "Cloud & DevOps": { color: "#60a5fa" },
  "AI & Data": { color: "#34d399" },
  "Databases": { color: "#fbbf24" },
};

export default function Home() {
  const categories = Object.keys(categoryMeta);

  return (
    <main className="min-h-screen bg-[#0a0118] text-white font-body">

      {/* ═══ PILL NAV ═══ */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 pointer-events-none">
        <div className="pointer-events-auto">
          <PillNav
            items={navItems}
            baseColor="rgba(12, 6, 30, 0.90)"
            pillColor="rgba(219, 39, 119, 0.30)"
            pillTextColor="#fce7f3"
            hoveredPillTextColor="#ffffff"
            ease="power3.out"
          />
        </div>
      </div>

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[92vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/human/hero_section.png" alt="" fill priority className="object-cover object-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0118]/30 via-[#0a0118]/60 to-[#0a0118]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0118]/70 via-transparent to-[#0a0118]/70" />
        </div>
        <div className="absolute top-20 left-[8%] h-80 w-80 rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute bottom-20 right-[8%] h-64 w-64 rounded-full bg-pink-600/20 blur-[100px]" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 lg:px-10">
          <div className="grid w-full gap-12 lg:grid-cols-[1fr_auto]">
            <div className="flex flex-col justify-center">
              <div className="animate-fade-in-up inline-flex w-fit items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-[15px] font-medium text-purple-300 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </div>
              <h2 className="animate-fade-in-up delay-100 mt-6 font-heading text-[80px] font-bold leading-[0.9] tracking-tight md:text-[110px] lg:text-[130px]">
                <span className="bg-gradient-to-br from-white via-purple-100 to-purple-300 bg-clip-text text-transparent">ANSH</span>
                <br />
                <span className="bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">DESHWAL</span>
              </h2>
              <p className="animate-fade-in-up delay-200 mt-5 text-[22px] font-semibold uppercase tracking-[0.15em] text-purple-300/70">
                Full Stack Developer &nbsp;·&nbsp; DevOps Engineer
              </p>
              <p className="animate-fade-in-up delay-300 mt-5 max-w-xl text-[19px] leading-relaxed text-white/55">
                I build end-to-end web products — from sleek, responsive frontends to
                scalable backends and cloud-native infrastructure. Passionate about
                shipping fast, learning faster, and making every product feel{" "}
                <strong className="text-white/90">effortlessly good.</strong>
              </p>
              <div className="animate-fade-in-up delay-400 mt-8 flex flex-wrap items-center gap-4">
                <a href="#projects" className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-9 py-3.5 text-[18px] font-bold text-white transition-all hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105">
                  VIEW WORK
                </a>
                <a href="#contact" className="rounded-full border-2 border-white/20 bg-white/5 px-9 py-3.5 text-[18px] font-bold text-white backdrop-blur-sm transition-all hover:border-purple-400/50 hover:bg-white/10 hover:scale-105">
                  GET IN TOUCH
                </a>
              </div>
            </div>
            <div className="animate-fade-in delay-500 hidden lg:flex items-center justify-center relative">
              <div className="animate-float relative">
                {/* Outer glow aura */}
                <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-purple-600/40 via-pink-500/20 to-transparent blur-3xl" />
                {/* Portrait frame */}
                <div className="relative w-[360px] h-[440px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/60">
                  <Image
                    src="/human/ansh2.png"
                    alt="Ansh Deshwal"
                    fill
                    priority
                    className="object-cover object-top"
                    style={{ filter: "brightness(1.05) contrast(1.05)" }}
                  />
                  {/* Edge blends — top, sides, bottom — to melt into dark bg */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0a0118]/30 via-transparent to-[#0a0118]/70" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a0118]/20 via-transparent to-[#0a0118]/20" />
                  {/* Bottom-left purple rim light */}
                  <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-purple-600/50 blur-3xl pointer-events-none" />
                  {/* Top-right pink rim light */}
                  <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-pink-500/30 blur-2xl pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SKILLS — Redesigned as icon grid ═══ */}
      <section id="skills" className="relative overflow-hidden py-16">
        <div className="absolute inset-0">
          <Image src="/bg/skills.png" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0118]/70 via-[#0a0118]/40 to-[#0a0118]/70" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <p className="section-label">What I Work With</p>
          <h3 className="section-heading">TECHNICAL SKILLS</h3>

          {/* Skill icon grid by category */}
          <div className="mt-12 space-y-10">
            {categories.map((cat) => {
              const catSkills = allSkills.filter((s) => s.category === cat);
              const accentColor = categoryMeta[cat].color;
              return (
                <div key={cat}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="h-3 w-3 rounded-full" style={{ background: accentColor }} />
                    <h4 className="font-heading text-[17px] font-semibold text-white/60">{cat}</h4>
                    <div className="h-px flex-1 bg-white/[0.06]" />
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                    {catSkills.map((skill) => (
                      <div
                        key={skill.name}
                        className="skill-tile group"
                        style={{ "--accent": accentColor } as React.CSSProperties}
                      >
                        <div className="relative h-10 w-10 mx-auto mb-2">
                          <img src={skill.icon} alt={skill.name} className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                        </div>
                        <span className="text-[13px] font-medium text-white/70 group-hover:text-white/95 transition-colors text-center leading-tight">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Coursework */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <h4 className="font-heading text-[17px] font-semibold text-white/60">Coursework</h4>
                <div className="h-px flex-1 bg-white/[0.06]" />
              </div>
              <div className="flex flex-wrap gap-2">
                {coursework.map((c) => (
                  <span key={c} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[14px] font-medium text-white/65 transition-all hover:border-rose-400/30 hover:bg-white/[0.08] hover:text-white/90">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROJECTS ═══ */}
      <section id="projects" className="relative overflow-hidden py-16">
        <div className="absolute inset-0">
          <Image src="/bg/projects.png" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0118]/60 via-[#0a0118]/40 to-[#0a0118]/60" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <p className="section-label">My Work</p>
          <h3 className="section-heading">PROJECTS</h3>
          <p className="mt-3 max-w-2xl text-[20px] text-white/45 leading-relaxed">
            Real-world full-stack applications I&apos;ve designed, built, and shipped.
          </p>

          <div className="mt-10 space-y-10">
            {projects.map((project, idx) => (
              <article key={project.name} className="glass-card group grid gap-0 lg:grid-cols-2 overflow-hidden">
                <a href={project.projectUrl} target="_blank" rel="noreferrer"
                  className={`relative block min-h-[300px] lg:min-h-[400px] ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image src={project.image} alt={project.name} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118]/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span className="rounded-full bg-purple-600/90 px-7 py-3 text-[16px] font-bold text-white backdrop-blur-md shadow-xl">View Live ↗</span>
                  </div>
                </a>
                <div className={`flex flex-col justify-center p-7 lg:p-9 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h4 className="font-heading text-[30px] font-bold tracking-tight text-white">{project.name}</h4>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-0.5 text-[13px] font-medium text-white/40">{project.date}</span>
                  </div>
                  <p className="mt-1 text-[15px] font-medium text-purple-300/50">{project.techStack}</p>
                  <p className="mt-4 text-[17px] leading-relaxed text-white/55">{project.description}</p>
                  <ul className="mt-4 space-y-2">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2.5 text-[15px] leading-snug text-white/45">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.skills.map((s) => (
                      <span key={`${project.name}-${s}`} className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-[14px] font-medium text-white/55">{s}</span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <a href={project.projectUrl} target="_blank" rel="noreferrer" className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-7 py-2.5 text-[15px] font-bold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">Live Demo ↗</a>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-2.5 text-[15px] font-bold text-white/75 transition-all hover:border-white/30 hover:bg-white/10 hover:scale-105"><GithubIcon className="h-4 w-4" /> GitHub</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CERTIFICATIONS ═══ */}
      <section id="certifications" className="relative overflow-hidden py-16">
        <div className="absolute inset-0">
          <Image src="/bg/certification.png" alt="" fill className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0118]/60 via-[#0a0118]/40 to-[#0a0118]/60" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <p className="section-label">Credentials</p>
          <h3 className="section-heading">CERTIFICATIONS</h3>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((cert) => (
              <article key={cert.name} className="glass-card flex flex-col p-5">
                <a href={cert.driveLink} target="_blank" rel="noreferrer" className="group relative block">
                  <div className="relative h-48 overflow-hidden rounded-xl border border-white/10 bg-white transition-transform duration-300 group-hover:scale-[1.02]">
                    <Image src={cert.image} alt={cert.name} fill className="object-contain p-2" />
                    <div className="absolute inset-0 flex items-center justify-center bg-[#0a0118]/0 opacity-0 transition-all duration-300 group-hover:bg-[#0a0118]/70 group-hover:opacity-100">
                      <span className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-2 text-[15px] font-bold text-white">View Certificate ↗</span>
                    </div>
                  </div>
                </a>
                <h4 className="mt-4 font-heading text-[20px] font-bold text-white/90">{cert.name}</h4>
                <div className="mt-2 space-y-1 text-[15px] text-white/45">
                  <p><span className="font-semibold text-purple-400/70">Issued by:</span> {cert.issuedBy}</p>
                  <p><span className="font-semibold text-purple-400/70">Completed:</span> {cert.date}</p>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {cert.skillsLearned.map((skill) => (
                    <span key={`${cert.name}-${skill}`} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[13px] font-medium text-white/50">{skill}</span>
                  ))}
                </div>
                <a href={cert.driveLink} target="_blank" rel="noreferrer" className="mt-4 block rounded-full bg-gradient-to-r from-purple-600/80 to-pink-600/80 py-2.5 text-center text-[15px] font-bold text-white transition-all hover:from-purple-600 hover:to-pink-600">View Certificate ↗</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RESUME ═══ */}
      <section id="resume" className="relative overflow-hidden py-16">
        <div className="absolute inset-0">
          <Image src="/bg/resume.png" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0118]/60 via-[#0a0118]/40 to-[#0a0118]/60" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center">
            <p className="section-label">My Resume</p>
            <h3 className="section-heading">RESUME</h3>
          </div>
          <div className="mt-10 flex flex-col items-center">
            <a href="/resume/resume.pdf" download className="group relative block max-w-2xl w-full">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-purple-600/25 to-pink-600/25 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white shadow-2xl transition-all duration-300 group-hover:border-white/25 group-hover:scale-[1.01]">
                <div className="relative flex aspect-[8.5/11] w-full items-center justify-center bg-gray-50">
                  <iframe src="/resume/resume.pdf#toolbar=0&navpanes=0" className="h-full w-full" title="Resume Preview" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-[#0a0118]/0 opacity-0 transition-all duration-500 group-hover:bg-[#0a0118]/60 group-hover:opacity-100">
                  <span className="flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3.5 text-[18px] font-bold text-white shadow-xl"><DownloadIcon /> Download Resume</span>
                </div>
              </div>
            </a>
            <a href="/resume/resume.pdf" download className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-4 text-[18px] font-bold text-white transition-all hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105">
              <DownloadIcon /> Download Resume (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* ═══ ACHIEVEMENTS ═══ */}
      <section id="achievements" className="relative overflow-hidden py-16">
        <div className="absolute inset-0">
          <Image src="/bg/achievements.png" alt="" fill className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0118]/60 via-[#0a0118]/40 to-[#0a0118]/60" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
          <p className="section-label">Milestones</p>
          <h3 className="section-heading">ACHIEVEMENTS</h3>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {achievements.map((item) => (
              <div key={item.title} className="glass-card group p-8">
                <div className="flex items-start gap-4">
                  <span className="text-5xl">{item.icon}</span>
                  <div>
                    <span className="inline-block rounded-full bg-purple-500/15 px-3 py-0.5 text-[13px] font-bold uppercase tracking-wider text-purple-300">{item.date}</span>
                    <h4 className="mt-2 font-heading text-[24px] font-bold leading-tight text-white/95">{item.title}</h4>
                  </div>
                </div>
                <p className="mt-4 text-[17px] leading-relaxed text-white/50">{item.description}</p>
                <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT — illustration as BG ═══ */}
      <section id="about" className="relative overflow-hidden py-16">
        <div className="absolute inset-0">
          <Image src="/human/About_me.png" alt="" fill className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0118]/70 via-[#0a0118]/50 to-[#0a0118]/70" />
        </div>
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-purple-600/8 blur-[150px]" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <p className="section-label">About</p>
          <h3 className="section-heading">WHO AM I?</h3>

          <div className="mt-10 max-w-3xl">
            <p className="text-[20px] leading-relaxed text-white/60">
              Hey! I&apos;m <strong className="text-white/90">Ansh</strong> — a software developer who obsesses over
              building things that feel <em>alive</em>. I work across the entire stack: from
              crafting expressive, pixel-perfect interfaces to wiring scalable backends,
              cloud infrastructure, and AI-powered automation.
            </p>
            <p className="mt-4 text-[20px] leading-relaxed text-white/60">
              My sweet spot is blending solid engineering with creative design thinking —
              every product I ship should feel both <strong className="text-white/90">useful</strong> and <strong className="text-white/90">memorable</strong>.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {aboutHighlights.map((item) => (
                <div key={item.title} className="glass-card p-5">
                  <p className="font-heading text-[18px] font-bold text-white/90">{item.title}</p>
                  <p className="mt-1 text-[15px] leading-snug text-white/50">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT — illustration as BG ═══ */}
      <section id="contact" className="relative overflow-hidden py-16">
        <div className="absolute inset-0">
          <Image src="/human/contact.png" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0118]/60 via-[#0a0118]/40 to-[#0a0118]/60" />
        </div>
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-pink-600/8 blur-[150px]" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <p className="section-label">Contact</p>
          <h3 className="font-heading mt-2 text-[56px] font-bold leading-[0.9] tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            LET&apos;S BUILD<br />SOMETHING<br />TOGETHER.
          </h3>
          <p className="mt-5 max-w-md text-[19px] leading-relaxed text-white/50">
            Got a project idea, a role to discuss, or just want to say hi? Drop me a line — I don&apos;t bite.
          </p>

          <a href="mailto:anshdeshwal1234@gmail.com"
            className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3.5 text-[19px] font-bold text-white transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25">
            SAY HELLO →
          </a>

          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.url} target="_blank" rel="noreferrer"
                className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-[16px] font-medium text-white/70 transition-all hover:border-white/25 hover:bg-white/[0.08] hover:text-white">
                <SocialIcon type={link.icon} className="h-5 w-5" />
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-white/[0.06] bg-[#050010]">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-8 md:flex-row md:justify-between lg:px-10">
          <div>
            <span className="font-heading text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ANSH.</span>
            <p className="mt-0.5 text-[14px] text-white/30">Software Developer &amp; Creative Coder</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-[14px] font-medium text-white/35">
            {["Skills", "Projects", "Certifications", "About", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="transition-colors hover:text-white">{l}</a>
            ))}
          </div>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.url} target="_blank" rel="noreferrer" className="text-white/30 transition-colors hover:text-white">
                <SocialIcon type={link.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-white/[0.04] py-4 text-center text-[13px] text-white/20">
          © {new Date().getFullYear()} Ansh Deshwal. Crafted with care.
        </div>
      </footer>
      {/* ═══ WHATSAPP WIDGET ═══ */}
      <WhatsAppWidget phone="919627660757" />
    </main>
  );
}
