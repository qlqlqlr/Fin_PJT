import { createRouter, createWebHistory } from 'vue-router'
import FinView from '@/views/FinView.vue'
import depositView from '@/views/dopositView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/FinView/',
      name: 'FinView',
      component: FinView
    },
    {
      path: '/DepositView/',
      name: 'depositView',
      component: depositView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
