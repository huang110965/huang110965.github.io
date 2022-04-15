import 'vue-global-api'//引入全局插件
import { createApp } from 'vue'
import router from './router/index'//路由地址合集
import App from './App.vue'
import vant from './assets/js/vant'//vant组件库-按需引入
import axios from './config/index'//ajax
import VConsole from 'VConsole'//调试工具
const app = createApp(App)
app.config.globalProperties.$http = axios
let vConsole = new VConsole();
app.use(router)
app.use(vant)
app.mount('#app')
