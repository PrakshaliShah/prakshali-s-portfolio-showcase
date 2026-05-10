import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Linkedin,
  Github,
  MapPin,
  GraduationCap,
  Briefcase,
  Sparkles,
  Quote,
  Headphones,
} from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";
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
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.06, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] },
  }),
};

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Ambient background washes */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#000319]" />
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-violet/30 blur-[140px]" style={{ background: "radial-gradient(circle, oklch(0.72 0.22 295 / 35%), transparent 60%)" }} />
        <div className="absolute -bottom-40 -right-32 h-[560px] w-[560px] rounded-full blur-[160px]" style={{ background: "radial-gradient(circle, oklch(0.85 0.16 200 / 28%), transparent 60%)" }} />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0 / 1) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </div>

      {/* Top nav */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-8">
        <div className="flex items-center gap-2 text-sm tracking-wide">
          <span className="inline-block h-2 w-2 rounded-full bg-aurora" style={{ animation: "pulse-dot 2.4s ease-in-out infinite" }} />
          <span className="text-muted-foreground">Prakshali / Portfolio · 2026</span>
        </div>
        <a
          href="mailto:hello@prakshali.com"
          className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide backdrop-blur-md transition hover:border-white/30 hover:bg-white/10 sm:inline-flex"
        >
          Let's talk →
        </a>
      </header>

      {/* Bento Grid */}
      <section className="mx-auto max-w-7xl px-6 py-10 sm:py-16">
        <motion.div
          initial="hidden"
          animate="show"
          className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-6"
        >
          {/* HERO — name + tagline + photo (2x2 / 4x2) */}
          <motion.div variants={fadeUp} custom={0} className="sm:col-span-4 lg:col-span-4 lg:row-span-2">
            <SpotlightCard className="h-full">
              <div className="grid h-full grid-cols-1 gap-6 p-8 sm:grid-cols-[1.3fr_1fr] sm:p-10">
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Open to 2026 grad roles
                    </span>
                    <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                      Prakshali <br />
                      <span className="text-aurora italic">Shah.</span>
                    </h1>
                    <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                      Business Analytics graduate &amp; software builder turning messy
                      data into products people actually use.
                    </p>
                  </div>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <a
                      href="mailto:hello@prakshali.com"
                      className="inline-flex items-center gap-2 rounded-full bg-aurora px-5 py-2.5 text-sm font-medium text-[#000319] transition hover:opacity-90"
                    >
                      Get in touch <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-foreground/90 transition hover:bg-white/5"
                    >
                      Download CV
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-aurora opacity-30 blur-2xl" />
                  <div className="relative h-full min-h-[260px] overflow-hidden rounded-2xl border border-white/10">
                    <img
                      src={portrait}
                      alt="Portrait of Prakshali Shah"
                      width={1024}
                      height={1024}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000319]/70 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* EXPERIENCE — tall (2x2) */}
          <motion.div variants={fadeUp} custom={1} className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
            <SpotlightCard className="h-full" spotlightColor="oklch(0.72 0.22 295 / 30%)">
              <div className="flex h-full flex-col p-7">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <Briefcase className="h-3.5 w-3.5" /> Experience
                  </span>
                </div>
                <h3 className="mt-3 font-display text-3xl leading-tight">Where I've shipped.</h3>

                <ul className="mt-6 space-y-5">
                  <li className="group/item rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition hover:border-white/20">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold">Numerator</p>
                        <p className="text-xs text-muted-foreground">Consumer Insights</p>
                      </div>
                      <span className="text-[10px] text-muted-foreground">2024 — 2025</span>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      Surfaced behavioral signals across millions of CPG transactions
                      for Fortune-500 brand teams.
                    </p>
                  </li>
                  <li className="group/item rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition hover:border-white/20">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold">Roosevelt University</p>
                        <p className="text-xs text-muted-foreground">Graduate Assistant</p>
                      </div>
                      <span className="text-[10px] text-muted-foreground">2024 — Now</span>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      Teaching assistant for analytics &amp; data viz coursework.
                    </p>
                  </li>
                </ul>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* PROJECTS — wide (4x1) */}
          <motion.div variants={fadeUp} custom={2} className="sm:col-span-4 lg:col-span-4">
            <SpotlightCard className="h-full" spotlightColor="oklch(0.85 0.16 200 / 28%)">
              <div className="flex h-full flex-col p-7">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <Sparkles className="h-3.5 w-3.5" /> Selected Work
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </div>
                <div className="mt-5 grid flex-1 gap-4 sm:grid-cols-2">
                  <a href="#" className="group/p relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-transparent p-5 transition hover:border-violet-300/40">
                    <div className="flex items-center justify-between">
                      <p className="font-display text-2xl">Transit Safe: CTA</p>
                      <span className="rounded-full border border-white/15 px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">Python · FastAPI</span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      Real-time safety scoring for Chicago Transit Authority routes —
                      ML model + map-based dashboard.
                    </p>
                    <div className="mt-4 inline-flex items-center gap-1 text-xs text-foreground/90">
                      View case study <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </a>
                  <a href="#" className="group/p relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-transparent p-5 transition hover:border-cyan-300/40">
                    <div className="flex items-center justify-between">
                      <p className="font-display text-2xl">Openly</p>
                      <span className="rounded-full border border-white/15 px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">AI Startup</span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      Founding analytics + product hire. Shipped onboarding funnel
                      experiments that 2.4×'d activation.
                    </p>
                    <div className="mt-4 inline-flex items-center gap-1 text-xs text-foreground/90">
                      Visit project <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* SKILLS — 2x1 */}
          <motion.div variants={fadeUp} custom={3} className="sm:col-span-2 lg:col-span-3">
            <SpotlightCard className="h-full">
              <div className="flex h-full flex-col p-7">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Toolbox</span>
                <h3 className="mt-3 font-display text-3xl">The stack.</h3>
                <div className="mt-6 grid grid-cols-5 gap-3">
                  {[
                    { name: "Python", color: "from-yellow-300 to-blue-400" },
                    { name: "SQL", color: "from-sky-300 to-indigo-500" },
                    { name: "Tableau", color: "from-blue-400 to-violet-500" },
                    { name: "Power BI", color: "from-amber-300 to-yellow-500" },
                    { name: "Docker", color: "from-cyan-300 to-blue-500" },
                  ].map((s) => (
                    <div key={s.name} className="group/s flex flex-col items-center gap-2">
                      <div className="relative grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] transition group-hover/s:border-white/30 group-hover/s:-translate-y-1">
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${s.color} opacity-0 blur-xl transition group-hover/s:opacity-30`} />
                        <span className={`relative font-display text-lg bg-gradient-to-br ${s.color} bg-clip-text text-transparent`}>
                          {s.name.slice(0, 2)}
                        </span>
                      </div>
                      <span className="text-[10px] tracking-wide text-muted-foreground">{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* EDUCATION — 2x1 */}
          <motion.div variants={fadeUp} custom={4} className="sm:col-span-2 lg:col-span-3">
            <SpotlightCard className="h-full" spotlightColor="oklch(0.72 0.22 295 / 28%)">
              <div className="flex h-full flex-col justify-between p-7">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <GraduationCap className="h-3.5 w-3.5" /> Education
                  </span>
                  <span className="rounded-full border border-white/15 px-2 py-0.5 text-[10px] tracking-wider text-muted-foreground">
                    Expected May 2026
                  </span>
                </div>
                <div>
                  <p className="mt-6 text-xs uppercase tracking-wider text-muted-foreground">Master of Science</p>
                  <h3 className="mt-1 font-display text-3xl leading-tight">
                    Business Analytics
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">Roosevelt University · Chicago, IL</p>
                </div>
                <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
                  <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                  <span>GPA · Forecasting · ML · Optimization</span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* LOCATION / AVAILABILITY — 1x1 */}
          <motion.div variants={fadeUp} custom={5} className="sm:col-span-2 lg:col-span-2">
            <SpotlightCard className="h-full">
              <div className="flex h-full flex-col justify-between p-6">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> Based In
                </span>
                <div>
                  <p className="font-display text-3xl">Chicago, IL</p>
                  <p className="mt-1 text-xs text-muted-foreground">CST · UTC −6</p>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-emerald-300">Available · Summer 2026</span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* CURRENTLY — 1x1 */}
          <motion.div variants={fadeUp} custom={6} className="sm:col-span-2 lg:col-span-2">
            <SpotlightCard className="h-full" spotlightColor="oklch(0.85 0.16 200 / 25%)">
              <div className="flex h-full flex-col justify-between p-6">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <Headphones className="h-3.5 w-3.5" /> Currently
                </span>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400" />
                    <span><span className="text-muted-foreground">Building</span> a forecasting agent in LangGraph.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    <span><span className="text-muted-foreground">Reading</span> "Storytelling with Data".</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span><span className="text-muted-foreground">Listening</span> Bonobo · Fragments.</span>
                  </li>
                </ul>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* TESTIMONIAL — 2x1 */}
          <motion.div variants={fadeUp} custom={7} className="sm:col-span-4 lg:col-span-2">
            <SpotlightCard className="h-full">
              <div className="flex h-full flex-col justify-between p-6">
                <Quote className="h-6 w-6 text-aurora" style={{ color: "transparent", fill: "url(#g)" }} />
                <p className="font-display text-lg leading-snug">
                  "Prakshali turns ambiguity into clarity faster than anyone on
                  the team — and ships the dashboard to prove it."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-aurora" />
                  <div>
                    <p className="text-xs font-semibold">Manager · Numerator</p>
                    <p className="text-[10px] text-muted-foreground">Consumer Insights Lead</p>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* CONTACT — wide CTA */}
          <motion.div variants={fadeUp} custom={8} className="sm:col-span-4 lg:col-span-6">
            <SpotlightCard className="h-full" spotlightColor="oklch(0.72 0.22 295 / 35%)">
              <div className="grid items-center gap-6 p-8 sm:grid-cols-[1.4fr_1fr] sm:p-10">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Let's collaborate</span>
                  <h3 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                    Have a problem worth <span className="text-aurora italic">solving?</span>
                  </h3>
                  <p className="mt-3 max-w-lg text-sm text-muted-foreground">
                    Looking for full-time analytics &amp; product roles starting summer 2026.
                    I reply within a day.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <a href="mailto:hello@prakshali.com" className="group/c flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-white/30">
                    <span className="flex items-center gap-3 text-sm"><Mail className="h-4 w-4" /> hello@prakshali.com</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover/c:translate-x-0.5 group-hover/c:-translate-y-0.5 group-hover/c:text-foreground" />
                  </a>
                  <a href="#" className="group/c flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-white/30">
                    <span className="flex items-center gap-3 text-sm"><Linkedin className="h-4 w-4" /> /in/prakshali-shah</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover/c:translate-x-0.5 group-hover/c:-translate-y-0.5 group-hover/c:text-foreground" />
                  </a>
                  <a href="#" className="group/c flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-white/30">
                    <span className="flex items-center gap-3 text-sm"><Github className="h-4 w-4" /> github.com/prakshali</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover/c:translate-x-0.5 group-hover/c:-translate-y-0.5 group-hover/c:text-foreground" />
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </motion.div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 Prakshali Shah. Designed &amp; built with care.</p>
          <p className="tracking-[0.2em] uppercase">Crafted in Chicago</p>
        </footer>
      </section>
    </main>
  );
}
