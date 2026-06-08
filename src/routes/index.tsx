import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";

import {
  ArrowUpRight,
  ArrowRight,
  Folder,
  User,
  Briefcase,
  GraduationCap,
  Wrench,
  Mail,
  MapPin,
  Plus,
} from "lucide-react";
import heroPortraitAsset from "@/assets/hero-flowers.jpeg.asset.json";
import heroChicagoAsset from "@/assets/chicago-skyline.jpg.asset.json";
const heroPortrait = heroChicagoAsset.url;
const portrait = heroPortraitAsset.url;
import projectTransitSafe from "@/assets/project-transit-safe.jpg";
import projectLumina from "@/assets/project-lumina.jpg";
import projectTradespend from "@/assets/project-tradespend.jpg";
import projectMeddata from "@/assets/project-meddata.jpg";
import projectAmazon from "@/assets/project-amazon.jpg";
import projectSuperstore from "@/assets/project-superstore.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Prakshali Shah — Business Analytics & Software Builder" },
      {
        name: "description",
        content:
          "Portfolio of Prakshali Shah, M.S. Business Analytics — turning messy data into products people actually use.",
      },
      { property: "og:title", content: "Prakshali Shah — Portfolio" },
      {
        property: "og:description",
        content: "Business Analytics graduate & software builder.",
      },
    ],
  }),
});

/* ---------- Motion presets ---------- */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.06,
      ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
    },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.1, ease: "easeOut" } },
};

/* ---------- Reusable bits ---------- */
function Eyebrow({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 text-[13px] font-medium text-flame">
      <Icon className="h-3.5 w-3.5" strokeWidth={2} />
      <span className="tracking-tight">{label}</span>
    </div>
  );
}

function PlusCorners() {
  // decorative + marks at the corners (Noora signature)
  return (
    <>
      <Plus className="absolute -left-2 -top-2 h-4 w-4 text-current opacity-30" />
      <Plus className="absolute -right-2 -top-2 h-4 w-4 text-current opacity-30" />
      <Plus className="absolute -bottom-2 -left-2 h-4 w-4 text-current opacity-30" />
      <Plus className="absolute -bottom-2 -right-2 h-4 w-4 text-current opacity-30" />
    </>
  );
}

