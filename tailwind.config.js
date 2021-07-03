/*
 * @Description: tailwindcss配置文件
 * @Author: ZL
 * @Date: 2021-07-03 10:20:47
 * @LastEditors: ZL
 * @LastEditTime: 2021-07-03 10:22:15
 */
module.exports = {
  // 摇树移除未使用优化
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
