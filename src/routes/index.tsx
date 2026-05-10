import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import {
  ArrowUpRight,
  Mail,
  Linkedin,
  Github,
  MapPin,
  GraduationCap,
  Sparkles,
  Quote,
  Headphones,
} from "lucide-react";
import portrait from "@/assets/prakshali.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Prakshali Shah — Business Analytics & Software Builder" },
      {
        name: "description",
        content:
          "Portfolio of Prakshali Shah, M.S. Business Analytics — building data products with Python, SQL, and a designer's eye.",
      },
      { property: "og:title", content: "Prakshali Shah — Portfolio" },
      {
        property: "og:description",
        content: "Business Analytics graduate & software builder.",
      },
    ],
  }),
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.06,
      ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
    },
  }),
};

function Section({
  id,
  eyebrow,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-6xl px-6 py-24 sm:py-32 ${className}`}
    >
      {eyebrow && (
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-muted-foreground"
        >
          <span className="h-px w-10 bg-white/25" />
          {eyebrow}
        </motion.div>
      )}
      {children}
    </section>
  );
}

function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Ambient background washes */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#000319]" />
        <div
          className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, oklch(0.72 0.22 295 / 35%), transparent 60%)",
          }}
        />
        <div
          className="absolute top-[40%] -right-32 h-[560px] w-[560px] rounded-full blur-[160px]"
          style={{
            background:
              "radial-gradient(circle, oklch(0.85 0.16 200 / 25%), transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0 / 1) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 1) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          }}
        />
      </div>

      {/* Sticky nav */}
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#top" className="flex items-center gap-2 text-sm tracking-wide">
            <span
              className="inline-block h-2 w-2 rounded-full bg-aurora"
              style={{ animation: "pulse-dot 2.4s ease-in-out infinite" }}
            />
            <span className="font-medium">Prakshali Shah</span>
          </a>
          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:flex">
            <a href="#work" className="transition hover:text-foreground">Work</a>
            <a href="#about" className="transition hover:text-foreground">About</a>
            <a href="#experience" className="transition hover:text-foreground">Experience</a>
            <a href="#contact" className="transition hover:text-foreground">Contact</a>
          </nav>
          <a
            href="mailto:hello@prakshali.com"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide transition hover:border-white/30 hover:bg-white/10"
          >
            Let's talk →
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="top"
        ref={heroRef}
        className="relative flex min-h-[100svh] items-center justify-center px-6 pt-32"
      >
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="mx-auto w-full max-w-5xl text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Open to 2026 grad roles · Chicago
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-8 font-display text-[64px] leading-[0.92] tracking-tight sm:text-[96px] lg:text-[140px]"
          >
            Prakshali <br />
            <span className="text-aurora italic">Shah.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Business Analytics graduate &amp; software builder turning messy data
            into products people actually use.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-aurora px-6 py-3 text-sm font-medium text-[#000319] transition hover:opacity-90"
            >
              See selected work <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm transition hover:bg-white/5"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Scroll ↓
        </div>
      </section>

      {/* SELECTED WORK */}
      <Section id="work" eyebrow="Selected Work · 2024 — 2026">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl"
        >
          Things I've <span className="italic text-aurora">shipped.</span>
        </motion.h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {[
            {
              name: "Transit Safe: CTA",
              tag: "Python · FastAPI · ML",
              desc: "Real-time safety scoring for Chicago Transit Authority routes — ML model paired with a map-based dashboard to surface risk hotspots.",
              gradient: "from-violet-500/30 via-violet-500/5 to-transparent",
              border: "hover:border-violet-300/40",
            },
            {
              name: "Openly",
              tag: "AI Startup · Analytics",
              desc: "Founding analytics + product hire. Shipped onboarding funnel experiments that 2.4×'d activation in eight weeks.",
              gradient: "from-cyan-400/30 via-cyan-400/5 to-transparent",
              border: "hover:border-cyan-300/40",
            },
          ].map((p, i) => (
            <motion.a
              key={p.name}
              href="#"
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition ${p.border}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-60 transition group-hover:opacity-100`}
              />
              <div className="relative flex h-full flex-col justify-between gap-12">
                <div className="flex items-start justify-between">
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                    {p.tag}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-4xl leading-tight sm:text-5xl">
                    {p.name}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about" eyebrow="About">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-aurora opacity-25 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
              <img
                src={portrait}
                alt="Portrait of Prakshali Shah"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000319]/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={1}
          >
            <h2 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl">
              A builder who <span className="italic text-aurora">thinks in data.</span>
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
              I'm a Master's candidate in Business Analytics at Roosevelt
              University, currently working with consumer insights at scale. My
              favourite problems sit at the seam of data, design, and product —
              where a clean dashboard or a small ML model can reshape how a team
              decides.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Off-screen: Bonobo on repeat, half-finished books on storytelling
              with data, long walks along Lake Michigan.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:max-w-md">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <MapPin className="mr-1 inline h-3 w-3" /> Based
                </p>
                <p className="mt-2 font-display text-xl">Chicago, IL</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <span className="relative mr-2 inline-flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Status
                </p>
                <p className="mt-2 font-display text-xl">Available</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" eyebrow="Experience">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl"
        >
          Where I've <span className="italic text-aurora">worked.</span>
        </motion.h2>

        <div className="mt-16 divide-y divide-white/8 border-y border-white/8">
          {[
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
              note: "Teaching assistant for analytics & data viz coursework; supporting faculty research on forecasting.",
            },
          ].map((j, i) => (
            <motion.div
              key={j.company}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="group grid gap-6 py-10 sm:grid-cols-[1fr_2fr_auto] sm:items-baseline"
            >
              <div>
                <p className="font-display text-3xl">{j.company}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {j.role}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {j.note}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {j.period}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section eyebrow="Toolbox">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl"
        >
          The <span className="italic text-aurora">stack.</span>
        </motion.h2>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-5">
          {[
            { name: "Python", color: "from-yellow-300 to-blue-400" },
            { name: "SQL", color: "from-sky-300 to-indigo-500" },
            { name: "Tableau", color: "from-blue-400 to-violet-500" },
            { name: "Power BI", color: "from-amber-300 to-yellow-500" },
            { name: "Docker", color: "from-cyan-300 to-blue-500" },
          ].map((s, i) => (
            <motion.div
              key={s.name}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-white/30"
            >
              <div className="relative grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${s.color} opacity-0 blur-xl transition group-hover:opacity-30`}
                />
                <span
                  className={`relative font-display text-xl bg-gradient-to-br ${s.color} bg-clip-text text-transparent`}
                >
                  {s.name.slice(0, 2)}
                </span>
              </div>
              <span className="text-xs tracking-wide text-muted-foreground">
                {s.name}
              </span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section eyebrow="Education">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 sm:p-14"
        >
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                <GraduationCap className="h-3.5 w-3.5" /> Master of Science
              </span>
              <h3 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">
                Business <span className="italic text-aurora">Analytics.</span>
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Roosevelt University · Chicago, IL
              </p>
            </div>
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground">
              Expected May 2026
            </span>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {["Forecasting", "Machine Learning", "Optimization", "Data Viz", "SQL"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ),
            )}
          </div>
        </motion.div>
      </Section>

      {/* CURRENTLY + TESTIMONIAL */}
      <Section eyebrow="Off the clock">
        <div className="grid gap-6 lg:grid-cols-5">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 lg:col-span-2"
          >
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              <Headphones className="h-3.5 w-3.5" /> Currently
            </span>
            <ul className="mt-6 space-y-4 text-base">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-400" />
                <span>
                  <span className="text-muted-foreground">Building</span> a
                  forecasting agent in LangGraph.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <span>
                  <span className="text-muted-foreground">Reading</span>{" "}
                  "Storytelling with Data".
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  <span className="text-muted-foreground">Listening</span>{" "}
                  Bonobo · Fragments.
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={1}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-10 lg:col-span-3"
          >
            <Quote className="h-8 w-8 text-aurora opacity-60" />
            <p className="mt-6 font-display text-2xl leading-snug sm:text-3xl">
              "Prakshali turns ambiguity into clarity faster than anyone on the
              team — and ships the dashboard to prove it."
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-aurora" />
              <div>
                <p className="text-sm font-semibold">Manager · Numerator</p>
                <p className="text-xs text-muted-foreground">
                  Consumer Insights Lead
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="Contact">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="text-center"
        >
          <Sparkles className="mx-auto h-6 w-6 text-aurora opacity-70" />
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl">
            Have a problem worth{" "}
            <span className="italic text-aurora">solving?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Looking for full-time analytics &amp; product roles starting summer
            2026. I reply within a day.
          </p>

          <div className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-3">
            {[
              { icon: Mail, label: "hello@prakshali.com", href: "mailto:hello@prakshali.com" },
              { icon: Linkedin, label: "/in/prakshali-shah", href: "#" },
              { icon: Github, label: "github.com/prakshali", href: "#" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/30 hover:bg-white/[0.06]"
              >
                <span className="flex items-center gap-3 text-sm">
                  <c.icon className="h-4 w-4" /> {c.label}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </a>
            ))}
          </div>
        </motion.div>
      </Section>

      <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/5 px-6 py-10 text-xs text-muted-foreground sm:flex-row">
        <p>© 2026 Prakshali Shah. Designed &amp; built with care.</p>
        <p className="tracking-[0.25em] uppercase">Crafted in Chicago</p>
      </footer>
    </main>
  );
}
