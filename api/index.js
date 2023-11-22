import axios from 'axios'
import { useRuntimeConfig } from 'nuxt/app'

const config = useRuntimeConfig()

const criarApi = (responseType = 'json') => {
  const baseURL = config.public.baseUrl
  const apikey = config.public.apikey
  if (!baseURL) {
    // nao conseguiu carregar o .env
    return
  }

  const api = axios.create({
    baseURL,
    responseType,
  })
  api.defaults.headers.common['X-API-KEY'] = apikey

  return api
}

export default criarApi
