import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/addArticle',
        name: '发表文章',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/article/addArticle')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router