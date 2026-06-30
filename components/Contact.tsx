"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { CopyIcon } from "@/components/icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
    } catch {
      /* clipboard may be blocked; toast still confirms intent */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  return (
    <section
      id="contact"
      className="relative px-[clamp(20px,6vw,96px)] py-[clamp(110px,16vh,170px)] text-center"
    >
      <Reveal className="mx-auto max-w-[900px]">
        <h2 className="m-0 font-display text-[clamp(40px,7vw,72px)] font-semibold leading-[1.04] tracking-[-0.03em] text-ink">
          Let&rsquo;s build
          <br />
          <span className="font-sans font-normal italic text-primary">something</span>
          <span className="text-accent">.</span>
        </h2>

        <div className="relative mt-10 inline-flex items-center gap-[14px]">
          <a
            href={`mailto:${site.email}`}
            data-magnetic
            className="group relative font-mono text-[clamp(18px,3vw,22px)] text-ink no-underline"
          >
            {site.email}
            <span className="absolute -bottom-[7px] left-0 right-0 h-[2px] origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
          </a>
          <button
            type="button"
            onClick={copy}
            aria-label="Copy email address"
            className="inline-flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-[10px] border border-white/[0.12] bg-transparent text-muted transition-[color,border-color] duration-200 hover:border-primary/40 hover:text-ink"
          >
            <CopyIcon />
          </button>
          <span
            aria-live="polite"
            className={`absolute -bottom-[30px] left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-xs text-success transition-opacity duration-200 ${
              copied ? "opacity-100" : "opacity-0"
            }`}
          >
            Copied ✓
          </span>
        </div>

        <div className="mt-11 flex flex-wrap justify-center gap-10">
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-muted no-underline transition-colors duration-200 hover:text-ink"
          >
            GitHub ↗
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-muted no-underline transition-colors duration-200 hover:text-ink"
          >
            LinkedIn ↗
          </a>
          <a
            href={site.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-muted no-underline transition-colors duration-200 hover:text-ink"
          >
            Resume PDF ↗
          </a>
        </div>

        <div className="mt-8 font-mono text-sm text-faint">{site.availability}</div>
      </Reveal>
    </section>
  );
}
