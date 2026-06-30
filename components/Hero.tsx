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
import Magnetic from "@/components/Magnetic";
import { CertBadge } from "@/components/icons";

export default function Hero() {
  const reduced = useReducedMotion();
  const scrollTo = useScrollTo();

  // 3D tilt for the profile card.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 200, damping: 15, mass: 0.4 });
  const sy = useSpring(py, { stiffness: 200, damping: 15, mass: 0.4 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-12, 12]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [12, -12]);

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
                target="_blank"
                rel="noopener noreferrer"
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
            {/* Code snippet — parallel agent pattern from nomad-agent */}
            <div className="overflow-hidden rounded-[12px] border border-white/[0.08] bg-bg">
              {/* File tab */}
              <div className="flex items-center gap-[10px] border-b border-white/[0.06] px-4 py-[10px]">
                <span className="h-[9px] w-[9px] rounded-full bg-white/10" />
                <span className="font-mono text-[11px] text-faint">synthesizer.py</span>
              </div>
              {/* Code body */}
              <pre className="overflow-x-auto px-4 py-[18px] font-mono text-[12px] leading-[1.85]">
                <code>
                  <span className="text-faint"># parallel research agents</span>{"\n"}
                  <span className="text-primary-ink">results</span>
                  <span className="text-muted"> = </span>
                  <span className="text-primary-ink">await </span>
                  <span className="text-ink">asyncio</span>
                  <span className="text-muted">.</span>
                  <span className="text-ink">gather</span>
                  <span className="text-muted">{"("}</span>{"\n"}
                  {"    "}
                  <span className="text-muted">youtube</span>
                  <span className="text-muted">.</span>
                  <span className="text-ink">research</span>
                  <span className="text-muted">{"(dest),"}</span>{"\n"}
                  {"    "}
                  <span className="text-muted">reddit</span>
                  <span className="text-muted">.</span>
                  <span className="text-ink">threads</span>
                  <span className="text-muted">{"(dest),"}</span>{"\n"}
                  {"    "}
                  <span className="text-muted">geo</span>
                  <span className="text-muted">.</span>
                  <span className="text-ink">context</span>
                  <span className="text-muted">{"(dest),"}</span>{"\n"}
                  {"    "}
                  <span className="text-muted">blogs</span>
                  <span className="text-muted">.</span>
                  <span className="text-ink">scrape</span>
                  <span className="text-muted">{"(dest),"}</span>{"\n"}
                  {"    "}
                  <span className="text-muted">travel</span>
                  <span className="text-muted">.</span>
                  <span className="text-ink">fetch</span>
                  <span className="text-muted">{"(dest),"}</span>{"\n"}
                  <span className="text-muted">{")"}</span>{"\n"}
                  <span className="text-primary-ink">return await </span>
                  <span className="text-ink">synthesize</span>
                  <span className="text-muted">{"(results)"}</span>
                </code>
              </pre>
              {/* Footer attribution */}
              <div className="flex items-center justify-between border-t border-white/[0.06] px-4 py-[9px]">
                <span className="font-mono text-[10px] text-faint">nomad-agent</span>
                <a
                  href="https://github.com/bhargavdash/nomad-agent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] text-primary-ink no-underline transition-opacity duration-200 hover:opacity-70"
                >
                  view source ↗
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
