/*
 * @Description:
 * @Author: ZL
 * @Date: 2021-07-02 17:54:10
 * @LastEditors: ZL
 * @LastEditTime: 2021-07-02 19:01:48
 */
import axios from 'axios'

const baseURL = 'http://api.github.com'

const service = axios.create({
  baseURL,
  timeout: 20000
})

service.interceptors.request.use(
  (config) => {
    const token = 1
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const { data } = response
    return data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
