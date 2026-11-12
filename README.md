# michel-silveira.github.io

My personal homepage, served at [michel-silveira.github.io](https://michel-silveira.github.io).

It started in 2020 as a university web development assignment, built with plain HTML, CSS and Bootstrap 4. It is now being rebuilt with **Angular 22**.

## Migration status

🚧 In progress: see [#2 Migrate project to Angular 22](https://github.com/michel-silveira/michel-silveira.github.io/issues/2).

The work happens on the `angular-migration` branch. `master` still serves the original 2020 site until the Angular version is deployed.

## Project structure

```
├── public/              # Static files, copied as-is to the root of the build output
│   ├── favicon.png
│   ├── fonts/
│   └── videos/
├── src/
│   ├── index.html       # Host page
│   └── styles.css       # Global styles
└── README.md
```

The Angular workspace files (`angular.json`, `package.json`, `src/app/`, etc.) will be added in a later step.

## Disclaimer

No asset or resource on this website is used for commercial purposes.
