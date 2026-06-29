import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-[18px] border-t border-white/[0.05] px-[clamp(20px,6vw,96px)] py-[30px] text-center sm:flex-row sm:text-left">
      <span className="font-sans text-[13px] text-faint">© 2026 {site.name}</span>
      <span className="font-mono text-sm font-semibold text-white/15">{site.initials}</span>
      <span className="font-mono text-xs text-faint">
        Built with React · Tailwind · Framer Motion
      </span>
    </footer>
  );
}