function Section({
  id,
  eyebrow,
  icon,
  light = false,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  icon?: React.ElementType;
  light?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative ${light ? "bg-cream text-ink" : "bg-ink text-cream light-leak"} ${className}`}
    >
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-24 sm:py-28 lg:grid-cols-[200px_1fr]">
        <div className="lg:pt-2">
          {eyebrow && icon && <Eyebrow icon={icon} label={eyebrow} />}
        </div>
        <div className="relative">{children}</div>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */
function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-ink text-cream">
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Experience />
      <Skills />
      <Education />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}

/* ===================== HERO ===================== */
function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-cream"
    >
      <motion.img
        src={heroPortrait}
        alt="Chicago skyline"
        initial={{ scale: 1.03, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/75" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(228,80,40,0.32),transparent_55%)]" />

      {/* Top bar */}
      <div className="relative z-10 border-b border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-6 py-2.5 text-[12px] tracking-wide text-white/80">
          <motion.span
            className="text-flame"
            animate={{ opacity: [1, 0.4, 1], scale: [1, 1.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            ●
          </motion.span>
          AVAILABLE FOR 2026 GRAD ROLES
          <span className="text-white/30">●</span>
          <a href="#contact" className="underline-offset-4 hover:underline">
            LEARN MORE
          </a>
        </div>
      </div>

      {/* Wordmark + nav */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-start justify-between px-6 pt-8 sm:pt-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-display text-[44px] font-semibold leading-none tracking-tight text-white/35 sm:text-[72px] lg:text-[96px]"
        >
          Prakshali<span className="text-white/20">®</span>
        </motion.div>
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="hidden gap-1 rounded-full border border-white/15 bg-white/[0.06] p-1 backdrop-blur-md md:flex"
        >
          {[
            { l: "About", h: "#about" },
            { l: "Projects", h: "#work" },
            { l: "Experience", h: "#experience" },
            { l: "Contact", h: "#contact" },
          ].map((n) => (
            <a
              key={n.l}
              href={n.h}
              className="rounded-full px-4 py-2 text-[13px] text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              {n.l}
            </a>
          ))}
        </motion.nav>
      </div>

      {/* Bottom-left tagline + CTA */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-end justify-between gap-10 px-6 pb-12 pt-32 sm:pb-16 lg:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="max-w-xl"
        >
          <h1 className="font-display text-[32px] font-semibold leading-[1.1] tracking-tight text-white sm:text-[44px]">
            M.S. Business Analytics. <br />
            Analyst, strategist, storyteller. <br />
            <span className="text-white">
              Turning millions of data points into high-impact business decisions.
            </span>
          </h1>

          <a
            href="#work"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-medium text-ink transition hover:bg-white/90 hover:gap-3"
          >
            View my projects
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

/* ===================== MARQUEE ===================== */
function Marquee() {
  const items = ["PYTHON", "SQL", "TABLEAU", "POWER BI", "DOCKER", "FASTAPI", "PANDAS", "REACT", "AIRFLOW"];
  const row = [...items, ...items];
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-ink py-5">
      <div className="flex w-max gap-10 [animation:marquee_30s_linear_infinite]">
        {row.map((t, i) => (
          <span
            key={i}
            className="font-display text-[16px] font-semibold tracking-tight text-white/20 sm:text-[22px]"
          >
            {t} <span className="text-flame/60">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* ===================== ABOUT ===================== */
function About() {
  return (
    <Section id="about" eyebrow="About" icon={User}>
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="font-display text-[40px] font-semibold leading-[1.05] tracking-tight text-white sm:text-[64px]"
      >
        A data professional who speaks business.{" "}
        <span className="text-white">
          Fluent in architecting automated pipelines, designing Power BI dashboards, and delivering actionable executive insights.
        </span>
      </motion.h2>


      <a
        href="#contact"
        className="mt-8 inline-flex items-center gap-2 text-flame hover:underline"
      >
        Get in touch <ArrowRight className="h-4 w-4" />
      </a>

      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="surface-glass premium-border relative overflow-hidden rounded-3xl p-8"
        >
          <p className="text-[12px] uppercase tracking-[0.2em] text-flame">
            Hello —
          </p>
          <p className="mt-6 font-display text-[22px] leading-snug text-white/90">
            I'm <span className="text-white">Prakshali</span>, a recent Business Analytics graduate based in Chicago. I specialize in bridging the gap between raw data and high-level strategy, turning millions of rows of tangled information into clear, compelling stories that cross-functional stakeholders can actually use.
          </p>
          <p className="mt-6 text-[15px] leading-relaxed text-white/65">
            Whether I'm building real-time tracking applications with Python, optimizing complex SQL databases, or designing dynamic Power BI scorecards, I love the craft of building scalable technical solutions. While I have a deep interest in market intelligence and the CPG sector, my analytical toolkit is built to drive growth across any industry.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          custom={1}
          whileHover={{ y: -6 }}
          className="group relative overflow-hidden rounded-3xl border border-white/10"
        >
          <img
            src={portrait}
            alt="Prakshali Shah portrait"
            className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6">
            <div>
              <p className="font-display text-[22px] font-semibold text-white">
                Prakshali Shah<span className="text-flame">®</span>
              </p>
              <p className="text-[13px] text-white/70">A portfolio, made human</p>
            </div>
            <ArrowUpRight className="h-5 w-5 text-white/70" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ===================== WORK ===================== */
function Work() {
  const projects = [
    {
      name: "Transit Safe",
      tag: "Real-Time · Web App",
      year: "2025",
      desc: "A real-time web app that tracks live Chicago Transit Authority (CTA) train locations and API data streams — replacing static schedules with low-latency, actionable arrival insights for commuters.",
      stack: ["Python", "FastAPI", "CTA API", "Render"],
      img: projectTransitSafe,
      href: "https://transit-safe-cta.onrender.com/",
    },
    {
      name: "Lumina AI",
      tag: "AI · FinTech",
      year: "2026",
      desc: "An AI-driven financial optimization platform that aggregates external financial APIs and runs a matching algorithm over complex variable reward structures to maximize credit card returns across simulated spending profiles.",
      stack: ["Python", "Data Pipelines", "Financial APIs", "ML"],
      img: projectLumina,
      href: "https://preview--lumina-ai-card.lovable.app/",
      wip: true,
    },
    {
      name: "TradeSpend AI Optimizer",
      tag: "Retail Analytics",
      year: "2026",
      desc: "An interactive Streamlit app that models trade-promotion ROI for CPG and grocery retail — scaling cross-category basket affinity and category dynamics into actionable investment models.",
      stack: ["Streamlit", "Python", "Pandas", "ROI Modeling"],
      img: projectTradespend,
      href: "https://tradespend-ai-optimizer.streamlit.app/",
    },
  ];

  const academic = [
    {
      name: "MedData Corp — Security Transformation",
      tag: "Healthcare · Strategy",
      year: "2025",
      desc: "A $1.65M security transformation roadmap protecting 10M+ users' PHI — tiered MFA, role-based data minimization, and a break-glass protocol returning 14.5× on risk prevention.",
      stack: ["HIPAA", "Risk Modeling", "Strategy"],
      img: projectMeddata,
      href: "https://drive.google.com/drive/folders/1v-u7vvHyvDqs7TmkL1gb0RGYDbeCF0YG",
    },
    {
      name: "Amazon Delivery Data Analysis",
      tag: "Logistics · EDA",
      year: "2025",
      desc: "Exploratory analysis of Amazon delivery operations — uncovering driver, route, and weather patterns that drive on-time performance and last-mile efficiency.",
      stack: ["Python", "Pandas", "Visualization"],
      img: projectAmazon,
      href: "https://drive.google.com/drive/folders/1Fr_v4lFWgIUJwQVneCp849FZDCG58gR7",
    },
    {
      name: "Superstore Sales Analytics",
      tag: "Retail · BI",
      year: "2025",
      desc: "End-to-end analytics on the Superstore dataset — segmentation, profitability and category dynamics surfaced through interactive dashboards.",
      stack: ["Tableau", "SQL", "Excel"],
      img: projectSuperstore,
      href: "https://drive.google.com/drive/folders/1wCG3UYNSJLHp_M7uTP6gL3P-B_-0NkUC",
    },
  ];

  const renderList = (
    items: typeof projects,
    offset = 0,
  ) => (
    <div className="border-t border-white/12">
      {items.map((p, i) => {
        const n = offset + i + 1;
        return (
          <motion.a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="group relative block border-b border-white/12"
          >
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-7 sm:gap-8 sm:py-10 lg:py-14">
              <span className="font-mono text-[11px] tracking-[0.25em] text-white/35 sm:text-[12px]">
                / {n.toString().padStart(2, "0")}
              </span>

              <div className="min-w-0">
                <h3 className="font-display text-[28px] font-semibold leading-[0.95] tracking-tight text-white transition-colors duration-300 group-hover:text-flame sm:text-[52px] lg:text-[72px]">
                  {p.name}
                  {(p as any).wip && (
                    <span className="ml-3 inline-block translate-y-[-0.4em] rounded-full bg-flame/15 px-3 py-1 align-top text-[10px] font-medium uppercase tracking-[0.2em] text-flame">
                      WIP
                    </span>
                  )}
                </h3>
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.22em] text-white/45 sm:text-[12px]">
                  <span>{p.tag}</span>
                  <span className="h-1 w-1 rounded-full bg-white/30" />
                  <span>{p.year}</span>
                  <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:inline-block" />
                  <span className="hidden text-white/55 sm:inline">
                    {p.stack.join(" · ")}
                  </span>
                </div>
                <p className="mt-4 max-w-2xl text-[13px] leading-relaxed text-white/55 sm:text-[14px]">
                  {p.desc}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-500 group-hover:border-flame group-hover:bg-flame group-hover:text-white sm:h-14 sm:w-14">
                <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
            </div>
          </motion.a>
        );
      })}
    </div>
  );

  return (
    <Section id="work" eyebrow="Index — Selected work" icon={Folder}>
      {/* Header */}
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="font-display text-[64px] font-semibold leading-[0.9] tracking-tight sm:text-[120px]"
        >
          Selected
          <br />
          <span className="italic text-flame">work,</span> 2025—26.
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={1}
          className="flex max-w-sm flex-col gap-4"
        >
          <p className="text-[15px] leading-relaxed text-white/65">
            A working index of live builds and academic deep-dives — where data,
            design and a little engineering had to meet in the middle.
          </p>
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-white/40">
            <span className="h-px w-10 bg-white/30" />
            <span>{projects.length + academic.length} entries</span>
          </div>
        </motion.div>
      </div>

      {/* Live projects */}
      <div className="mt-20">{renderList(projects)}</div>

      {/* Academic header */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="mt-24 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-flame">
            ✦ Coursework — Roosevelt M.S.
          </p>
          <h3 className="mt-3 font-display text-[36px] font-semibold leading-[0.95] tracking-tight sm:text-[60px]">
            Academic <span className="italic text-white/60">notebook.</span>
          </h3>
        </div>
        <p className="max-w-xs text-[13px] text-white/55">
          Capstones, strategy decks and analytics rebuilds from the program.
        </p>
      </motion.div>

      <div className="mt-10">{renderList(academic, projects.length)}</div>
    </Section>
  );
}




/* ===================== EXPERIENCE ===================== */
function Experience() {
  const jobs = [
    {
      company: "Roosevelt University",
      role: "Graduate Assistant",
      period: "2025 — 2026",
      note: "Translated complex academic research into interactive data visualizations for 500+ university stakeholders and instructed hands-on analytics workshops.",
    },
    {
      company: "Numerator",
      role: "Client Service Associate I & II",
      period: "2022 — 2024",
      note: "Guided category management strategies for a $10M+ CPG portfolio and designed dynamic Power BI dashboards using syndicated panel data.",
    },
    {
      company: "Numerator",
      role: "Data Analyst & Data Quality Lead",
      period: "2020 — 2022",
      note: "Guaranteed reporting precision across massive consumer datasets by deploying automated Python anomaly detection algorithms and optimizing SQL pipelines.",
    },
  ];

  return (
    <Section id="experience" eyebrow="Experience" icon={Briefcase}>
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="font-display text-[44px] font-semibold leading-[0.98] tracking-tight sm:text-[80px]"
      >
        Where I've worked.
      </motion.h2>

      <div className="mt-12 border-t border-white/10">
        {jobs.map((j, i) => (
          <motion.div
            key={j.company}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="group grid gap-4 border-b border-white/10 py-8 transition hover:bg-white/[0.02] sm:grid-cols-[1.4fr_2fr_auto] sm:items-baseline sm:gap-10"
          >
            <div>
              <p className="font-display text-[26px] font-semibold leading-tight text-white">
                {j.company}
              </p>
              <p className="mt-1 text-[12px] uppercase tracking-[0.18em] text-white/50">
                {j.role}
              </p>
            </div>
            <p className="text-[15px] leading-relaxed text-white/65">{j.note}</p>
            <p className="text-[12px] uppercase tracking-[0.18em] text-white/50 sm:text-right">
              {j.period}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ===================== SKILLS ===================== */
function Skills() {
  const stack = [
    { name: "SQL", abbr: "SQL", sub: "Data Extraction & Structuring" },
    { name: "Power BI", abbr: "BI", sub: "Dashboards & Scorecards — requested by Kraft Heinz and Essity" },
    { name: "Numerator", abbr: "Nu", sub: "Syndicated Panel Data (Circana / Nielsen)" },
    { name: "Advanced Excel", abbr: "Ex", sub: "VBA Macros & Modeling" },
    { name: "Python", abbr: "Py", sub: "Pipeline Automation & ML" },
  ];
  return (
    <Section eyebrow="Toolbox" icon={Wrench}>
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="font-display text-[44px] font-semibold leading-[0.98] tracking-tight sm:text-[72px]"
      >
        The stack. <span className="text-faded">Tools I reach for daily.</span>
      </motion.h2>
      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-5">
        {stack.map((s, i) => (
          <motion.div
            key={s.name}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="group surface-glass premium-border flex flex-col items-start gap-4 rounded-2xl p-5"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-flame text-white font-display text-[15px] font-semibold shadow-[0_10px_30px_-10px_rgba(228,80,40,0.6)]">
              {s.abbr}
            </div>
            <div>
              <p className="font-display text-[18px] font-semibold text-white">
                {s.name}
              </p>
              <p className="text-[12px] leading-snug text-white/55">{s.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ===================== EDUCATION ===================== */
function Education() {
  const degrees = [
    {
      school: "Roosevelt University",
      title: "M.S. in Business Analytics",
      sub: "Chicago, IL · Graduated May 2026 · 4.0 GPA",
      tags: ["Forecasting", "Data Viz", "Predictive Analytics", "Market Intelligence"],
    },
    {
      school: "Parul University",
      title: "B.Tech in Computer Science & Engineering",
      sub: "India · April 2020 · 8.0/10.0 GPA",
      tags: ["Data Pipelines", "SQL", "Python", "System Architecture"],
    },
  ];
  return (
    <Section eyebrow="Education" icon={GraduationCap}>
      <div className="grid gap-6">
        {degrees.map((d, i) => (
          <motion.div
            key={d.title}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="surface-glass premium-border relative overflow-hidden rounded-3xl p-8 sm:p-12"
          >
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-flame/30 blur-3xl" />
            <div className="relative flex flex-wrap items-start justify-between gap-6">
              <div>
                <p className="text-[12px] uppercase tracking-[0.2em] text-flame">
                  {d.school}
                </p>
                <h3 className="mt-3 font-display text-[28px] font-semibold leading-tight text-white sm:text-[40px]">
                  {d.title}
                </h3>
                <p className="mt-2 text-[15px] text-white/60">{d.sub}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {d.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/75"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ===================== STATS ===================== */
function Stats() {
  const stats = [
    { v: "21M+", l: "Rows analyzed" },
    { v: "2.4×", l: "Activation lift shipped" },
    { v: "21%", l: "Avg. metric impact" },
  ];
  return (
    <section className="border-y border-white/10 bg-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-20 sm:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.l}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="font-display text-[64px] font-semibold leading-none text-white sm:text-[88px]">
              {s.v}
            </p>
            <p className="mt-3 text-[13px] uppercase tracking-[0.2em] text-white/55">
              {s.l}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


/* ===================== CONTACT ===================== */
function Contact() {
  return (
    <section id="contact" className="relative bg-ink text-cream light-leak">
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-24 sm:py-32 lg:grid-cols-[200px_1fr]">
        <div className="lg:pt-2">
          <Eyebrow icon={Mail} label="Contact" />
        </div>
        <div>
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="font-display text-[44px] font-semibold leading-[0.98] tracking-tight sm:text-[88px]"
          >
            Let's build <br /> something good.
          </motion.h2>
          <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-white/65">
            Whether it's a role, a collaboration, or a question about a project —
            my inbox is open.
          </p>


          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Email", value: "prakshalis1@gmail.com", href: "mailto:prakshalis1@gmail.com" },
              { label: "LinkedIn", value: "in/prakshali-shah", href: "https://www.linkedin.com/in/prakshali-shah/" },
              { label: "GitHub", value: "@PrakshaliShah", href: "https://github.com/PrakshaliShah" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-flame/50 hover:bg-white/[0.06]"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">
                    {c.label}
                  </p>
                  <p className="mt-1 font-display text-[16px]">{c.value}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-white/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-flame" />
              </a>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] text-white/50">
            <MapPin className="h-3.5 w-3.5" /> Chicago, IL · Open to remote &amp; hybrid
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== FOOTER ===================== */
function Footer() {
  return (
    <footer className="relative bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-[56px] font-semibold leading-none text-white">
              Prakshali<span className="text-flame">®</span>
            </p>
            <p className="mt-3 max-w-xs text-[13px] text-white/55">Great begins here.</p>
            <p className="mt-10 text-[12px] uppercase tracking-[0.2em] text-white/45">
              [ Email ]
            </p>
            <p className="mt-1 text-[15px] text-white">prakshalis1@gmail.com</p>
            <p className="mt-6 text-[12px] uppercase tracking-[0.2em] text-white/45">
              [ Location ]
            </p>
            <p className="mt-1 text-[15px] text-white">Chicago, IL</p>
          </div>
          {[
            {
              t: "Navigation",
              l: [
                { label: "Home", href: "#top" },
                { label: "About", href: "#about" },
                { label: "Projects", href: "#work" },
                { label: "Experience", href: "#experience" },
                { label: "Contact", href: "#contact" },
              ],
            },
            {
              t: "Social",
              l: [
                { label: "LinkedIn", href: "https://www.linkedin.com/in/prakshali-shah/" },
                { label: "GitHub", href: "https://github.com/PrakshaliShah" },
              ],
            },
            {
              t: "Resources",
              l: [
                { label: "Resume", href: "https://drive.google.com/drive/folders/1uXvVIeIjXzRBCDkrSVKyEm-W-0LA6iEK" },
              ],
            },
          ].map((c) => (
            <div key={c.t}>
              <p className="text-[12px] uppercase tracking-[0.2em] text-white/45">
                {c.t}
              </p>
              <ul className="mt-4 space-y-2.5">
                {c.l.map((x) => (
                  <li key={x.label}>
                    <a
                      href={x.href}
                      target={x.href.startsWith("http") ? "_blank" : undefined}
                      rel={x.href.startsWith("http") ? "noreferrer" : undefined}
                      className="text-[15px] text-white/85 hover:text-flame"
                    >
                      {x.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-[12px] text-white/50">
          <p>© 2026 Prakshali Shah. All rights reserved.</p>
          <p>Built with care.</p>
        </div>
      </div>
    </footer>
  );
}
