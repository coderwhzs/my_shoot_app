/*
 * @Description: vue-router
 * @Author: ZL
 * @Date: 2021-07-02 17:38:36
 * @LastEditors: ZL
 * @LastEditTime: 2021-07-03 13:27:07
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/signUp/login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
