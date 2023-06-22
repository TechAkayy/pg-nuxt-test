// import { fileURLToPath, URL } from 'node:url'

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      title: `Vue Designer`,
      description: 'Vue Designer Nuxt with CSS - Quick start template',
      author: 'Pinegrow',
      nav: [{ text: 'Home', link: '/' }],
    },
    app: {
      baseURL: '/',
    },
  },
  modules: ['@pinegrow/nuxt-module', 'nuxt-icon', '@nuxt/devtools'],
  pinegrow: {
    liveDesigner: {
      iconPreferredCase: 'iconify', // nuxt-icon uses iconfiy format for icon names
      devtoolsKey: 'devtools', // see plugins/devtools.client.ts
      // plugins: [
      //   {
      //     name: 'My Awesome Lib 3.0',
      //     key: 'my-awesome-lib',
      //     pluginPath: fileURLToPath(
      //       new URL('./my-awesome-lib/web-types.json', import.meta.url),
      //     ),
      //   },
      // ],
    },
  },
})
