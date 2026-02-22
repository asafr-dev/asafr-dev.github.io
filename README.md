# asafr-dev.github.io

[![Live](https://img.shields.io/badge/live-asafr--dev.github.io-informational?style=for-the-badge)](https://asafr-dev.github.io)
[![CI](https://img.shields.io/github/actions/workflow/status/asafr-dev/asafr-dev.github.io/ci.yml?branch=main&style=for-the-badge&label=CI)](https://github.com/asafr-dev/asafr-dev.github.io/actions/workflows/ci.yml)
[![Deploy Pages](https://img.shields.io/github/actions/workflow/status/asafr-dev/asafr-dev.github.io/deploy-pages.yml?branch=main&style=for-the-badge&label=DEPLOY%20PAGES)](https://github.com/asafr-dev/asafr-dev.github.io/actions/workflows/deploy-pages.yml)
[![CodeQL](https://img.shields.io/github/actions/workflow/status/asafr-dev/asafr-dev.github.io/codeql.yml?branch=main&style=for-the-badge&label=CODEQL)](https://github.com/asafr-dev/asafr-dev.github.io/actions/workflows/codeql.yml)

One-page portfolio site with these sections: Featured project cards (demo/docs + repo), Experience (CV-style timeline), Skills, and Contact.

## Quickstart

```bash
npm ci
npm run dev
```

Open: [http://localhost:5173](http://localhost:8080)

### Build

```bash
npm run build
npm run preview
```

## How to test

```bash
npm check
```

## Project structure

For the full directory map and “what goes where” conventions, see
[STRUCTURE.md](docs/STRUCTURE.md).

- `src/` – source code
- `.github/workflows/` – CI automation
- `public/` – static assets
- `docs/` – longer-form documentation (architecture, deployment)

## Documentation

See [documentation](docs/)

## Contributing

See the [contributing guidelines](https://github.com/asafr-dev/.github/blob/main/CONTRIBUTING.md)

## Security

See the [security policy](https://github.com/asafr-dev/.github/blob/main/SECURITY.md)

## License

See [LICENSE](LICENSE)
