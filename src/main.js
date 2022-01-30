import { createApp } from 'vue'

import App from './App.vue'
import router from './components/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import * as ElIconModules from '@element-plus/icons-vue'

// highlightjs
import hljs from 'highlight.js';
VMdPreview.use(githubTheme, {
    Hljs: hljs,
});

const app = createApp(App)
// 使用配置的路由
app.use(router)
app.use(ElementPlus)
app.use(VMdPreview)

// 统一注册el-icon图标
for(let iconName in ElIconModules){
    app.component(iconName,ElIconModules[iconName])
}

app.mount('#app')









