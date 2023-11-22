<template>
  <q-layout view="hHh Lpr fff">
    <layoutNavDrawer v-model="navDrawer" />

    <layoutRightDrawer v-model="rightDrawer" />

    <q-page-container>
      <router-view />
    </q-page-container>
    
    <q-footer
      v-if="$q.screen.lt.sm"
      reveal
      bordered
      style="background: transparent !important"
    >
      <q-card class="d-flex justify-center q-py-sm">
        <q-btn
          round
          :color="$q.dark.isActive ? 'white' : 'black'"
          flat
          icon="menu"
          class="q-mx-sm"
          @click="navDrawer = true"
        />
        <q-btn
          round
          :color="$q.dark.isActive ? 'white' : 'black'"
          flat
          icon="home"
          class="q-mx-sm"
        />
        <q-btn
          round
          :color="$q.dark.isActive ? 'white' : 'black'"
          flat
          icon="account_circle"
          class="q-mx-sm"
          @click="rightDrawer = true"
        />
      </q-card>
    </q-footer>
  </q-layout>
</template>


<script>
import { onMounted, onUnmounted } from 'vue'
import { useQuasar } from 'quasar'

export default {
  setup () {
    const navDrawer = ref(true)
    const rightDrawer = ref(true)

    const $q = useQuasar()

    onMounted(() => {
      abrirOuFecharDrawers()
      window.addEventListener('resize', () => {
        abrirOuFecharDrawers()
      })
    })

    onUnmounted(() => {
      window.removeEventListener('resize' , () => {
        abrirOuFecharDrawers()
      })
    })

    const abrirOuFecharDrawers = () => {
      const exibirAoAbrir = !$q.screen.lt.sm

      navDrawer.value = exibirAoAbrir
      rightDrawer.value = exibirAoAbrir
    }


    const toggleLeftDrawer = () => {
      navDrawer.value = !navDrawer.value
    }
    

    return {
      navDrawer,
      rightDrawer,
      toggleLeftDrawer
    }
  }
}
</script>