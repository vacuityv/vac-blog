import { createApp } from 'vue'

import App from './App.vue'
import router from './components/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
// 使用配置的路由
app.use(router)
app.use(ElementPlus)
app.mount('#app')




