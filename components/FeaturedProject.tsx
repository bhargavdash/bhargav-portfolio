import type { FeaturedProject as Project } from "@/lib/projects";
import Magnetic from "@/components/Magnetic";
import { PlayIcon } from "@/components/icons";

const STRIPES =
  "repeating-linear-gradient(135deg,#15151d,#15151d 10px,#17171f 10px,#17171f 20px)";

export default function FeaturedProject({ project }: { project: Project }) {
  // Per-project identity colour (rgb), carried by an ambient glow, the hover
  // border and the watermark — replaces the old left accent stripe.
  const tint = project.bar === "primary" ? "108,99,255" : "249,115,22";
  const hoverBorder =
    project.bar === "primary" ? "hover:border-primary/35" : "hover:border-accent/35";
  const playBg =
    project.play === "light" ? "bg-white/90 hover:bg-white" : "bg-accent/90 hover:bg-accent";

  return (
    <article
      className={`group relative flex flex-col gap-[30px] overflow-hidden rounded-[20px] border border-white/[0.07] bg-surface p-[clamp(28px,3.4vw,44px)] transition-[transform,border-color] duration-300 hover:-translate-y-[5px] ${hoverBorder} md:gap-[clamp(28px,4vw,52px)] ${
        project.reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* Ambient identity glow, anchored to the content side */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -top-20 z-0 h-72 w-72 rounded-full blur-md ${
          project.reverse ? "-right-20" : "-left-20"
        }`}
        style={{ background: `radial-gradient(closest-side, rgba(${tint},0.12), transparent)` }}
      />
      {/* Oversized index watermark, tinted to the project colour */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[44px] right-[26px] z-0 font-display text-[160px] font-semibold leading-none"
        style={{ color: `rgba(${tint},0.06)` }}
      >
        {project.index}
      </div>

      {/* Content */}
      <div className="relative z-[2] flex min-w-0 flex-col md:flex-1">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-surface-2 px-[11px] py-[6px] font-mono text-[11px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <h3 className="mt-[18px] font-display text-[clamp(34px,4.4vw,52px)] font-semibold leading-none tracking-[-0.02em] text-ink">
          {project.name}
        </h3>

        <p className="mt-[18px] max-w-[460px] font-sans text-base leading-[1.65] text-muted">
          {project.desc}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/[0.06] bg-surface-2 px-3 py-2 font-mono text-xs text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-[13px] pt-7">
          <Magnetic>
            <a
              href={project.live}
              className="inline-flex h-[42px] items-center gap-2 rounded-full bg-primary px-5 font-sans text-sm font-medium text-white no-underline transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-primary-2"
            >
              Live Demo →
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={project.caseStudy}
              className="inline-flex h-[42px] items-center gap-2 rounded-full border border-white/[0.14] bg-transparent px-5 font-sans text-sm font-medium text-ink no-underline transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/50"
            >
              Case Study ↗
            </a>
          </Magnetic>
        </div>
      </div>

      {/* Media — browser mock with demo-video drop zone */}
      <div className="relative z-[2] order-first min-w-0 md:order-none md:flex-1">
        <div className="relative overflow-hidden rounded-[12px] border border-white/15 bg-surface-2 shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
          <div className="h-[3px]" style={{ background: `rgb(${tint})` }} />
          <div className="flex items-center gap-[14px] border-b border-white/[0.06] px-4 py-3">
            <div className="flex gap-[7px]">
              <span className="h-[11px] w-[11px] rounded-full bg-[#ff5f57]" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#febc2e]" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#28c840]" />
            </div>
            <div className="flex h-6 flex-1 items-center rounded-[6px] bg-bg px-3 font-mono text-[11px] text-faint">
              {project.browserUrl}
            </div>
          </div>
          <div
            className="relative flex aspect-[16/10] items-center justify-center"
            style={{ background: STRIPES }}
          >
            <button
              type="button"
              aria-label={`Play ${project.name} demo`}
              className={`flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border-none backdrop-blur-[6px] transition-transform duration-200 hover:scale-[1.08] ${playBg}`}
            >
              <PlayIcon size={18} className="ml-[3px] text-bg" />
            </button>
            <span className="absolute left-[14px] top-3 font-mono text-[10px] tracking-[0.08em] text-faint">
              DROP DEMO VIDEO — {project.demoFile}
            </span>
          </div>
        </div>
        <div className="mt-3 font-mono text-xs text-faint">{project.demoMeta}</div>
      </div>
    </article>
  );
}
