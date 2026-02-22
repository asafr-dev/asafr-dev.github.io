export const profile = {
  name: "Asaf Rafaeli",
  title: "Remote Full-Stack Developer",
  location: "Tel-Aviv, Israel (Remote)",
  email: "asaf.rafaeli5@gmail.com",
  summary:
    "10+ years delivering TypeScript-first React/Next.js applications backed by Node.js services and Docker-based deployments. Strong at automation (Python/SQL), CI/CD, and async delivery across time zones — including AI-assisted dev with test + CI guardrails."
};

export const highlights = [
  "TypeScript-first React/Next.js + Node.js",
  "Vite + modern DX",
  "Docker + GitHub Actions CI/CD",
  "Python automation (Pandas/SQL)",
  "PostgreSQL + Redis",
  "AI-assisted dev (ChatGPT, Copilot, Cursor, Claude, Codex) with tests + CI",
  "Async, distributed teams"
];

export const skills = [
  { group: "Frontend", items: ["TypeScript", "React", "Next.js", "Vite", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "Python (FastAPI)", "Express", "REST", "GraphQL"] },
  { group: "Data", items: ["PostgreSQL", "Prisma", "Redis", "MongoDB", "MySQL", "Indexing"] },
  { group: "DevOps", items: ["Docker", "GitHub Actions (CI/CD)", "AWS", "Linux", "Nginx"] },
  {
    group: "AI-assisted dev",
    items: ["ChatGPT", "GitHub Copilot", "Cursor", "Claude Code", "Codex"]
  },
  { group: "Quality", items: ["Playwright", "Vitest", "pytest", "Linting", "Code review"] }
];

export const experience = [
  {
    role: "Senior Developer (Self-Employed)",
    when: "Oct 2018 – Dec 2025",
    where: "Tel-Aviv, Israel (Remote)",
    bullets: [
      "Delivered TypeScript-first React/Next.js frontends + Node services containerized with Docker; accelerated release cadence via automation and CI.",
      "Automated backend tasks and data workflows with Python (Pandas/SQL), reducing manual processing.",
      "Shipped with CI-first guardrails (lint/test/build) and pragmatic testing (unit + smoke) for fast reviewability."
    ]
  },
  {
    role: "Full-Stack Developer, Twik",
    when: "Feb 2016 – Aug 2018",
    where: "Tel-Aviv, Israel (Remote)",
    bullets: [
      "Led React/Node development of a personalization service; improved demo engagement and onboarding speed.",
      "Built a backend proxy for live demos and mentored juniors on test-first habits."
    ]
  },
  {
    role: "Personal Project",
    when: "Feb 2015 – Dec 2015",
    where: "Tel-Aviv, Israel",
    bullets: [
      "Built a man-in-the-middle proxy enabling live website content editing.",
      "Used Node.js, OpenSSL, JavaScript/HTML, Sass, Angular, and Git to support live rewrite workflows."
    ]
  },
  {
    role: "Web Developer, WebPick",
    when: "Mar 2013 – Oct 2014",
    where: "Tel-Aviv, Israel",
    bullets: [
      "Delivered high-traffic PHP/Node.js projects serving millions of monthly users.",
      "Built a cross-browser extension framework to speed delivery across major browsers.",
      "Created headless-browser QA automation to reduce regression/test cycles."
    ]
  },
  {
    role: "Browser Extension Engineer, WiseStamp",
    when: "Mar 2011 – Dec 2012",
    where: "Tel-Aviv, Israel",
    bullets: [
      "Expanded extension support across multiple browsers; improved release velocity through practical workarounds and automation."
    ]
  }
];

export const projects = [
  {
    name: "SupportDesk App",
    repo: "https://github.com/asafr-dev/supportdesk-app",
    demo: "https://github.com/asafr-dev/supportdesk-app#demo",
    desc: "Flagship SupportDesk MVP: roles (admin/agent/user), tickets, comments, audit log, search/filters, tests, Docker + CI.",
    tags: ["TypeScript", "Next.js", "Prisma", "PostgreSQL", "Docker", "Vitest", "Playwright"]
  },
  {
    name: "SupportDesk API (FastAPI)",
    repo: "https://github.com/asafr-dev/supportdesk-api",
    demo: "https://github.com/asafr-dev/supportdesk-api#documentation",
    desc: "Service-separated tickets API: FastAPI + SQLAlchemy + Postgres, OpenAPI docs, tests, CI.",
    tags: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "Pytest", "Docker", "OpenAPI"]
  },
  {
    name: "SupportDesk Admin UI (React)",
    repo: "https://github.com/asafr-dev/supportdesk-admin-ui",
    demo: "https://github.com/asafr-dev/supportdesk-admin-ui#quickstart",
    desc: "Thin but legit admin UI for the FastAPI service: list/detail/status update, strong loading/error states, CI.",
    tags: ["TypeScript", "React", "Vite", "TanStack Query", "CI"]
  },
  {
    name: "Reusable Workflows",
    repo: "https://github.com/asafr-dev/reusable-workflows",
    demo: "https://github.com/asafr-dev/reusable-workflows",
    desc: "Reusable workflows + shared configs used by all repos: Node/Python CI baseline, scaffolds, and copy/paste adoption docs.",
    tags: ["GitHub Actions", "CI/CD", "Node.js", "Python", "Scaffolds"]
  }
];

export const contact = {
  website: "https://asafr-dev.github.io",
  github: "https://github.com/asafr-dev"
};
