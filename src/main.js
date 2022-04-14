import 'vue-global-api'//引入全局插件
import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import vant from './assets/js/vant'
import axios from './config/index'
const app = createApp(App)
app.config.globalProperties.$http = axios
app.use(router)
app.use(vant)
app.mount('#app')
