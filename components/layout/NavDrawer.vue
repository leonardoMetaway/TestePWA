<template>
  <q-drawer
    v-model="drawer"
    class="layout-navdrawer q-pl-sm"
    :bordered="$q.screen.lt.sm"
    :width="250"
    :overlay="$q.screen.lt.sm"
    :class="$q.screen.lt.sm ? 'small' : ''"
  >
    <q-scroll-area class="fit">
      <q-list>
        <q-item class="layout-navdrawer-header">
          <div class="text-green-9 d-flex text-h5">
            <q-icon
              name="bug_report"
              size="md"
            />
            TESTE
            <div class="text-green-grey-7">
              debug
            </div>
          </div>
          <div class="caption">
            debug pwa v0.1
          </div>
          <q-separator />
        </q-item>
        <template
          v-for="(item, index) in menuList"
          :key="`navdrawer-item${index}`"
        >
          <q-item
            v-if="!item.subRoutes"
            v-ripple
            clickable
            :to="item.to"
          >
            <q-item-section
              v-if="item.icon"
              avatar
            >
              <q-icon :name="item.icon" />
            </q-item-section>
            <q-item-section>
              {{ item.label }}
            </q-item-section>
            <q-separator
              v-if="item.separator"
              class="q-my-xs"
            />
          </q-item>
          <q-expansion-item
            v-else
            :icon="item.icon"
            :label="item.label"
            :caption="item.caption"
          >
            <template
              v-for="(subItem, subIndex) in item.subRoutes"
              :key="`navdrawer-item${index}-subitem${subIndex}`"
            >
              <q-item
                v-if="!subItem.subRoutes"
                v-ripple
                clickable
                :to="subItem.to"
                class="q-ml-lg"
              >
                <q-item-section>
                  {{ subItem.label }}
                </q-item-section>
                <q-item-section
                  v-if="subItem.icon"
                  avatar
                >
                  <q-icon :name="subItem.icon" />
                </q-item-section>
              </q-item>
              <q-expansion-item
                v-else
                dense-toggle
                class="q-ml-lg"
                :icon="subItem.icon"
                :label="subItem.label"
                :caption="subItem.caption"
              >
                <template
                  v-for="(subsubItem, subsubIndex) in subItem.subRoutes"
                  :key="`navdrawer-item${index}-subitem-inner${subsubIndex}`"
                >
                  <q-item
                    v-ripple
                    clickable
                    :to="subsubItem.to"
                    class="q-ml-lg"
                  >
                    <q-item-section>
                      {{ subsubItem.label }}
                    </q-item-section>
                    <q-item-section
                      v-if="subsubItem.icon"
                      avatar
                    >
                      <q-icon :name="subsubItem.icon" />
                    </q-item-section>
                    <q-separator
                      v-if="subsubItem.separator"
                      class="q-my-xs"
                    />
                  </q-item>
                </template>
                <q-separator class="q-my-xs" />
              </q-expansion-item>
              <q-separator
                v-if="subItem.separator"
                class="q-mx-lg"
              />
            </template>
          </q-expansion-item>
        </template>
        <q-item class="layout-navdrawer-footer q-pa-none">
          <div class="content">
            <q-separator class="q-mx-md q-mb-sm" />
            <span class="text-grey-4 text-subtitle2"> branch experimental </span>
          </div>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
const defaultList = ref([
  {
    icon: 'home',
    label: 'Inicio',
    to: '/'
  },
  {
    icon: 'topic',
    label: 'Cadastros',
    subRoutes: [
      {
        label: 'Teste',
        subRoutes: [
          {
            label: 'Debug',
            to: '/1',
          }
        ]
      },
      {
        label: 'Debug',
        to: '/2',

      }
    ]
  }
])

export default {
  props: {
    modelValue: {
      type: Boolean,
      default: true
    }
  },
  
  emits: ['update:modelValue'],
  setup (props, { emit }) {
    const drawer = ref(props.modelValue)
    const menuList = ref([])

    onMounted(() => {
      drawer.value = props.modelValue
      menuList.value = defaultList.value
    })

    watch(drawer, () => {
      emit('update:modelValue', drawer.value)
    })

    watch(() => props.modelValue, () => {
      drawer.value = props.modelValue
    })

    return {
      drawer,
      menuList
    }
  }
}

</script>

<style lang="sass" scoped>
.caption
  font-size: 0.6rem
  margin-bottom: 3px

.layout-navdrawer
  .q-scrollarea
    padding-top: 70px !important
    padding-bottom: 70px !important
  &-header
    display: flex
    width: 100%
    flex-direction: column
    position: fixed !important
    top: 10px
  &-footer
    position: fixed
    bottom: 10px
    width: 100%
    .content
      display: inline
      width: 100%
      user-select: none
      span
        font-size: 1.2rem
        top: 5px
        left: 28px
        position: relative
    
</style>