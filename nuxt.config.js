
export default defineNuxtConfig({
  ssr: false,

  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
      apikey: process.env.APIKEY
    },
  },

  css: [
    '~/css/main.sass'
  ],

  routes: {
    '/*': { cors: true }
  },

  modules: [
    'nuxt-quasar-ui',
    '@nuxtjs/eslint-module'
  ],

  quasar: {
    extras: {
      fontIcons: ['material-icons']
    },

    lang: 'pt-BR',
    config: {
      notify:{},
      lang: 'pt-BR'
    }
  },


  vite: {
    server: {
      fs: {
        allow: ['..']
      }
    }
  },

  eslint: {
    fix: true
  }
})
