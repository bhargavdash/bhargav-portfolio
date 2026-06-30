"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { site } from "@/lib/site";
import { ease } from "@/lib/motion";
import { useScrollTo } from "@/lib/hooks";
import CountUp from "@/components/CountUp";
import Magnetic from "@/components/Magnetic";
import { CertBadge } from "@/components/icons";

const toneClass: Record<string, string> = {
  ink: "text-ink",
  primary: "text-primary",
  accent: "text-accent",
};

export default function Hero() {
  const reduced = useReducedMotion();
  const scrollTo = useScrollTo();

  // 3D tilt for the profile card.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 150, damping: 18, mass: 0.5 });
  const sy = useSpring(py, { stiffness: 150, damping: 18, mass: 0.5 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-8, 8]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [8, -8]);

  const onCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onCardLeave = () => {
    px.set(0);
    py.set(0);
  };

  // Mount-time load-in: opacity + lift, staggered by delay (seconds).
  const load = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: reduced ? { duration: 0 } : { duration: 0.7, ease: ease.out, delay },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-[clamp(20px,6vw,96px)] pb-20 pt-[120px]"
    >
      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[2%] top-[26%] z-0 h-[440px] w-[540px] blur-lg"
        style={{
          background:
            "radial-gradient(closest-side, rgba(108,99,255,0.16), transparent 72%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[4%] top-[18%] z-0 h-[340px] w-[380px] blur-lg"
        style={{
          background:
            "radial-gradient(closest-side, rgba(249,115,22,0.12), transparent 72%)",
        }}
      />
      {/* Dot grid, masked to fade at edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1.4px)",
          backgroundSize: "28px 28px",
          WebkitMaskImage:
            "radial-gradient(ellipse 72% 68% at 48% 46%, #000 0%, transparent 78%)",
          maskImage:
            "radial-gradient(ellipse 72% 68% at 48% 46%, #000 0%, transparent 78%)",
        }}
      />

      <div className="relative z-[2] mx-auto flex w-full max-w-[1240px] flex-col items-center gap-[52px] md:flex-row md:gap-[clamp(40px,6vw,72px)]">
        {/* Left column */}
        <div className="w-full md:max-w-[680px] md:flex-1">
          <motion.div
            {...load(0)}
            className="mb-[26px] font-mono text-[12px] tracking-[0.08em] text-accent sm:text-[13px] sm:tracking-[0.14em]"
          >
            ↳ Frontend Engineer · {site.company}
          </motion.div>

          <motion.h1
            {...load(0.08)}
            className="m-0 font-display text-[clamp(52px,8.6vw,88px)] font-semibold leading-[0.96] tracking-[-0.04em] text-ink"
          >
            <span className="block">Bhargav</span>
            <span className="relative inline-block">
              <span className="text-[1.07em] font-bold">D</span>ash
              <svg
                viewBox="0 0 322 12"
                preserveAspectRatio="none"
                className="absolute -left-[1%] -bottom-[0.16em] h-[0.3em] w-[102%] overflow-visible"
                aria-hidden
              >
                <motion.path
                  d="M3 8 C 70 2, 200 1, 319 6"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth={4}
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={
                    reduced ? { duration: 0 } : { duration: 0.9, ease: ease.standard, delay: 0.55 }
                  }
                />
              </svg>
            </span>
          </motion.h1>

          <motion.div
            {...load(0.16)}
            className="mt-[30px] font-mono text-[13px] tracking-[0.04em] text-faint sm:text-sm sm:tracking-[0.1em]"
          >
            {site.tagline}
          </motion.div>

          <motion.div {...load(0.24)} className="mt-[34px] flex flex-wrap gap-[14px]">
            <Magnetic>
              <a
                href="#work"
                onClick={(e) => scrollTo(e, "#work")}
                className="inline-flex h-11 items-center justify-center gap-[9px] rounded-full bg-primary px-6 font-sans text-[15px] font-medium text-white no-underline transition-[background,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-primary-2 hover:shadow-[0_8px_24px_rgba(108,99,255,0.28)]"
              >
                View Work →
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={site.links.resume}
                className="inline-flex h-11 items-center justify-center gap-[9px] rounded-full border border-primary/55 bg-transparent px-6 font-sans text-[15px] font-medium text-ink no-underline transition-[border-color,background,transform] duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/[0.08]"
              >
                Read Resume ↗
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            {...load(0.32)}
            className="mt-6 inline-flex max-w-full flex-wrap items-center gap-x-[13px] gap-y-[6px] rounded-[20px] border-[1.5px] border-accent bg-accent/[0.08] px-[17px] py-[11px] shadow-[0_0_0_1px_rgba(249,115,22,0.15),0_4px_20px_rgba(249,115,22,0.08)]"
          >
            <CertBadge size={20} className="shrink-0 text-accent" />
            <span className="font-sans text-sm font-medium text-accent">
              Anthropic Claude Certified Architect
            </span>
            <span className="hidden h-[15px] w-px bg-accent/35 sm:block" />
            <span className="whitespace-nowrap font-mono text-xs text-accent/85">
              2026 · Verified ✓
            </span>
          </motion.div>
        </div>

        {/* Right column — profile card */}
        <div
          className="w-full max-w-[400px] [perspective:1000px] md:flex-1"
          onMouseMove={onCardMove}
          onMouseLeave={onCardLeave}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={reduced ? { duration: 0 } : { duration: 0.7, ease: ease.out, delay: 0.22 }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="rounded-[20px] border border-white/10 bg-[rgba(19,19,26,0.7)] p-7 backdrop-blur-[20px]"
          >
            <div className="flex items-center gap-[14px]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-display text-lg font-semibold text-white">
                {site.initials}
              </div>
              <div>
                <div className="font-sans text-base font-medium text-ink">{site.name}</div>
                <div className="font-sans text-[13px] text-faint">{site.role}</div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-[9px]">
              <span className="h-2 w-2 animate-pulse-dot rounded-full bg-success shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              <span className="font-sans text-[13px] text-muted">Open to opportunities</span>
            </div>

            <div className="my-[22px] h-px bg-white/[0.08]" />

            <div className="grid grid-cols-2 gap-x-[14px] gap-y-[18px]">
              {site.stats.map((s) => (
                <div key={s.label}>
                  <div
                    className={`font-display text-[28px] font-semibold leading-none ${toneClass[s.tone]}`}
                  >
                    <CountUp to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-[6px] font-mono text-[11px] text-faint">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
