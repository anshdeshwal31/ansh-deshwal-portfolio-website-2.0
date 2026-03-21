import Image from "next/image";

const skills = [
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Prisma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "Kubernetes",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
  },
  {
    name: "Prometheus",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg",
  },
  {
    name: "Grafana",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg",
  },
  {
    name: "Helm",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/helm/helm-original.svg",
  },
  {
    name: "LangChain",
    icon: "/skills/langchain.svg",
  },
  {
    name: "n8n",
    icon: "/skills/n8n.png",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
];

const marqueeSkills = [...skills, ...skills];

const projects = [
  {
    name: "Aurora Commerce Dashboard",
    description:
      "A modern analytics dashboard for tracking orders, revenue, and retention with clear visual insights.",
    projectUrl: "https://example.com/project-aurora",
    skills: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
  },
  {
    name: "Pulse AI Workflow Builder",
    description:
      "A workflow automation interface for building AI pipelines and connecting external APIs visually.",
    projectUrl: "https://example.com/project-pulse",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "LangChain", "n8n"],
  },
  {
    name: "Nimbus Infra Monitor",
    description:
      "Cloud infrastructure monitoring portal with service health, alerting, and deployment observability.",
    projectUrl: "https://example.com/project-nimbus",
    skills: ["AWS", "Docker", "Kubernetes", "Prometheus", "Grafana", "Helm"],
  },
];

const aboutHighlights = [
  {
    title: "Full-Stack Builder",
    desc: "End-to-end delivery from pixel-perfect UI to scalable APIs, databases, and cloud infra.",
  },
  {
    title: "Creative Coder",
    desc: "Playful interfaces, smooth micro-interactions, and illustration-first design thinking.",
  },
  {
    title: "DevOps & Cloud",
    desc: "Docker, Kubernetes, AWS — shipping reliable, observable systems with CI/CD confidence.",
  },
  {
    title: "AI & Automation",
    desc: "Building intelligent workflows with LangChain, n8n, and custom AI-powered tooling.",
  },
];

