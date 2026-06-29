"use client";

import { useLenis } from "lenis/react";
import { useCallback } from "react";

/**
 * Returns a click handler that smooth-scrolls to an in-page anchor with a
 * 64px offset for the fixed nav. Uses the Lenis instance when present,
 * otherwise falls back to native scrolling.
 */
export function useScrollTo() {
  const lenis = useLenis();

  return useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
      const el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(el as HTMLElement, { offset: -64, duration: 1.1 });
      } else {
        (el as HTMLElement).scrollIntoView({ behavior: "smooth" });
      }
    },
    [lenis],
  );
}
