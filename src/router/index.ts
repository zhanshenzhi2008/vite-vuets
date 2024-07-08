import { createRouter, createWebHistory,  } from 'vue-router'

export const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        name: 'login',
        path: '/login',
        component: () => import((`../pages/login.vue`))
    },
    {
        name: 'account',
        path: '/account',
        component: () => import("../pages/account.vue")
    }

]

const router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    history: createWebHistory(),
    routes,
})


router.beforeEach((to,from, next) => {
    next()
})

export default router