import axios, { AxiosRequestConfig } from 'axios';
import { StateType } from './store/index';

const apiBase = process.env.BASE_URL || "http://localhost:8032";

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/axios',
    { src: '~/plugins/nuxt-client-init.ts', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    //'@nuxtjs/auth',
  ],
  proxy: {
    '/api': {
      target: apiBase,
      pathRewrite: {
        '^/api' : '/api'
        }
      }
  },
  router: {
    middleware: 'auth',
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:8033'
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  server: {
    port: 8033, // デフォルト: 3000
    host: '0.0.0.0' // デフォルト: localhost
  },
}
