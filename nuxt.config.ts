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
      title: 'DLC - студия дополнительного образования',
      meta: [
        {
          name: 'description',
          content: 'DLC - английский язык, школа раннего развития, подготовка к школе и продлёнка.'
        },
        {
          name: 'keywords',
          content: 'dlc, DLC, dlc надежденск, Надежденск, DLC Надежденск, Английский Надежденск, Английский, вдс-ыегвшщ, длс студия, студия английский длс'
        },
        {
          property: 'og:title',
          content: 'DLC - студия дополнительного образования'
        },
        {
          property: 'og:description',
          content: 'DLC - английский язык, школа раннего развития, подготовка к школе и продлёнка.'
        },
        {
          property: 'og:image',
          content: 'https://www.dlc-studio.ru/og/og-image.jpg'
        },
        {
          property: 'og:url',
          content: 'https://www.dlc-studio.ru/'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://www.dlc-studio.ru/'
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