const socialLinks = [
  { name: "GitHub", url: "https://github.com/ansh" },
  { name: "LinkedIn", url: "https://linkedin.com/in/ansh" },
  { name: "Twitter / X", url: "https://x.com/ansh" },
  { name: "Email", url: "mailto:hello@ansh.dev" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#d4c0f6] text-[#1b1437]">
      <section className="mx-auto max-w-480 border-x border-[#2f2358]">
        <header className="h-18 border-b border-[#2f2358] px-6 lg:px-14">
          <nav className="mx-auto flex h-full max-w-340 items-center justify-between">
            <h1 className="text-4xl font-black leading-none tracking-tight">ANSH</h1>
            <ul className="hidden items-center gap-9 text-[26px] font-semibold md:flex">
              <li><a href="#projects" className="cursor-pointer hover:underline">Projects</a></li>
              <li><a href="#about" className="cursor-pointer hover:underline">About</a></li>
              <li><a href="#contact" className="cursor-pointer hover:underline">Contact</a></li>
              <li>
                <button className="rounded-full border-2 border-[#2f2358] px-6 py-1.5 text-[24px] leading-none transition-colors hover:bg-[#22163f] hover:text-white">
                  Resume
                </button>
              </li>
            </ul>
          </nav>
        </header>

        <div className="grid min-h-136 border-b border-[#2f2358] lg:grid-cols-2">
          <div className="flex items-center justify-center border-r border-[#2f2358] bg-[radial-gradient(circle_at_35%_18%,#efe6ff_0%,#cfbaf3_45%,#c5aeec_100%)] px-7 py-10 lg:px-14">
            <div className="w-full max-w-136">
              <h2 className="text-[88px] font-black leading-[0.86] tracking-tight md:text-[118px]">
                ANSH
                <br />
                DESHWAL
              </h2>
              <p className="mt-4 max-w-124 text-[28px] leading-tight">
                Software Developer &amp; Creative Coder.
                <br />
                Building playful web experiences.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button className="rounded-full bg-[#22163f] px-8 py-2.5 text-[23px] font-bold text-white">
                  VIEW WORK
                </button>
                <button className="rounded-full border-2 border-[#2f2358] px-8 py-2.5 text-[23px] font-bold">
                  GET IN TOUCH
                </button>
              </div>
            </div>
          </div>

          <div className="relative min-h-105 bg-[radial-gradient(circle_at_36%_20%,#d7caf8_0%,#aa95dc_45%,#8e78c6_100%)]">
            <Image
              src="/human/hero_section.png"
              alt="Illustration of developer"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="skills-marquee relative left-1/2 w-screen -translate-x-1/2 border-y border-[#2f2358] bg-[linear-gradient(135deg,#a88dde_0%,#baa3ea_100%)] py-4">
        <div className="skills-marquee-track">
          {marqueeSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex shrink-0 flex-row items-center gap-3 px-6 text-[26px] font-semibold whitespace-nowrap"
            >
              <img src={skill.icon} alt={skill.name} className="h-9 w-9 object-contain" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-480 border-x border-b border-[#2f2358] bg-[radial-gradient(circle_at_20%_15%,#efe7ff_0%,#d8c6f8_48%,#cfbaf3_100%)] px-6 py-10 lg:px-14"
      >
        <div className="mx-auto max-w-340">
          <h3 className="text-[56px] font-black tracking-tight">PROJECTS</h3>
          <p className="mt-2 max-w-208 text-[24px] leading-tight">
            Selected builds and experiments. Dummy data for now — real project data can be plugged in later.
          </p>

          <div className="mt-8 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-3xl border-2 border-[#2f2358] bg-[#d6c3f6] p-4 shadow-[0_6px_0_0_#2f2358]"
              >
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <div className="flex h-44 items-center justify-center rounded-2xl border-2 border-dashed border-[#2f2358] bg-[#c3aceb] text-center text-[22px] font-bold uppercase tracking-wide text-[#2f2358] transition-transform duration-200 group-hover:scale-[1.01]">
                    assets required
                  </div>
                </a>

                <h4 className="mt-4 text-[30px] font-black leading-tight">{project.name}</h4>
                <p className="mt-2 text-[20px] leading-snug">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.skills.map((skillName) => (
                    <span
                      key={`${project.name}-${skillName}`}
                      className="rounded-full border-2 border-[#2f2358] bg-[#ede4ff] px-3 py-1 text-[16px] font-semibold"
                    >
                      {skillName}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section
        id="about"
        className="mx-auto max-w-480 border-x border-b border-[#2f2358] bg-[radial-gradient(circle_at_80%_8%,#f0e8ff_0%,#dccbf8_45%,#cfbaf3_100%)]"
      >
        <div className="mx-auto max-w-340 px-6 py-12 lg:px-14">
          <p className="text-[20px] font-bold uppercase tracking-wider text-[#3e2b67]">About</p>
          <h3 className="mt-2 text-[56px] font-black leading-[0.9] tracking-tight">
            WHO AM I?
          </h3>

          <div className="mt-8 grid items-start gap-8 lg:grid-cols-5">
            {/* illustration */}
            <div className="relative aspect-square overflow-hidden rounded-3xl border-2 border-[#2f2358] bg-[#cdb5f2] shadow-[0_6px_0_0_#2f2358] lg:col-span-2">
              <Image
                src="/human/About_me.png"
                alt="About me illustration"
                fill
                className="object-cover"
              />
            </div>

            {/* content */}
            <div className="lg:col-span-3">
              <p className="text-[22px] leading-relaxed">
                Hey! I&apos;m <strong>Ansh</strong> — a software developer who obsesses over
                building things that feel <em>alive</em>. I work across the entire stack: from
                crafting expressive, pixel-perfect interfaces to wiring scalable backends,
                cloud infrastructure, and AI-powered automation.
              </p>
              <p className="mt-4 text-[22px] leading-relaxed">
                My sweet spot is blending solid engineering with creative design thinking —
                every product I ship should feel both <strong>useful</strong> and <strong>memorable</strong>.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {aboutHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border-2 border-[#2f2358] bg-[#efe6ff] px-5 py-4 shadow-[0_4px_0_0_#2f2358]"
                  >
                    <p className="text-[20px] font-black tracking-tight">{item.title}</p>
                    <p className="mt-1 text-[17px] leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT / FOOTER ─── */}
      <section
        id="contact"
        className="mx-auto max-w-480 border-x border-b border-[#2f2358] bg-[radial-gradient(circle_at_30%_80%,#c6aef0_0%,#a88dde_48%,#9578cc_100%)]"
      >
        <div className="mx-auto grid max-w-340 gap-8 px-6 py-12 lg:grid-cols-2 lg:px-14">
          {/* left — CTA + socials */}
          <div className="flex flex-col justify-center">
            <p className="text-[20px] font-bold uppercase tracking-wider text-[#efe6ff]">Contact</p>
            <h3 className="mt-2 text-[56px] font-black leading-[0.9] tracking-tight text-white">
              LET&apos;S BUILD
              <br />
              SOMETHING
              <br />
              TOGETHER.
            </h3>
            <p className="mt-4 max-w-96 text-[21px] leading-snug text-[#e8ddf8]">
              Got a project idea, a role to discuss, or just want to say hi?
              Drop me a line — I don&apos;t bite.
            </p>

            <a
              href="mailto:hello@ansh.dev"
              className="mt-6 inline-flex w-fit rounded-full bg-[#22163f] px-8 py-3 text-[22px] font-bold text-white transition-transform hover:scale-105"
            >
              SAY HELLO →
            </a>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border-2 border-[#efe6ff]/40 px-5 py-2 text-[17px] font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* right — illustration */}
          <div className="relative aspect-square overflow-hidden rounded-3xl border-2 border-[#2f2358] bg-[#b89ce0] shadow-[0_6px_0_0_#2f2358]">
            <Image
              src="/human/contact.png"
              alt="Contact illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="mx-auto max-w-480 border-x border-b border-[#2f2358] bg-[#22163f] text-[#cdb5f2]">
        <div className="mx-auto flex max-w-340 flex-col items-center gap-6 px-6 py-10 md:flex-row md:justify-between lg:px-14">
          <div>
            <h4 className="text-3xl font-black tracking-tight text-white">ANSH</h4>
            <p className="mt-1 text-[16px]">Software Developer &amp; Creative Coder</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-[16px] font-semibold">
            <a href="#projects" className="transition-colors hover:text-white">Projects</a>
            <a href="#about" className="transition-colors hover:text-white">About</a>
            <a href="#contact" className="transition-colors hover:text-white">Contact</a>
          </div>

          <div className="flex gap-4 text-[15px]">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-[#3d2a6b] py-5 text-center text-[14px] text-[#8b73b8]">
          © {new Date().getFullYear()} Ansh Deshwal. Crafted with care.
        </div>
      </footer>
    </main>
  );
}
