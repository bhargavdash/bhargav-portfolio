"use client";

import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Global Lenis smooth scroll. Mounted once in the root layout, wrapping the
 * whole page. Under prefers-reduced-motion it falls back to native scrolling
 * (lerp 1, no wheel smoothing) — same DOM, so no hydration mismatch.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();

  const options = reduced
    ? { lerp: 1, smoothWheel: false, syncTouch: false }
    : {
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      };

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}
