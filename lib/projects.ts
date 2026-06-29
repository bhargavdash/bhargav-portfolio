// Project data for the Work section: two featured case studies + a
// filterable grid. Categories drive the filter tabs.

export type Category = "ai" | "frontend" | "mobile" | "fullstack" | "tools";

export interface FeaturedProject {
  index: string;
  name: string;
  tags: string[];
  desc: string;
  tech: string[];
  browserUrl: string;
  demoFile: string;
  demoMeta: string;
  reverse: boolean;
  bar: "primary" | "accent";
  play: "light" | "accent";
  live: string;
  caseStudy: string;
}

export interface GridProject {
  name: string;
  catsLabel: string;
  cats: Category[];
  isNew: boolean;
  desc: string;
  techShown: string[];
  techMore: number;
  source: string;
  live: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    index: "01",
    name: "Nomad",
    tags: ["AI Pipeline", "Cross-Platform", "Full Stack"],
    desc: "Multi-platform AI travel itinerary app. Five LangGraph research agents run in parallel — scraping YouTube, Reddit, and travel blogs — synthesize via Cerebras Qwen-3, and stream a day-by-day itinerary live. Built on React Native + Next.js + Node/Express + FastAPI + Supabase. Deployed production on Railway and Vercel.",
    tech: ["React Native", "Next.js", "LangGraph", "FastAPI", "Supabase", "Redis", "TypeScript"],
    browserUrl: "nomad.travel",
    demoFile: "nomad-demo.mp4",
    demoMeta: "Demo video · 2 min",
    reverse: false,
    bar: "primary",
    play: "light",
    live: "#", // PLACEHOLDER
    caseStudy: "#", // PLACEHOLDER
  },
  {
    index: "02",
    name: "Helix",
    tags: ["AI", "Analytics", "SSE Streaming", "Schema-Driven UI"],
    desc: "Claude.ai-style conversational data analyst. Natural language question → LLM-generated SQL → DuckDB execution → live-streaming charts with a visible reasoning trace. Bring-your-own-data: drag-drop CSV/XLSX → DuckDB ingest → chat against your own data. Every abstraction built by hand — no scaffolding. Hand-rolled SSE with schema-driven rendering (A2UI pattern).",
    tech: ["React", "Vite", "FastAPI", "DuckDB", "SSE", "Python", "TypeScript"],
    browserUrl: "helix.app",
    demoFile: "helix-demo.mp4",
    demoMeta: "Demo video · 3 min",
    reverse: true,
    bar: "accent",
    play: "accent",
    live: "#", // PLACEHOLDER
    caseStudy: "#", // PLACEHOLDER
  },
];

export const gridProjects: GridProject[] = [
  {
    name: "Module Federation Playground",
    catsLabel: "Frontend · Tools",
    cats: ["frontend", "tools"],
    isNew: true,
    desc: "A sandbox for dynamic remote loading, shared-scope version negotiation, and runtime manifest swaps across single-spa shells.",
    techShown: ["single-spa", "Webpack", "Module Federation", "TypeScript"],
    techMore: 0,
    source: "#",
    live: "#",
  },
  {
    name: "Streaming SSE Kit",
    catsLabel: "AI · Full Stack",
    cats: ["ai", "fullstack"],
    isNew: false,
    desc: "A reusable hook + server helper for hand-rolled SSE: POST + ReadableStream, backpressure, auto-reconnect, and schema-typed events.",
    techShown: ["FastAPI", "React", "TypeScript", "Zod"],
    techMore: 1,
    source: "#",
    live: "#",
  },
  {
    name: "Reanimated Lab",
    catsLabel: "Mobile",
    cats: ["mobile"],
    isNew: false,
    desc: "Gesture-driven micro-interactions in React Native — shared-element transitions, springy bottom sheets, 60fps on device.",
    techShown: ["React Native", "Reanimated", "Expo", "Gesture Handler"],
    techMore: 0,
    source: "#",
    live: "#",
  },
  {
    name: "DSA Atlas",
    catsLabel: "Tools",
    cats: ["tools"],
    isNew: false,
    desc: "113+ problems mapped into 18 reusable patterns with complexity notes and a spaced-repetition review queue.",
    techShown: ["React", "IndexedDB", "TypeScript"],
    techMore: 0,
    source: "#",
    live: "#",
  },
  {
    name: "Prisma Audit Trail",
    catsLabel: "Full Stack · Tools",
    cats: ["fullstack", "tools"],
    isNew: false,
    desc: "Drop-in Prisma middleware that versions every mutation into an append-only audit log with field-level diffing.",
    techShown: ["Prisma", "PostgreSQL", "Node.js"],
    techMore: 0,
    source: "#",
    live: "#",
  },
  {
    name: "This Portfolio",
    catsLabel: "Frontend",
    cats: ["frontend"],
    isNew: false,
    desc: "The site you're reading — hand-built motion system, custom cursor, scroll choreography, zero UI kit.",
    techShown: ["React", "Tailwind", "Framer Motion"],
    techMore: 0,
    source: "#",
    live: "#",
  },
];

export const filters: { label: string; value: "all" | Category }[] = [
  { label: "All", value: "all" },
  { label: "AI", value: "ai" },
  { label: "Frontend", value: "frontend" },
  { label: "Mobile", value: "mobile" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Tools", value: "tools" },
];
