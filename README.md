# Vue Designer Nuxt CSS - Quick start template

This is a starter template that pre-includes the [Pinegrow Nuxt Module](https://www.npmjs.com/package/@pinegrow/nuxt-module) and other goodies for Vue Designer.

## Vue Designer

A desktop visual editor for Vue apps supporting Mac, Windows, and Linux by [Pinegrow](https://pinegrow.com/). Take it for a free trial at [Vue Designer](https://pinegrow.com/vue-designer)!

It lets you visually design 🎨 your Vue single file components and boosts your productivity and creativity while building your component-based Vue apps.

It smartly integrates with your ⚡️ [Vite](https://vitejs.dev/) based CLI and provides an amazing developer experience with its powerful visual controls and features.

Clean code 😃, No lock-in - You are in control of your projects and development workflow ❤️

## Try it now!

### 1. Clone to local

[Create a repo from this template on GitHub](https://github.com/pinegrow/pg-nuxt/generate).

(or)

If you prefer to do it manually with the cleaner git history

```bash
npx giget@latest gh:pinegrow/pg-nuxt my-nuxt-app #project-name
cd my-nuxt-app
npm install #or use pnpm
```

## 2. Open in Vue Designer

Open your project in Vue Designer and follow the instructions displayed in the Config Panel (that should pop out automatically). Config Panel ⚙️ displays the key packages and the various links to their individual ecosystems and communities.

## Usage

### Start your development server

```bash
npm run dev
```

### Preview

```bash
npm run now # build & preview
```

### Build

```bash
npm run build # SPA SSR
npm run generate # SPA SSG (full-static)
```

And you will see the generated file in `dist` that's ready to be served.

### Deploy to Netlify

You can deploy this repo as a site on your own to explore and experiment with, by clicking this button.
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/pinegrow/pg-nuxt)

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Pre-packed

### Meta Framework (Vue-based)

- [Nuxt](https://nuxt.com/) - The Intuitive Vue Framework
  - 👉 Follow the Nuxt docs for the amazing list of [features](https://nuxt.com/docs/getting-started/introduction).

### UI Frameworks

- [CSS](https://vuejs.org/api/sfc-css-features.html) - Scoped CSS in Vue Single File Component (SFC).

### Icons

- [Nuxt Icon](https://github.com/nuxt-modules/icon) - use over 100,000 open-source [Iconify](https://iconify.design/) icons. Uses the **iconify** format for icon names, for example, `mdi:home`.

### Modules/Plugins

- [Pinegrow Nuxt Module](https://www.npmjs.com/package/@pinegrow/nuxt-module) - enables you to live-design your Vue single-file components visually in Vue Designer.

### Devtools

- [Nuxt Devtools](https://devtools.nuxtjs.org) - Enhance your DX (developer experience) with an amazing set of in-app features.
- [Vue Devtools](https://devtools.vuejs.org/guide/installation.html#standalone) - Official devtools that can be used as a standalone app alongside Vue Designer. It's configured as a Nuxt plugin (only during development).
  - **ACTION REQUIRED**: Currently deactivated. In `plugins/devtools.client.ts`, uncomment to activate.

### VS Code Extensions

- [VS Code Extensions](./.vscode/extensions.json & ./.vscode/settings.json)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE support
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://vuejs.org/guide/scaling-up/sfc.html)
- [ESLint](https://eslint.org) with [@nuxt/eslint-config](https://github.com/nuxt/eslint-config) - opinionated not-so-strict set of linting rules.
- [Prettier](https://prettier.io) with [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - format without conflicting with eslint rules.

### Typescript

This project allows JS, and strict mode is turned off. Update `tsconfig.ts` as required.

```json
{
  // https://nuxt.com/docs/guide/concepts/typescript
  "extends": "./.nuxt/tsconfig.json",
  "compilerOptions": {
    "allowJs": true,
    "strict": false
  }
}
```

## Community

- [Pinegrow Vue Designer](https://forum.pinegrow.com/c/vue-designer)
