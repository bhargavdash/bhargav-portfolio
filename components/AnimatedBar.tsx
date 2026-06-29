"use client";

import { motion, useReducedMotion } from "motion/react";
import { ease } from "@/lib/motion";

/** Progress bar that fills from 0 to `pct`% when it enters the viewport. */
export default function AnimatedBar({ pct }: { pct: number }) {
  const reduced = useReducedMotion();

  return (
    <div className="h-[5px] overflow-hidden rounded-full bg-surface-2">
      <motion.div
        className="h-full rounded-full bg-primary"
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true, amount: 0.6 }}
        transition={reduced ? { duration: 0 } : { duration: 1.3, ease: ease.out }}
      />
    </div>
  );
}
