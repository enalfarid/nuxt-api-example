
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: "/vendor/jquery/jquery.min.js" },
      { src: "/vendor/bootstrap/js/bootstrap.bundle.min.js" },
      { src: "/vendor/jquery-easing/jquery.easing.min.js" },
      { src: "/js/sb-admin-2.min.js" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/vendor/fontawesome-free/css/all.min.css',
    '@/assets/css/sb-admin-2.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
 /** axios as a plugin */
  plugins: [
    '@/plugins/axios.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'bootstrap-vue/nuxt'
  ],

  /**  Using @nuxtjs/auth modules for user authentication */

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/users/login', method: 'post', propertyName: 'token' },
          logout: { url: '/users/logout', method: 'post' },
          user: { url: '/user', method: 'get', propertyName: 'name' }
        },
        tokenRequired: true,
        tokenType: 'Bearer '
      }
    }
  },

  /** Base API URL */

  axios: {
    baseURL: 'https://staging-v4-api.offeo.com/v1/'
  },

  /** Middleware for authentication routing page */

  router: {
    middleware: ['auth']
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
