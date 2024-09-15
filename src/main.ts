import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import pinia from './store'
import 'virtual:uno.css'
import '@unocss/reset/normalize.css'
import { i18n } from './i18n/index'
// import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
createApp(App).use(router).use(pinia).use(i18n).mount('#app')
