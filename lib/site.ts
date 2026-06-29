// Single source of truth for identity + outbound links.
// NOTE: links marked PLACEHOLDER are "#" — swap in real URLs (and drop a
// resume PDF into /public, then point `resume` at it).

export const site = {
  name: "Bhargav Dash",
  initials: "BD",
  role: "Frontend Engineer",
  company: "Accenture, India",
  email: "bhargavdash@gmail.com",
  tagline: "React · React Native · MFE Architecture · AI Systems",
  availability: "Open to Frontend and Full-Stack roles · India / Remote",
  metaTitle: "Bhargav Dash — Frontend Engineer",
  metaDescription:
    "Frontend engineer building React, React Native, and module-federation systems — plus hand-rolled AI pipelines. React · TypeScript · MFE architecture.",
  links: {
    github: "#", // PLACEHOLDER
    linkedin: "#", // PLACEHOLDER
    resume: "#", // PLACEHOLDER — e.g. "/Bhargav-Dash-Resume.pdf"
  },
  nav: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#background" },
    { label: "Contact", href: "#contact" },
  ],
  stats: [
    { value: 1, suffix: "yr+", label: "Experience", tone: "ink" },
    { value: 113, suffix: "+", label: "DSA Solved", tone: "ink" },
    { value: 2, suffix: "", label: "Live Projects", tone: "primary" },
    { value: 1, suffix: "", label: "Cert Held", tone: "accent" },
  ],
} as const;

export type Stat = (typeof site.stats)[number];
