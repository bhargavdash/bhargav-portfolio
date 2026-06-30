"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { filters, gridProjects, type Category } from "@/lib/projects";
import { ease } from "@/lib/motion";
import { ExternalArrow, FolderIcon, PlusIcon, SourceIcon } from "@/components/icons";

type Filter = "all" | Category;

export default function ProjectGrid() {
  const [active, setActive] = useState<Filter>("all");
  const reduced = useReducedMotion();

  const visible =
    active === "all"
      ? gridProjects
      : gridProjects.filter((p) => p.cats.includes(active));

  return (
    <>
      {/* Filter tabs */}
      <div className="mb-7 flex flex-wrap gap-[10px]">
        {filters.map((f) => {
          const isActive = f.value === active;
          return (
            <button
              key={f.value}
              type="button"
              onClick={() => setActive(f.value)}
              aria-pressed={isActive}
              className={`cursor-pointer rounded-full px-4 py-[9px] font-mono text-xs tracking-[0.03em] transition-[background,color,border-color] duration-200 ${
                isActive
                  ? "border border-primary bg-primary text-white"
                  : "border border-white/[0.12] bg-transparent text-faint hover:border-primary/50 hover:text-ink"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="relative grid min-h-[300px] grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.article
              key={p.name}
              layout={!reduced}
              initial={reduced ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduced ? undefined : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: ease.inOut }}
              className="group flex min-h-[236px] flex-col gap-[13px] rounded-[14px] border border-white/[0.07] bg-surface p-6 transition-[transform,border-color,background] duration-300 hover:-translate-y-1 hover:border-primary/[0.28] hover:bg-surface-3"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-white/[0.06] bg-surface-2 px-[9px] py-[5px] font-mono text-[10px] tracking-[0.03em] text-muted">
                    {p.catsLabel}
                  </span>
                  {p.isNew && (
                    <span className="rounded-full border border-accent/30 bg-accent/[0.12] px-[9px] py-[5px] font-mono text-[10px] text-accent">
                      New
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={p.source}
                    aria-label={`${p.name} source`}
                    className="inline-flex text-faint transition-colors duration-200 hover:text-ink"
                  >
                    <SourceIcon />
                  </a>
                  <a
                    href={p.live}
                    aria-label={`${p.name} live`}
                    className="inline-flex text-faint transition-colors duration-200 hover:text-ink"
                  >
                    <ExternalArrow />
                  </a>
                </div>
              </div>

              <h3 className="m-0 font-sans text-xl font-semibold leading-[1.25] text-ink">
                {p.name}
              </h3>
              <p className="m-0 flex-1 font-sans text-sm leading-[1.6] text-muted">{p.desc}</p>

              <div className="flex flex-wrap items-center gap-[6px]">
                {p.techShown.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-surface-2 px-[10px] py-[5px] font-mono text-[11px] text-muted"
                  >
                    {t}
                  </span>
                ))}
                {p.techMore > 0 && (
                  <span className="px-1 py-[5px] font-mono text-[11px] text-faint">
                    +{p.techMore}
                  </span>
                )}
              </div>

              <div className="translate-y-[6px] font-sans text-xs text-primary-ink opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                View case study →
              </div>
            </motion.article>
          ))}

          {visible.length > 0 && (
            <motion.div
              key="building-next"
              layout={!reduced}
              className="flex min-h-[236px] animate-breathe flex-col items-center justify-center gap-3 rounded-[14px] border border-dashed border-white/10 p-6"
            >
              <PlusIcon size={24} className="text-faint" />
              <span className="font-mono text-[13px] text-faint">Building next…</span>
            </motion.div>
          )}
        </AnimatePresence>

        {visible.length === 0 && (
          <div className="col-span-full flex min-h-[240px] flex-col items-center justify-center gap-[14px]">
            <FolderIcon className="text-faint" />
            <span className="font-mono text-sm text-faint">
              No projects in this category yet.
            </span>
          </div>
        )}
      </div>
    </>
  );
}
