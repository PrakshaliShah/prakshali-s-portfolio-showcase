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
  MessageSquare,
  Mail,
  MapPin,
  
} from "lucide-react";
import portrait from "@/assets/prakshali.jpg";
import heroCinematic from "@/assets/hero-cinematic.jpg";
import projectFeature from "@/assets/project-feature.jpg";

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
      duration: 0.7,
      delay: i * 0.06,
      ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
    },
  }),
};

/* ---------- Reusable bits ---------- */

function Eyebrow({
  icon: Icon,
  label,
  onDark = false,
}: {
  icon: React.ElementType;
  label: string;
  onDark?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 text-[13px] font-medium ${
        onDark ? "text-flame" : "text-flame"
      }`}
    >
      <Icon className="h-3.5 w-3.5" strokeWidth={2} />
      <span className="tracking-tight">{label}</span>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  icon,
  dark = false,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  icon?: React.ElementType;
  dark?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative ${dark ? "bg-ink text-cream" : "bg-cream text-ink"} ${className}`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-24 sm:py-32 lg:grid-cols-[200px_1fr]">
        <div className="lg:pt-2">
          {eyebrow && icon && <Eyebrow icon={icon} label={eyebrow} onDark={dark} />}
        </div>
        <div className="relative">{children}</div>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-cream text-ink">
      {/* HERO — dark cinematic */}
      <section
        id="top"
        className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-cream"
      >
        {/* Background image */}
        <img
          src={heroCinematic}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        {/* Vignette + gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(228,80,40,0.25),transparent_50%)]" />

        {/* Top announcement bar */}
        <div className="relative z-10 border-b border-white/10 bg-black/40 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-6 py-2.5 text-[12px] tracking-wide text-white/80">
            <span className="text-flame">●</span> AVAILABLE FOR 2026 GRAD ROLES
            <span className="text-white/30">●</span>
            <a href="#contact" className="underline-offset-4 hover:underline">LEARN MORE</a>
          </div>
        </div>

        {/* Top row: wordmark + pill nav */}
        <div className="relative z-10 mx-auto flex max-w-7xl items-start justify-between px-6 pt-8 sm:pt-12">
          <div className="font-display text-[44px] font-semibold leading-none tracking-tight text-white/30 sm:text-[72px] lg:text-[96px]">
            Prakshali<span className="text-white/20">®</span>
          </div>
          <nav className="hidden gap-1 rounded-full border border-white/15 bg-white/[0.06] p-1 backdrop-blur-md md:flex">
            {[
              { l: "About", h: "#about" },
              { l: "Work", h: "#work" },
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
          </nav>
        </div>

        {/* Bottom-left: tagline + CTA */}
        <div className="relative z-10 mx-auto flex max-w-7xl items-end justify-between gap-10 px-6 pb-12 pt-32 sm:pb-16 lg:pt-48">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
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
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-medium text-ink transition hover:bg-white/90"
            >
              Book a meeting
            </a>
          </motion.div>

          {/* Bottom-right: featured project card */}
          <motion.a
            href="#work"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="hidden w-[300px] shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.05] p-3 backdrop-blur-md transition hover:-translate-y-1 hover:border-white/30 lg:block"
          >
            <p className="px-2 pb-3 pt-1 font-display text-[28px] font-semibold leading-tight text-white">
              Projects <br /> made easy.
            </p>
            <img
              src={projectFeature}
              alt="Featured project"
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

      {/* WORK */}
      <Section id="work" eyebrow="Work" icon={Folder}>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="font-display text-[44px] font-semibold leading-[0.98] tracking-tight sm:text-[80px]"
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

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {[
            {
              name: "Transit Safe: CTA",
              tags: ["Python", "FastAPI"],
              desc: "Real-time safety scoring for Chicago Transit Authority routes.",
              tone: "from-rose-200 to-orange-100",
            },
            {
              name: "Openly",
              tags: ["AI Startup", "Product"],
              desc: "Founding analytics + product hire. Activation experiments that 2.4×'d signups.",
              tone: "from-amber-100 to-rose-100",
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
              className="group relative overflow-hidden rounded-3xl border border-black/8 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]"
            >
              <div className="flex items-center gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-ink/5 px-2 py-1 text-[11px] font-medium text-ink/70"
                  >
                    {t}
                  </span>
                ))}
                <ArrowUpRight className="ml-auto h-5 w-5 text-ink/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-flame" />
              </div>
              <div
                className={`mt-5 aspect-[16/10] w-full rounded-2xl bg-gradient-to-br ${p.tone} relative overflow-hidden`}
              >
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-display text-3xl font-semibold text-ink/70">
                    {p.name.split(":")[0]}
                  </span>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="font-display text-[22px] font-semibold leading-tight">
                  {p.name}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* ABOUT (dark band) */}
      <Section id="about" eyebrow="About" icon={User} dark>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="font-display text-[40px] font-semibold leading-[1.05] tracking-tight sm:text-[64px]"
        >
          A builder who thinks in data.{" "}
          <span className="text-faded-on-dark">
            Comfortable in a notebook, a Figma file, or a stand-up — wherever the
            decision has to get made.
          </span>
        </motion.h2>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="space-y-5 text-[16px] leading-relaxed text-white/70">
            <p>
              I'm a Master's candidate in Business Analytics at Roosevelt
              University, currently working with consumer insights at scale. My
              favourite problems sit at the seam of data, design, and product —
              where a clean dashboard or a small ML model can reshape how a team
              decides.
            </p>
            <p>
              Off-screen: Bonobo on repeat, half-finished books on storytelling
              with data, long walks along Lake Michigan.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 pt-4 text-flame hover:underline"
            >
              More about me <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl border border-white/10">
              <img
                src={portrait}
                alt="Portrait of Prakshali Shah"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" eyebrow="Experience" icon={Briefcase}>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="font-display text-[44px] font-semibold leading-[0.98] tracking-tight sm:text-[72px]"
        >
          Where I've worked.
        </motion.h2>

        <div className="mt-12 border-t border-black/10">
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
              className="group grid gap-4 border-b border-black/10 py-8 sm:grid-cols-[1.4fr_2fr_auto] sm:items-baseline sm:gap-10"
            >
              <div>
                <p className="font-display text-[26px] font-semibold leading-tight">
                  {j.company}
                </p>
                <p className="mt-1 text-[12px] uppercase tracking-[0.18em] text-muted">
                  {j.role}
                </p>
              </div>
              <p className="text-[15px] leading-relaxed text-muted">{j.note}</p>
              <p className="text-[12px] uppercase tracking-[0.18em] text-muted sm:text-right">
                {j.period}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="Toolbox" icon={Wrench}>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="font-display text-[44px] font-semibold leading-[0.98] tracking-tight sm:text-[72px]"
        >
          The stack.{" "}
          <span className="text-faded">Tools I reach for daily.</span>
        </motion.h2>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-5">
          {[
            { name: "Python", abbr: "Py" },
            { name: "SQL", abbr: "SQL" },
            { name: "Tableau", abbr: "Tb" },
            { name: "Power BI", abbr: "BI" },
            { name: "Docker", abbr: "Dk" },
          ].map((s, i) => (
            <motion.div
              key={s.name}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="group flex flex-col items-start gap-4 rounded-2xl border border-black/8 bg-white p-5 transition hover:-translate-y-1 hover:border-flame/40"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-cream font-display text-[15px] font-semibold">
                {s.abbr}
              </div>
              <div>
                <p className="font-display text-[18px] font-semibold">{s.name}</p>
                <p className="text-[12px] text-muted">Daily driver</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" eyebrow="Education" icon={GraduationCap}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="rounded-3xl border border-black/10 bg-white p-8 sm:p-12"
        >
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="text-[12px] uppercase tracking-[0.2em] text-flame">
                Roosevelt University
              </p>
              <h3 className="mt-3 font-display text-[32px] font-semibold leading-tight sm:text-[44px]">
                M.S. in Business Analytics
              </h3>
              <p className="mt-2 text-[15px] text-muted">
                Chicago, IL · Expected May 2026
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Statistics", "ML", "Data Viz", "Forecasting"].map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-ink/5 px-2.5 py-1 text-[11px] font-medium text-ink/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>

      {/* TESTIMONIAL */}
      <Section eyebrow="Testimonials" icon={MessageSquare}>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="font-display text-[40px] font-semibold leading-[1.02] tracking-tight sm:text-[64px]"
        >
          The work speaks loudest{" "}
          <span className="text-faded">
            — but here's what people say about it.
          </span>
        </motion.h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="rounded-3xl border border-black/10 bg-white p-8"
          >
            <div className="flex gap-0.5 text-flame">{"★★★★★"}</div>
            <p className="mt-6 font-display text-[20px] leading-snug">
              "Prakshali turns ambiguous data questions into crisp, decision-ready
              answers — and ships the dashboard to prove it."
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-ink text-cream text-[12px] font-semibold">
                NM
              </div>
              <div>
                <p className="text-[14px] font-medium">Lead, Numerator</p>
                <p className="text-[12px] text-muted">Consumer Insights team</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={1}
            className="rounded-3xl border border-black/10 bg-gradient-to-br from-rose-100 to-amber-100 p-8"
          >
            <p className="text-[12px] uppercase tracking-[0.2em] text-flame">
              Currently
            </p>
            <ul className="mt-6 space-y-4 font-display text-[20px] font-medium leading-snug">
              <li>→ Wrapping Transit Safe v2 (route-level risk)</li>
              <li>→ Reading <em>Storytelling with Data</em></li>
              <li>→ Listening to Bonobo · Fragments</li>
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* CONTACT (dark) */}
      <section id="contact" className="relative bg-ink text-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-24 sm:py-32 lg:grid-cols-[200px_1fr]">
          <div className="lg:pt-2">
            <Eyebrow icon={Mail} label="Contact" onDark />
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
              partner who cares about the outcome as much as you do. Email is
              fastest.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
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

        <footer className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-[12px] text-white/50">
            <p>© 2026 Prakshali Shah. All rights reserved.</p>
            <p>Inspired by Noora · Built with care.</p>
          </div>
        </footer>
      </section>
    </main>
  );
}
