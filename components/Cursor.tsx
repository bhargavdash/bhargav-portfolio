"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * Custom cursor: an instant dot + a spring-lagged ring that swells over
 * interactive elements (blend mode difference keeps it legible on any bg).
 * Only mounts on fine pointers without reduced-motion; otherwise the native
 * cursor is left untouched.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    setEnabled(true);
    const root = document.documentElement;
    root.classList.add("custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as Element | null;
      setHover(Boolean(t?.closest?.("a, button, [data-magnetic]")));
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("pointerover", over, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("pointerover", over);
      root.classList.remove("custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[10000] -ml-[2.5px] -mt-[2.5px] h-[5px] w-[5px] rounded-full bg-ink"
        style={{ x, y }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[10000] -ml-[15px] -mt-[15px] h-[30px] w-[30px] rounded-full border-[1.5px] border-[rgba(240,240,245,0.55)] mix-blend-difference"
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: hover ? 1.7 : 1,
          backgroundColor: hover ? "rgba(240,240,245,0.12)" : "rgba(240,240,245,0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      />
    </>
  );
}
