# michel-silveira.github.io

My personal homepage, served at [michel-silveira.github.io](https://michel-silveira.github.io).

It started in 2020 as a university web development assignment, built with plain HTML, CSS and Bootstrap 4, and has since been migrated to **Angular 22** (see [#2](https://github.com/michel-silveira/michel-silveira.github.io/issues/2)).

## Tech stack

- [Angular 22](https://angular.dev) with TypeScript and SCSS
- [pnpm](https://pnpm.io) as the package manager
- [Vitest](https://vitest.dev) for unit tests
- GitHub Actions and GitHub Pages for deployment

## Getting started

Requirements: Node.js 26 (see `.nvmrc`) and pnpm.

```bash
pnpm install       # install dependencies
pnpm ng serve      # start the dev server at http://localhost:4200
pnpm ng test       # run unit tests
pnpm ng build      # build for production into dist/
```

## Deployment

Every push and pull request is tested and built by the [Build and deploy](.github/workflows/deploy.yml) workflow. Pushes to `main` are also deployed to GitHub Pages.

## Project structure

```
├── .github/workflows/   # CI/CD workflow
├── public/              # Static files, copied as-is to the root of the build output
│   ├── favicon.png
│   ├── fonts/
│   └── videos/
├── src/
│   ├── app/             # Root component and app configuration
│   ├── index.html       # Host page
│   ├── main.ts          # Application entry point
│   └── styles.scss      # Global styles
├── angular.json         # Angular workspace configuration
└── package.json
```

## Disclaimer

No asset or resource on this website is used for commercial purposes.
