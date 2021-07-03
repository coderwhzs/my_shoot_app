/*
 * @Description:
 * @Author: ZL
 * @Date: 2021-07-02 17:31:27
 * @LastEditors: ZL
 * @LastEditTime: 2021-07-03 10:18:03
 */
declare module '*.vue' {
  import { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}
