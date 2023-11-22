<template>
  <div class="d-flex flex-column">
    <span class="q-mx-auto d-flex"> Login Eventos </span>
    <q-separator class="q-my-sm" />

    <q-card
      v-if="invalidCredentials"
      flat
      color="red"
      class="q-pa-sm q-mb-sm d-flex"
      bordered
      style="background-color: #ff000014; border-radius: 0;"
    >
      <div
        class="q-mx-auto d-flex flex-column text-center"
        style="color: black"
      >
        <span> Credenciais inválidas </span>
        <span class="text-caption"> Usuário ou senha incorretos </span>
      </div>
    </q-card>

    <q-form ref="formulario">
      <q-input
        ref="name"
        v-model="userName"
        label="Usuário"
        rounded
        standout
        :rules="[rules.obrigatorio]"
        @keydown.enter="pswd.focus()"
      />

      <q-input
        ref="pswd"
        v-model="password"
        label="Senha"
        rounded
        standout
        :rules="[rules.obrigatorio]"
        :type="showPassword ? 'text' : 'password'"
        :append-inner-icon="`mdi-eye${showPassword ? '' : '-off'}`"
        @keydown.enter="login"
      >
        <template #append>
          <q-icon
            :name="showPassword ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="showPassword = !showPassword"
          />
        </template>
      </q-input>

      <q-btn
        class="full-width q-mt-sm"
        color="green"
        :loading="loading"
        :disable="loading"
        @click="login"
      >
        Entrar
      </q-btn>
    </q-form>
  </div>
</template>

<script>
export default {
  name: 'Index',

  setup () {
    definePageMeta({
      layout: 'auth'
    })
    const logado = useLogin()
    const formulario = ref()
    const name = ref()
    const pswd = ref()

    const userName = ref()
    const password = ref()
    const showPassword = ref(false)
    const invalidCredentials = ref(false)
    const loading = ref(false)

    const login = async () => {
      const valid = await formulario.value.validate()
      if (!valid) return
      
      if (userName.value.toLowerCase() !== 'admin' || password.value !== '12345678') {
        invalidCredentials.value = true
        return
      } else {
        loading.value = true
        setTimeout(() => {
          logado.value = true
          loading.value = false
          navigateTo('/')
        }, 500)
      }
    }
  
    return {
      formulario,
      name,
      pswd,
      userName,
      password,
      showPassword,
      invalidCredentials,
      loading,
      login
    }
  }
}
</script>