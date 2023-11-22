<template>
  <NuxtLayout name="404">
    <div>
      <div class="text-4xl">
        Parece que a página que você tentou acessar não existe
      </div>
      <q-btn
        class="font-bold button"
        color="primary"
        @click="goBack"
      >
        Retornar
      </q-btn>
    </div>
  </NuxtLayout>
</template>

<script>
import { navigateTo } from 'nuxt/app'
export default {
  setup () {

    const goBack = () => {
      return navigateTo('/')
    }

    return {
      goBack
    }
  }
}
</script>