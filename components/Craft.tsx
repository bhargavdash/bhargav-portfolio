import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import AnimatedBar from "@/components/AnimatedBar";

const coreStack = [
  { abbr: "Re", name: "React 18", desc: "Fiber, hooks, concurrent rendering, performance patterns" },
  { abbr: "Ts", name: "TypeScript", desc: "Comfortable daily use, advancing toward advanced generics" },
  { abbr: "RN", name: "React Native", desc: "Expo SDK 55, navigation, Reanimated, cross-platform parity" },
  { abbr: "Tw", name: "Tailwind + SCSS", desc: "Design systems, utility-first, theme customization, SCSS at scale" },
];

const aiSystems = [
  { name: "LangGraph", sub: "5-agent parallel pipeline in Nomad" },
  { name: "SSE Streaming", sub: "Hand-rolled in Helix (POST + ReadableStream)" },
  { name: "A2UI / Schema-Driven", sub: "LLM → Pydantic schema → Recharts render" },
  { name: "FastAPI", sub: "StreamingResponse, dependency injection" },
  { name: "DuckDB", sub: "OLAP vs OLTP, 200k row analytics dataset" },
];

const backendChips = [
  "Node.js", "Express.js", "FastAPI", "PostgreSQL", "Supabase", "Redis", "Prisma ORM", "Docker", "AWS", "GCP",
];

const certDomains = [
  "Agentic Systems", "MCP Design", "Prompt Engineering", "Context Management", "Multi-Agent Orchestration",
];

const building = [
  { label: "DSA Patterns", meta: "113 / 300", pct: 38 },
  { label: "Frontend Deep Topics", meta: "49 topics · 6 categories", pct: 30 },
  { label: "System Design", meta: "10 concepts", pct: 20 },
];

const cell =
  "rounded-[16px] border border-white/[0.07] bg-surface transition-[border-color,background] duration-300";
const eyebrow = "font-mono text-xs tracking-[0.04em] text-faint";

export default function Craft() {
  return (
    <section
      id="craft"
      className="relative px-[clamp(20px,6vw,96px)] pt-[clamp(80px,11vh,130px)]"
    >
      <div className="mx-auto max-w-[1240px]">
        <SectionHeading
          index="02"
          title="Craft"
          intro="The tools I've worked in depth — not just listed on a resume."
        />

        <Reveal
          delay={80}
          className="mt-11 grid auto-rows-[minmax(132px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12"
        >
          {/* Core stack */}
          <div className={`${cell} p-[30px] sm:col-span-2 md:col-span-6 md:row-span-2`}>
            <div className={`${eyebrow} mb-6`}>CORE STACK</div>
            <div className="flex flex-col gap-5">
              {coreStack.map((s) => (
                <div key={s.name} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-primary/[0.22] bg-primary/[0.12] font-mono text-[15px] font-semibold text-primary">
                    {s.abbr}
                  </span>
                  <div>
                    <div className="font-sans text-lg font-medium text-ink">{s.name}</div>
                    <div className="mt-[3px] font-sans text-[13px] leading-[1.5] text-muted">
                      {s.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MFE architecture — primary-tinted card (pairs with the
              accent-tinted cert card; replaces the old left accent stripe). */}
          <div className="relative rounded-[16px] border border-primary/20 bg-primary/[0.05] p-6 transition-[border-color] duration-300 md:col-span-3 md:row-span-1">
            <div className="mb-[18px] font-mono text-xs tracking-[0.04em] text-primary-ink">
              MICROFRONTEND ARCHITECTURE
            </div>
            <div className="flex items-center gap-[10px]">
              <span className="rounded-lg border border-white/10 bg-surface-2 px-[11px] py-2 font-mono text-[11px] text-ink">
                Shell
              </span>
              <span className="text-base text-primary-ink">→</span>
              <div className="flex flex-col gap-[7px]">
                <span className="rounded-lg border border-white/10 bg-surface-2 px-[11px] py-[6px] font-mono text-[11px] text-muted">
                  Remote A
                </span>
                <span className="rounded-lg border border-white/10 bg-surface-2 px-[11px] py-[6px] font-mono text-[11px] text-muted">
                  Remote B
                </span>
              </div>
            </div>
            <div className="mt-[18px] font-sans text-xs leading-[1.5] text-faint">
              Module Federation · single-spa · dynamic manifest loading
            </div>
          </div>

          {/* Claude cert */}
          <div className="rounded-[16px] border border-accent/20 bg-accent/[0.06] p-6 transition-[border-color] duration-300 md:col-span-3 md:row-span-1">
            <div className="font-sans text-base font-semibold leading-[1.35] text-accent">
              Anthropic Claude Certified Architect
            </div>
            <div className="mt-2 font-mono text-xs text-accent/85">2026 · All 5 domains passed</div>
            <div className="mt-[14px] font-mono text-[11px] leading-[1.9] text-faint">
              {certDomains.map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>
          </div>

          {/* AI systems */}
          <div
            className={`${cell} relative overflow-hidden p-6 md:col-span-3 md:row-span-2`}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40"
              style={{
                background: "radial-gradient(closest-side, rgba(108,99,255,0.14), transparent)",
              }}
            />
            <div className={`relative ${eyebrow} mb-5`}>AI SYSTEMS</div>
            <div className="relative flex flex-col gap-4">
              {aiSystems.map((a) => (
                <div key={a.name}>
                  <div className="font-sans text-[15px] font-medium text-ink">{a.name}</div>
                  <div className="mt-[2px] font-sans text-[13px] italic text-faint">{a.sub}</div>
                </div>
              ))}
            </div>
            <div className="relative mt-5 font-mono text-[11px] text-primary-ink">
              No scaffolding. No black boxes.
            </div>
          </div>

          {/* Backend capable */}
          <div className={`${cell} p-6 md:col-span-3 md:row-span-2`}>
            <div className={`${eyebrow} mb-[18px]`}>BACKEND CAPABLE</div>
            <div className="flex flex-wrap gap-2">
              {backendChips.map((b) => (
                <span
                  key={b}
                  className="rounded-lg bg-surface-2 px-[11px] py-[7px] font-mono text-xs text-muted"
                >
                  {b}
                </span>
              ))}
            </div>
            <div className="mt-[18px] font-sans text-[13px] leading-[1.55] text-faint">
              Auth, CRUD, migrations, caching — not the focus, but not a gap.
            </div>
          </div>

          {/* Currently building */}
          <div
            className={`${cell} px-[30px] py-[26px] sm:col-span-2 md:col-span-6 md:row-span-1`}
          >
            <div className="mb-5 flex items-baseline justify-between">
              <div className={eyebrow}>CURRENTLY BUILDING</div>
              <div className="font-mono text-[11px] text-faint">2026 targets</div>
            </div>
            <div className="flex flex-col gap-4">
              {building.map((b) => (
                <div key={b.label}>
                  <div className="mb-[7px] flex justify-between">
                    <span className="font-sans text-[13px] text-ink">{b.label}</span>
                    <span className="font-mono text-[11px] text-muted">{b.meta}</span>
                  </div>
                  <AnimatedBar pct={b.pct} />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
