import axios, { AxiosRequestConfig } from "axios";
import { useAuthStoreWithOut } from "@/store/auth"
import { useMessage  } from "naive-ui"

interface dateT<T=any> {
  code: number,
  message: string,
  data: T
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_SUFFIX ? import.meta.env.VITE_BASE_URL : `${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_BASE_URL_SUFFIX}`,
  timeout: 10000
})
instance.interceptors.request.use(config => {
  const authStore = useAuthStoreWithOut
  if (authStore.token) {
    config.headers.Authorization = `Bearer ${authStore.token}`
  }
  return config
})

instance.interceptors.response.use(res => {
  return res.data
}, (error)=> {
  const handleError = (code: number)=> {
    switch (code) {
      case 401:
        return error.response.data.message ?? '登录过期，请重新登录'
      case 403:
        return error.response.data.message ?? '拒绝访问'
      case 404:
        return error.response.data.message ?? '请求错误,未找到该资源'
      case 500:
        return error.response.data.message ?? '服务器错误'
      default:
        return '未知错误'
    }
  }

  window.$message!.error(handleError(error.status))
  return Promise.reject(error)
})

const request = <T>(config: AxiosRequestConfig)=> {
  return instance(config) as unknown as Promise<dateT<T>["data"]>
}
export default request

