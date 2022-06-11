import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/welcomeView',
      name: 'welcome',
      component: () => import('../views/welcomeView.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/homeView.vue')
    },
  ]
})

export default router
