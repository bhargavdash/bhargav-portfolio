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
  screenshot: string;
  demoFile: string;
  demoMeta: string;
  reverse: boolean;
  bar: "primary" | "accent";
  play: "light" | "accent";
  live: string;
  source: string;
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
    screenshot: "/nomad-ss.jpeg",
    demoFile: "nomad-demo.mp4",
    demoMeta: "Demo video · 2 min",
    reverse: false,
    bar: "primary",
    play: "light",
    live: "https://nomad-web-ten.vercel.app",
    source: "https://github.com/bhargavdash/nomad-web",
  },
  {
    index: "02",
    name: "Helix",
    tags: ["AI", "Analytics", "SSE Streaming", "Schema-Driven UI"],
    desc: "Claude.ai-style conversational data analyst. Natural language question → LLM-generated SQL → DuckDB execution → live-streaming charts with a visible reasoning trace. Bring-your-own-data: drag-drop CSV/XLSX → DuckDB ingest → chat against your own data. Every abstraction built by hand — no scaffolding. Hand-rolled SSE with schema-driven rendering (A2UI pattern).",
    tech: ["React", "Vite", "FastAPI", "DuckDB", "SSE", "Python", "TypeScript"],
    browserUrl: "helix.app",
    screenshot: "/helix-ss.jpeg",
    demoFile: "helix-demo.mp4",
    demoMeta: "Demo video · 3 min",
    reverse: true,
    bar: "accent",
    play: "accent",
    live: "https://analytics-dashboard-ui-six.vercel.app",
    source: "https://github.com/bhargavdash/analytics-dashboard-ui",
  },
];

export const gridProjects: GridProject[] = [
  {
    name: "DrawSync",
    catsLabel: "Full Stack · Frontend",
    cats: ["fullstack", "frontend"],
    isNew: true,
    desc: "Collaborative online canvas like Excalidraw — real-time multi-user drawing with live sync. Built from scratch using the HTML Canvas API (no canvas libraries). Monorepo via Turborepo, WebSocket backend for sub-100ms sync.",
    techShown: ["Next.js", "Node.js", "WebSocket", "PostgreSQL", "Prisma"],
    techMore: 3,
    source: "https://github.com/bhargavdash/DrawSync",
    live: "#",
  },
  {
    name: "StoryLens",
    catsLabel: "AI · Full Stack",
    cats: ["ai", "fullstack"],
    isNew: false,
    desc: "AI-powered storyteller — upload an image, get a genre-tailored story with TTS audio. Deep learning pipeline: image captioning → story generation → speech synthesis, deployed on GCP Cloud Run via Docker.",
    techShown: ["React", "FastAPI", "PyTorch", "Docker", "GCP"],
    techMore: 1,
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
