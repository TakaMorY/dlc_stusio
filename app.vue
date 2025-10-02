<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <Analytics />
    </NuxtLayout>
  </div>
</template>

<script>
import { Analytics } from '@vercel/analytics/nuxt'
</script>
