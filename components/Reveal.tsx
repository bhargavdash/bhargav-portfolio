"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { ease } from "@/lib/motion";

/**
 * Fades + lifts its children in once, when scrolled into view. `delay` is in
 * milliseconds to mirror the design's stagger values. Honors reduced motion.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  id,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  id?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -7% 0px" }}
      transition={
        reduced ? { duration: 0 } : { duration: 0.6, ease: ease.inOut, delay: delay / 1000 }
      }
    >
      {children}
    </motion.div>
  );
}
