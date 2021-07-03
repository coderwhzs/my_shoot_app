/*
 * @Description:
 * @Author: ZL
 * @Date: 2021-07-02 17:31:27
 * @LastEditors: ZL
 * @LastEditTime: 2021-07-03 10:27:07
 */
import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import store from './store/index'

import 'normalize.css'
import './style/index.css'

createApp(App).use(router).use(store).mount('#app')
