"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { useScrollTo } from "@/lib/hooks";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const scrollTo = useScrollTo();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[100] flex items-center justify-between border-b px-[clamp(20px,6vw,96px)] py-[18px] transition-[background-color,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? "border-white/[0.07] bg-[rgba(13,13,18,0.82)] backdrop-blur-[14px] backdrop-saturate-[1.4]"
          : "border-white/[0.05] bg-transparent"
      }`}
    >
      <a
        href="#top"
        onClick={(e) => scrollTo(e, "#top")}
        className="font-mono text-base font-semibold tracking-[0.02em] text-ink no-underline"
      >
        {site.initials}
      </a>
      <div className="flex items-center gap-[30px] max-[560px]:gap-[18px]">
        {site.nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => scrollTo(e, item.href)}
            className="font-sans text-sm tracking-[0.06em] text-ink no-underline opacity-70 transition-opacity duration-200 hover:opacity-100"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
