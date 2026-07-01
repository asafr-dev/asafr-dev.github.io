# Repository structure

Purpose: a fast map of this repo for onboarding and “where does X go?”

## Directory map (trimmed)

```text
.
├── README.md  # Main entrypoint (what it is + quickstart + links)
├── LICENSE
├── package.json
├── docs  # Longer-form docs
│   ├── STRUCTURE.md  # Repo map (you are here)
│   ├── ARCHITECTURE.md  # Key doc
│   └── DEPLOYMENT.md  # Key doc
├── src  # Application/source code
│   ├── __tests__
│   ├── components
│   ├── App.tsx
│   └── content.ts
├── .github  # GitHub metadata (CI, automation)
│   ├── workflows  # GitHub Actions workflows
│   ├── dependabot.yml
│   └── CODEOWNERS
└── public  # Static assets served as-is
    ├── robots.txt
    └── sitemap.xml
```

## Conventions (what goes where)

- `docs/`: canonical docs; README links here.
- `src/`: application code; keep build output out of source control.
- `public/`: static assets served as-is.
- `.github/`: CI + automation; keep workflow logic out of README.
