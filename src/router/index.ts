/*
 * @Description: vue-router
 * @Author: ZL
 * @Date: 2021-07-02 17:38:36
 * @LastEditors: ZL
 * @LastEditTime: 2021-07-03 10:17:14
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = []

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
