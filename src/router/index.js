import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    name: 'Home', path: '/',
    rediract: '/home',
    component: () => import('../view/home/index.vue')
  },
  {
    name: 'My', path: `/my`,
    component: () => import('../view/my/index.vue'),
    children: [
      {
        name: 'My', path: `/my/:id`,
        component: () => import('../view/my/index.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router