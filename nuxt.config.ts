// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],


  app: {
    head: {
      title: 'DLC — студия дополнительного образования',
      meta: [
        {
          name: 'description',
          content: 'DLC — английский язык, школа раннего развития, поготовка к школе и продлёнка.'
        },
        { name: 'keywords', content: 'dlc,DLC,dlc надежденск ,Надежденкс,DLC Надежденск, Английский Надежденск, Английский, дошколка, разивашка Надежденск, развитие детей, посёлок Надежденкс, Надежденский, образование, dlc образование dlc studio' },
        { property: 'og:title', content: 'DLC — студия дополнительного образования' },
        { property: 'og:description', content: 'DLC — английский язык, школа раннего развития, поготовка к школе и продлёнка.' },
        { property: 'og:image', content: 'https://dlc-studio.vercel.app/og/og-image.jpg' },
        { property: 'og:url', content: 'https://dlc-studio.vercel.app/' },
      ],
      link: [
        { rel: 'canonical', href: 'https://dlc-studio.vercel.app/' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, // Favicon
      ]
    }
  }
})
