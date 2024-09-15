import { createI18n, useI18n } from 'vue-i18n'
import zh from "@/locales/zh.json"
import en from "@/locales/en.json"
export const i18n = createI18n({
  locale: 'zh',
  fallbackLocale: 'en',
  legacy: false,
  messages: {
    zh,
    en
  }
})
export const $t = i18n.global.t

