<template>
  <div
    class="d-flex"
    :class="$q.screen.lt.sm ? 'q-pt-sm' : 'q-pt-md'"
  >
    <slot name="outer-left" />

    <q-card
      flat
      class="body-card q-pa-sm"
      :class="$q.screen.lt.sm ? '' : ' q-mx-md'"
      style="width: 100%"
    >
      <div class="body-card-header q-mb-sm">
        <span class="body-card-title q-pl-md q-pr-sm q-py-sm d-flex">
          <div v-if="!$slots.title">
            <span class="text-h6"> {{ titulo }} </span>
          </div>
          <slot name="header-title" />
        </span>

        <div :class="`${$slots.headerRight ? 'd-flex' : ''} ${$q.screen.lt.sm ? 'q-pr-sm' : 'q-pr-md'}`">
          <slot name="header" />
          <q-space />
          <slot name="headerRight" />
        </div>

        <!-- <q-separator class="q-mb-sm" /> -->
      </div>
      <div :class="`body-card-content${botoesCrud ? '-crud' : ''}${tabela ? '-tabela' : ''} q-px-sm q-py-sm`">
        <slot />
      </div>
      <div class="body-card-actions">
        <q-separator v-if="$slots.actions || botoesCrud" />
        <slot name="actions" />
        <div
          v-if="!$slots.actions && botoesCrud"
          class="d-flex q-py-sm"
        >
          <q-btn
            v-if="mostrarBtnExcluir"
            color="red"
            icon-right="delete"
            rounded
            :loading="loading"
            @click="$emit('excluir')"
          >
            Excluir
          </q-btn>
          <q-space />
          <q-btn
            class="q-mr-sm"
            flat
            rounded
            @click="$emit('cancelar')"
          >
            Cancelar
          </q-btn>
          <q-btn
            color="primary"
            icon-right="save"
            rounded
            :loading="loading"
            @click="$emit('salvar')"
          >
            Salvar
          </q-btn>
        </div>
      </div>
    </q-card>
    
    <slot name="outer-right" />
  </div>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      default: 'Titulo'
    },
    tabela: Boolean,
    loading: Boolean,
    botoesCrud: Boolean,
    mostrarBtnExcluir: Boolean,
  },

  emits: ['excluir', 'cancelar', 'salvar'],
  setup () {

    return {

    }
  }
}
</script>

<style lang="sass" scoped>
.body-card
  border-radius: 15px

.body-card-content
  overflow: auto
  max-height: calc(100vh - 80px)
  &-crud
    overflow: auto
    max-height: calc(100vh - 128px)
  &-tabela
    overflow: auto
    max-height: calc(100vh - 118px)

body.mobile
  .body-card-content
    overflow: auto
    max-height: calc(100vh - 120px) !important
    &-crud
      overflow: auto
      max-height: calc(100vh - 172px) !important
    &-tabela
      overflow: auto
      max-height: calc(100vh - 156px) !important
</style>