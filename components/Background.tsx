import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { CertBadge } from "@/components/icons";

const bullets = [
  "Designed and built Module Federation shell + remote architecture for a client-facing React product",
  "Dynamic manifest-driven MFE loading with single-spa orchestration — no hard-coded remote URLs",
  "Cross-team Webpack shared scope management and version collision resolution",
  "Sprint feature delivery across both architectural and implementation roles",
];

export default function Background() {
  return (
    <section
      id="background"
      className="relative px-[clamp(20px,6vw,96px)] pt-[clamp(80px,11vh,130px)]"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-12">
          <SectionHeading index="03" title="Background" />
        </div>

        <div className="flex flex-col gap-[clamp(32px,5vw,72px)] md:flex-row">
          {/* Experience timeline */}
          <Reveal className="md:flex-[1_1_58%]">
            <div className="relative pl-[30px]">
              <div className="absolute bottom-1 left-1 top-2 w-px bg-white/10" />
              <div className="absolute left-0 top-[6px] h-[9px] w-[9px] rounded-full bg-primary shadow-[0_0_0_4px_rgba(108,99,255,0.15)]" />
              <div className="font-mono text-xs tracking-[0.04em] text-primary-ink">
                2025 → PRESENT
              </div>
              <h3 className="mb-1 mt-[10px] font-sans text-[22px] font-semibold text-ink">
                Accenture, India
              </h3>
              <div className="mb-[22px] font-sans text-[15px] text-muted">
                Frontend Engineer · MFE Architect
              </div>
              <ul className="m-0 flex list-none flex-col gap-[14px] p-0">
                {bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 font-sans text-[15px] leading-[1.55] text-muted"
                  >
                    <span className="shrink-0 text-primary-ink">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Side cards */}
          <div className="flex flex-col gap-4 md:flex-[1_1_38%]">
            <Reveal delay={60} className="rounded-[16px] border border-accent/20 bg-accent/[0.06] p-6">
              <div className="flex items-center gap-3">
                <CertBadge size={24} className="shrink-0 text-accent" />
                <div className="font-sans text-base font-semibold text-accent">
                  Claude Certified Architect
                </div>
              </div>
              <p className="mt-[14px] font-sans text-[13.5px] leading-[1.6] text-muted">
                Passed the official Anthropic architect certification covering agentic systems, MCP
                server design, multi-agent orchestration, prompt engineering, and context
                management. 5 domains, one of the first developers globally to earn this credential.
              </p>
              <div className="mt-[14px] font-mono text-xs text-accent/85">Anthropic · June 2026</div>
            </Reveal>

            <Reveal delay={100} className="rounded-[16px] border border-primary/20 bg-surface p-[22px]">
              <div className="font-sans text-[15px] font-semibold text-ink">
                Nomad — Live in Production
              </div>
              <div className="mt-[6px] font-sans text-[13px] leading-[1.5] text-muted">
                Railway + Vercel, multi-platform.
              </div>
            </Reveal>

            <Reveal delay={140} className="rounded-[16px] border border-primary/20 bg-surface p-[22px]">
              <div className="font-sans text-[15px] font-semibold text-ink">
                Helix — Phase B Complete
              </div>
              <div className="mt-[6px] font-sans text-[13px] leading-[1.5] text-muted">
                Bring-your-own-data analytics, SSE, DuckDB.
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
