import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/select-role',
    name: 'Role',
    component: () => import(/* webpackChunkName: "SelectRole" */ '../views/SelectRole.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
