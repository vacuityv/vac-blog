import { createApp } from 'vue'

import App from './App.vue'
import router from './components/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

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
app.mount('#app')




