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
  {
    name: "Developer Coding Gym",
    catsLabel: "Tools · Frontend",
    cats: ["tools", "frontend"],
    isNew: false,
    desc: "Muscle-memory practice platform for the AI era — timed drills, pattern recall, and interview simulations with no autocomplete. The exact thing that atrophies when AI writes your code. In design.",
    techShown: ["React", "TypeScript", "CodeMirror", "Node.js"],
    techMore: 2,
    source: "#",
    live: "#",
  },
  {
    name: "This Portfolio",
    catsLabel: "Frontend",
    cats: ["frontend"],
    isNew: false,
    desc: "The site you're reading — hand-built motion system, 3D tilt card, custom cursor, scroll choreography, zero UI kit.",
    techShown: ["Next.js", "Tailwind", "Framer Motion", "TypeScript"],
    techMore: 0,
    source: "https://github.com/bhargavdash/bhargav-portfolio",
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
