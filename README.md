# TP7 - Plan de Desarrollo y Mantenimiento - Ingeniería de Software

## Features
### Overview

- ⚡️&nbsp; [Vite 4](https://vitejs.dev/)
- ⚛️&nbsp; [React 18](https://beta.reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- 🧪&nbsp; [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- 🚀&nbsp; [GitHub Actions](https://docs.github.com/en/actions) with deployment on [GitHub Pages](https://pages.github.com/)

### Coding Style

- VSCode settings & extensions recommendations
- [EditorConfig](https://editorconfig.org/)
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) configured (with [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier))

### Git Hooks

- [Husky](https://typicode.github.io/husky/#/)
  - [`commitlint`](https://commitlint.js.org/) @ `commit-msg`
  - [`lint-staged`](https://github.com/okonet/lint-staged) @ `precommit`

### GitHub Actions

- **Build**, **Test** and **Coverage Analysis** (with [Codecov](https://about.codecov.io/)) at each commit
- **Deploy** to [GitHub Pages](https://pages.github.com/) on main branch


<br>

## Getting Started

### Usage

#### Install

```sh
pnpm i
```

#### Dev

```sh
pnpm dev
```

#### Build


```sh
# normal build
pnpm build

# build with 404.html file added for GitHub Pages
pnpm build:ci
```
> See explanation of `404.html` file [here](#github-pages)
#### Test

```sh
# without coverage
pnpm test

# with coverage
pnpm test:ci
```
#### Serve

```sh
pnpm serve
```
