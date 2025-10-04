// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
  nitro: {
    preset: 'static'
  },


  app: {
    head: {
      title: 'DLC - школа английского языка.',
      meta: [
        {
          name: 'description',
          content: 'DLC - английский язык, школа раннего развития, подготовка к школе и продлёнка.'
        },
        {
          name: 'keywords',
          content: 'dlc, DLC, dlc надежденск, Надежденск, DLC Надежденск, Английский Надежденск, Английский, вдс-ыегвшщ, длс школа,школа ангийского надега, школа ангилийского, dlc-school, студия английский длс'
        },
        {
          property: 'og:title',
          content: 'DLC - школа английского языка.'
        },
        {
          property: 'og:description',
          content: 'DLC - английский язык, школа раннего развития, подготовка к школе и продлёнка.'
        },
        {
          property: 'og:image',
          content: 'https://dlc-school.vercel.app/og/og-image.jpg'
        },
        {
          property: 'og:url',
          content: 'https://dlc-school.vercel.app/'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://dlc-school.vercel.app/'
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/icon-32x32.png'
        }
      ]
    }
  }
})
