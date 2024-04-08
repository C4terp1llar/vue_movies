import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/', // Стартовый
        name: 'home',
        component: () => import('../components/views/HomeView.vue')
    },
    {
        path: '/watched', //
        name: 'watched',
        component: () => import('../components/views/WatchedView.vue')
    },
    {
        path: '/search', //
        name: 'search',
        component: () => import('../components/views/SearchView.vue')
    },
    {
        path: '/favorite', //
        name: 'favorite',
        component: () => import('../components/views/FavoriteView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    linkActiveClass: "active-link",
    linkExactActiveClass: "exact-active-link",
    routes
});

export default router;