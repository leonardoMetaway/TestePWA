<template>
  <q-drawer
    v-model="drawer"
    side="right"
    mini
    class="layout-rightdrawer q-pa-xs q-pt-md"
    :width="250"
    :bordered="$q.screen.lt.sm"
    :overlay="$q.screen.lt.sm"
    :class="$q.screen.lt.sm ? 'small' : ''"
  >
    <q-scroll-area class="fit">
      <q-list>
        <q-item
          v-ripple
          class="q-my-xs"
          clickable
          round
        >
          <q-item-section avatar>
            <q-icon name="account_circle" />
          </q-item-section>
          <q-item-section>
            Minha conta
          </q-item-section>

          <q-menu
            anchor="center left"
            :offset="[110, 0]"
          >
            <div class="row no-wrap q-pa-md">
              <div class="column items-center">
                <div class="text-subtitle1 q-mb-xs">
                  {{ usuario.nome }}
                </div>

                <q-btn
                  v-close-popup
                  color="primary"
                  label="Desconectar"
                  push
                  size="sm"
                />
              </div>
            </div>
          </q-menu>
        </q-item>

        <q-item
          v-ripple
          class="q-my-xs"
          clickable
          round
        >
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
          <q-item-section>
            Configurações
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: true
    }
  },
  
  emits: ['update:modelValue'],
  setup (props, { emit }) {
    const usuario = ref({
      nome: 'PWA TESTE'
    })

    const drawer = ref(props.modelValue)

    onMounted(() => {
      drawer.value = props.modelValue
    })

    watch(drawer, () => {
      emit('update:modelValue', drawer.value)
    })

    watch(() => props.modelValue, () => {
      drawer.value = props.modelValue
    })

    return {
      usuario,
      drawer
    }
  }
}
</script>

<style>

</style>