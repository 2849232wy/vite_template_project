import { defineStore } from "pinia"
import { ref } from "vue"

const useAuthStore = defineStore("auth",()=> {
  const token = ref<string>("dsadadsadsadsadsa")

  const setToken = (newToken:string) => {
    token.value = newToken
  }

  return {
    token,
    setToken
  }
}, {
  persist: true
})

export  const useAuthStoreWithOut = useAuthStore()