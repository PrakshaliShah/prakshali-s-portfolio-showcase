import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Folder,
  User,
  Briefcase,
  GraduationCap,
  Wrench,
  MessageSquare,
  Mail,
  MapPin,
  Sparkles,
  Compass,
  Zap,
  Headphones,
  Tag,
  Plus,
} from "lucide-react";
import heroPortrait from "@/assets/hero-chicago.jpg";
import portrait from "@/assets/portrait-elegant.jpg";
import projectTransit from "@/assets/project-transit.jpg";
import projectOpenly from "@/assets/project-openly.jpg";
import projectNumerator from "@/assets/project-numerator.jpg";

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
      <Methodology />
      <Services />
      <Pricing />
      <Experience />
      <Skills />
      <Education />
      <Stats />
      <CTA />
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
        alt="Portrait of Prakshali Shah"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.85 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/90" />
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
            { l: "Work", h: "#work" },
            { l: "Services", h: "#services" },
            { l: "Pricing", h: "#pricing" },
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
            Not just another analyst. <br />
            Not just another portfolio. <br />
            <span className="text-white/55">
              Prakshali turns messy data into products people actually use.
            </span>
          </h1>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-medium text-ink transition hover:bg-white/90 hover:gap-3"
          >
            Book a meeting
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.a
          href="#work"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          whileHover={{ y: -6 }}
          className="hidden w-[300px] shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.05] p-3 backdrop-blur-md transition hover:border-white/30 lg:block"
        >
          <p className="px-2 pb-3 pt-1 font-display text-[28px] font-semibold leading-tight text-white">
            Projects <br /> made easy.
          </p>
          <img
            src={projectTransit}
            alt=""
            loading="lazy"
            className="aspect-square w-full rounded-xl object-cover"
          />
          <div className="flex items-center justify-between px-2 py-3">
            <div>
              <p className="text-[14px] font-medium text-white">
                Transit Safe<span className="text-flame">®</span>
              </p>
              <p className="text-[12px] text-white/60">A safer commute, by data</p>
            </div>
            <ArrowUpRight className="h-4 w-4 text-white/60" />
          </div>
        </motion.a>
      </div>
    </section>
  );
}

