import { createRouter, createWebHashHistory } from 'vue-router'

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
import VacHome from "@/components/VacHome";
import ArticleDetail from "@/components/ArticleDetail";
import About from "@/components/About";

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    {path: '/', component: VacHome},
    {path: '/home', component: VacHome},
    {path: '/detail', component: ArticleDetail},
    {path: '/about', component: About}
]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router