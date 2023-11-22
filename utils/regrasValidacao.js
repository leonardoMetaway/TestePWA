import { ref } from 'vue'

export const rules = ref({
  obrigatorio: value => !!value || 'Campo obrigatório.',

  data: value => {
    const pattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
    return value ? pattern.test(value) || 'Data inválida' : true
  }
})