/* ===================== MARQUEE ===================== */
function Marquee() {
  const items = ["PYTHON", "SQL", "TABLEAU", "POWER BI", "DOCKER", "FASTAPI", "PANDAS", "REACT", "AIRFLOW"];
  const row = [...items, ...items];
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-ink py-10">
      <div className="flex w-max gap-16 [animation:marquee_30s_linear_infinite]">
        {row.map((t, i) => (
          <span
            key={i}
            className="font-display text-[36px] font-semibold tracking-tight text-white/15 sm:text-[56px]"
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
        className="font-display text-[40px] font-semibold leading-[1.05] tracking-tight sm:text-[64px]"
      >
        A builder who thinks in data.{" "}
        <span className="text-faded">
          Comfortable in a notebook, a Figma file, or a stand-up — wherever the
          decision has to get made.
        </span>
      </motion.h2>

      <a
        href="#contact"
        className="mt-8 inline-flex items-center gap-2 text-flame hover:underline"
      >
        More about me <ArrowRight className="h-4 w-4" />
      </a>

      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="surface-glass premium-border relative overflow-hidden rounded-3xl p-8"
        >
          <div className="flex gap-0.5 text-flame">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <p className="mt-6 font-display text-[20px] leading-snug text-white/90">
            "Working with Prakshali felt effortless. The dashboard wasn't just
            shipped — <em className="text-white">it was a tool the team actually used.</em>"
          </p>
          <div className="mt-8 flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-flame text-white text-[12px] font-semibold">
              AM
            </div>
            <div>
              <p className="text-[14px] font-medium text-white">Alice Miller</p>
              <p className="text-[12px] text-white/55">Insights Lead, Numerator</p>
            </div>
          </div>
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
      tag: "Data + Product",
      desc: "Real-time safety scoring for Chicago Transit routes.",
      img: projectTransit,
    },
    {
      name: "Openly",
      tag: "AI Startup",
      desc: "Founding analytics hire. Activation experiments that 2.4×'d signups.",
      img: projectOpenly,
    },
    {
      name: "Numerator",
      tag: "Consumer Insights",
      desc: "Behavioral signals across millions of CPG transactions.",
      img: projectNumerator,
    },
  ];

  return (
    <Section id="work" eyebrow="Work" icon={Folder}>
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="font-display text-[56px] font-semibold leading-[0.98] tracking-tight sm:text-[112px]"
      >
        Case Studies
      </motion.h2>
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        custom={1}
        className="mt-4 max-w-xl text-[17px] text-muted"
      >
        Featured work between ©2024–25. A short list of things I've shipped where
        data, design and engineering had to meet in the middle.
      </motion.p>

      <motion.a
        href="#contact"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={2}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-medium text-ink transition hover:bg-white/90"
      >
        Discover all projects
      </motion.a>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href="#"
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="group surface-glass premium-border relative overflow-hidden rounded-3xl p-3 transition hover:shadow-[0_30px_80px_-30px_rgba(228,80,40,0.45)]"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-md bg-black/55 px-2 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                {p.tag}
              </span>
            </div>
            <div className="flex items-center justify-between px-2 pb-2 pt-4">
              <div>
                <p className="font-display text-[20px] font-semibold text-white">
                  {p.name}
                </p>
                <p className="mt-1 text-[13px] text-white/60">{p.desc}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-white/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-flame" />
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

/* ===================== METHODOLOGY ===================== */
function Methodology() {
  return (
    <Section eyebrow="Methodology" icon={Compass}>
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="font-display text-[36px] font-semibold leading-[1.05] tracking-tight sm:text-[56px]"
      >
        The best results don't come from guesswork.{" "}
        <span className="text-faded">They come from a proven process.</span>
      </motion.h2>
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={1}
        className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/65"
      >
        I start with research and questions, shape it into a clean data model,
        and ship dashboards or products that actually move the metric. Simple,
        effective, always tailored to the team.
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={2}
        className="mt-10 max-w-md divide-y divide-white/10"
      >
        {[
          { l: "Let's work together", h: "#contact" },
          { l: "Check my case studies", h: "#work" },
          { l: "Discover my methodology", h: "#services" },
        ].map((it) => (
          <a
            key={it.l}
            href={it.h}
            className="group flex items-center justify-between py-4 text-[15px] text-white/85 transition hover:text-white"
          >
            {it.l}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:text-flame" />
          </a>
        ))}
      </motion.div>
    </Section>
  );
}

/* ===================== SERVICES ===================== */
function Services() {
  const cols = [
    {
      title: "Expertise",
      items: ["Analytics", "ML", "Data Viz", "Product", "Storytelling"],
    },
    {
      title: "Fields",
      items: ["SaaS", "CPG", "Civic Tech", "E-commerce", "AI"],
    },
    {
      title: "Built with",
      items: ["Python", "SQL", "Tableau", "Power BI", "Docker"],
    },
  ];

  return (
    <Section id="services" eyebrow="Services" icon={Sparkles}>
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="font-display text-[36px] font-semibold leading-[1.05] tracking-tight sm:text-[56px]"
      >
        I'm a full-stack analyst — data, design, and a little engineering —{" "}
        <span className="text-faded">for ambitious teams.</span>
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={1}
        className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/65"
      >
        From the first SQL query to the dashboard your CEO opens on Monday — I
        cover the whole arc. Whether it's a one-off model or an embedded role,
        I bring craft to the chart.
      </motion.p>

      <div className="mt-16 grid gap-10 sm:grid-cols-3">
        {cols.map((c, i) => (
          <motion.div
            key={c.title}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <p className="text-[12px] uppercase tracking-[0.2em] text-flame">
              {c.title}
            </p>
            <ul className="mt-5 space-y-3 font-display text-[20px] text-white/90">
              {c.items.map((it) => (
                <li key={it} className="border-b border-white/10 pb-3">
                  {it}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ===================== PRICING / OFFERS ===================== */
function Pricing() {
  const cards = [
    {
      icon: Tag,
      title: "Flexible engagements",
      desc: "Clear packages for different stages of growth.",
      foot: "Starting from",
      val: "$2,500",
      progress: 35,
    },
    {
      icon: Headphones,
      title: "Direct collaboration",
      desc: "Quick communication and turnaround on feedback.",
      foot: "Response time",
      val: "Same day",
      progress: 80,
    },
    {
      icon: Zap,
      title: "Fast turnarounds",
      desc: "Days, not weeks. I keep projects moving.",
      foot: "Delivery",
      val: "24–36h",
      progress: 95,
    },
  ];

  return (
    <section
      id="pricing"
      className="relative bg-cream text-ink"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="grid gap-10 lg:grid-cols-[200px_1fr]">
          <div>
            <Eyebrow icon={Briefcase} label="Working with me" />
          </div>
          <div>
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="font-display text-[44px] font-semibold leading-[0.98] tracking-tight text-ink sm:text-[88px]"
            >
              Plans that fit <br /> your stage.
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="mt-6 max-w-xl text-[16px] leading-relaxed text-ink/65"
            >
              No vague quotes. No surprises. Three clear ways to work together,
              designed to match where you are and where you're going.
            </motion.p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="relative flex min-h-[360px] flex-col justify-between rounded-3xl border border-ink/10 bg-white p-7 shadow-[0_2px_0_rgba(0,0,0,0.04)] transition hover:shadow-[0_30px_60px_-30px_rgba(228,80,40,0.3)]"
            >
              <div>
                <div className="inline-flex items-center gap-2 rounded-md bg-flame/10 px-2 py-1 text-flame">
                  <c.icon className="h-3.5 w-3.5" />
                  <span className="text-[11px] font-medium uppercase tracking-wide">
                    {c.title}
                  </span>
                </div>
                <p className="mt-6 font-display text-[24px] leading-snug text-ink">
                  {c.desc}
                </p>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-wide text-ink/50">
                  {c.foot}
                </p>
                <p className="mt-1 font-display text-[34px] font-semibold text-ink">
                  {c.val}
                </p>
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${c.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full rounded-full bg-flame"
                  />
                </div>
                <div className="mt-2 flex justify-between text-[11px] text-ink/50">
                  <span>Start simple</span>
                  <span>Expand as you go</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== SHOWREEL ===================== */
function Showreel() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
        className="relative mx-auto h-[60vh] max-w-7xl"
      >
        <img
          src={projectTransit}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(228,80,40,0.35),transparent_55%)]" />
        <div className="relative z-10 grid h-full place-items-center text-center">
          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-medium text-ink shadow-[0_20px_60px_-10px_rgba(228,80,40,0.5)]"
            >
              <Play className="h-4 w-4 fill-ink" />
              Watch showreel
            </motion.button>
            <p className="mt-4 text-[13px] uppercase tracking-[0.2em] text-white/65">
              See my work / 2022–25
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ===================== EXPERIENCE ===================== */
function Experience() {
  const jobs = [
    {
      company: "Numerator",
      role: "Consumer Insights · Analyst",
      period: "2024 — 2025",
      note: "Surfaced behavioral signals across millions of CPG transactions for Fortune-500 brand teams.",
    },
    {
      company: "Roosevelt University",
      role: "Graduate Assistant",
      period: "2024 — Now",
      note: "TA for analytics & data viz coursework; supporting faculty research on forecasting.",
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
    { name: "Python", abbr: "Py" },
    { name: "SQL", abbr: "SQL" },
    { name: "Tableau", abbr: "Tb" },
    { name: "Power BI", abbr: "BI" },
    { name: "Docker", abbr: "Dk" },
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
              <p className="text-[12px] text-white/55">Daily driver</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ===================== EDUCATION ===================== */
function Education() {
  return (
    <Section eyebrow="Education" icon={GraduationCap}>
      <motion.div
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
              Roosevelt University
            </p>
            <h3 className="mt-3 font-display text-[32px] font-semibold leading-tight text-white sm:text-[44px]">
              M.S. in Business Analytics
            </h3>
            <p className="mt-2 text-[15px] text-white/60">
              Chicago, IL · Expected May 2026
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Statistics", "ML", "Data Viz", "Forecasting"].map((t) => (
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
    </Section>
  );
}

/* ===================== TESTIMONIALS ===================== */
function Testimonials() {
  return (
    <Section eyebrow="Testimonials" icon={MessageSquare}>
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="font-display text-[40px] font-semibold leading-[1.02] tracking-tight sm:text-[64px]"
      >
        The work speaks loudest{" "}
        <span className="text-faded">— but here's what people say about it.</span>
      </motion.h2>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.6fr]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="surface-glass premium-border relative rounded-3xl p-8"
        >
          <PlusCorners />
          <p className="font-display text-[44px] font-semibold text-flame">4.9/5</p>
          <p className="mt-2 text-[13px] text-white/60">Average rating from teams</p>
          <div className="mt-6 flex -space-x-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-8 w-8 rounded-full border-2 border-ink bg-gradient-to-br from-flame/80 to-rose-700"
              />
            ))}
          </div>
          <p className="mt-3 text-[12px] text-white/55">Trusted by 30+ teammates</p>
          <button className="mt-8 w-full rounded-full bg-white px-5 py-3 text-[14px] font-medium text-ink hover:bg-white/90">
            Leave a review
          </button>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          custom={1}
          className="surface-glass premium-border rounded-3xl p-10"
        >
          <p className="text-[12px] uppercase tracking-[0.2em] text-white/50">01 / 04</p>
          <p className="mt-6 font-display text-[26px] leading-snug text-white sm:text-[32px]">
            "We worked with a few analysts before, but Prakshali just got it. The
            metrics finally feel aligned, sharper and way more us."
          </p>
          <div className="mt-10 flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-flame text-[12px] font-semibold text-white">
              FB
            </div>
            <div>
              <p className="text-[14px] font-medium text-white">Frankie Brooks</p>
              <p className="text-[12px] text-white/55">Co-founder at Peni</p>
            </div>
          </div>
        </motion.div>
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

/* ===================== CTA STRIP ===================== */
function CTA() {
  return (
    <section className="relative overflow-hidden bg-cream text-ink">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-ink/10 bg-white p-8 sm:p-12"
        >
          <div>
            <p className="text-[12px] uppercase tracking-[0.2em] text-flame">
              Ready when you are
            </p>
            <h3 className="mt-3 font-display text-[32px] font-semibold leading-tight text-ink sm:text-[44px]">
              Have a problem worth solving? <br /> I'm here to help.
            </h3>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[14px] font-medium text-cream transition hover:gap-3 hover:bg-ink/90"
          >
            Book a meeting
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ===================== FAQ ===================== */
function FAQ() {
  const items = [
    {
      q: "How long does a project take?",
      a: "Most engagements run 2–8 weeks depending on scope. A quick dashboard might take a week; a full data product is closer to two months.",
    },
    {
      q: "Can I update things myself?",
      a: "Yes — everything I build comes with documentation and is handed off so your team can own it.",
    },
    {
      q: "Do I need clean data to start?",
      a: "Nope. The first phase is almost always making sense of what you already have.",
    },
    {
      q: "Do you offer support after launch?",
      a: "Absolutely. I offer monthly retainers for iteration, monitoring, and new requests.",
    },
    {
      q: "What's your typical process?",
      a: "Discovery → data audit → modeling → dashboard or product → handoff. Always with weekly checkpoints.",
    },
    {
      q: "How do payments work?",
      a: "50% to start, 50% on delivery. Retainers are billed monthly upfront.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-cream text-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-24 sm:py-32 lg:grid-cols-[200px_1fr]">
        <div>
          <Eyebrow icon={MessageSquare} label="FAQ" />
          <p className="mt-10 max-w-[180px] text-[14px] font-medium text-ink">
            Not finding what you need?
          </p>
          <p className="mt-2 max-w-[200px] text-[13px] text-ink/55">
            Reach out anytime. Happy to answer any questions before you commit.
          </p>
        </div>
        <div>
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="font-display text-[36px] font-semibold leading-[1.05] tracking-tight text-ink sm:text-[56px]"
          >
            Before you start, here are some of{" "}
            <span className="text-ink/35">
              the things most clients want to know.
            </span>
          </motion.h2>

          <div className="mt-12 space-y-3">
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={it.q}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeUp}
                  className="overflow-hidden rounded-2xl border border-ink/10 bg-white"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  >
                    <span className="font-display text-[18px] font-medium text-ink">
                      {it.q}
                    </span>
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-cream">
                      {isOpen ? (
                        <Minus className="h-3.5 w-3.5" />
                      ) : (
                        <Plus className="h-3.5 w-3.5" />
                      )}
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-[15px] leading-relaxed text-ink/65">
                      {it.a}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
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
            Reach out today and you'll get a clear plan, honest advice, and a
            partner who cares about the outcome as much as you do.
          </p>

          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            onSubmit={(e) => e.preventDefault()}
            className="mt-12 max-w-2xl space-y-8"
          >
            {[
              { label: "Name *", placeholder: "Jane Foster" },
              { label: "E-mail *", placeholder: "jane@email.com" },
              { label: "What can I help with? *", placeholder: "Tell me more" },
            ].map((f) => (
              <div key={f.label} className="border-b border-white/15 pb-2">
                <label className="block text-[12px] uppercase tracking-[0.18em] text-white/55">
                  {f.label}
                </label>
                <input
                  placeholder={f.placeholder}
                  className="mt-2 w-full bg-transparent py-2 text-[16px] text-white placeholder:text-white/35 focus:outline-none"
                />
              </div>
            ))}
            <button
              type="submit"
              className="w-full rounded-full bg-white px-6 py-4 text-[15px] font-medium text-ink transition hover:bg-white/90"
            >
              Send message
            </button>
          </motion.form>

          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Email", value: "hello@prakshali.com", href: "mailto:hello@prakshali.com" },
              { label: "LinkedIn", value: "in/prakshali-shah", href: "#" },
              { label: "GitHub", value: "@prakshali", href: "#" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
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
            <p className="mt-1 text-[15px] text-white">hello@prakshali.com</p>
            <p className="mt-6 text-[12px] uppercase tracking-[0.2em] text-white/45">
              [ Location ]
            </p>
            <p className="mt-1 text-[15px] text-white">Chicago, IL</p>
          </div>
          {[
            { t: "Navigation", l: ["Home", "About", "Work", "Pricing", "Contact"] },
            { t: "Social", l: ["LinkedIn", "GitHub", "Twitter", "Dribbble"] },
            { t: "Resources", l: ["Resume", "Reading list", "Now", "404"] },
          ].map((c) => (
            <div key={c.t}>
              <p className="text-[12px] uppercase tracking-[0.2em] text-white/45">
                {c.t}
              </p>
              <ul className="mt-4 space-y-2.5">
                {c.l.map((x) => (
                  <li key={x}>
                    <a
                      href="#"
                      className="text-[15px] text-white/85 hover:text-flame"
                    >
                      {x}
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
          <p>Inspired by Noora · Built with care.</p>
        </div>
      </div>
    </footer>
  );
}
