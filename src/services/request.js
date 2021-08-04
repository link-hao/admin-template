/* eslint-disable no-irregular-whitespace */
import axios from 'axios'
import store from '@/store'
import { ResultCode, ResultMsg } from '@/common'

// 添加请求拦截器
axios.interceptors.request.use(
  (config) => {
    // set Request header
    let token = store.state.user.U2AT || ''
    config.headers.token = token

    // Set Request Timeout
    config.timeout = 360 * 1000

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器 ===> App.vue

let request = {
  post: async function (url = '', data = null, headers = '') {
    store.state.isLoading = true
    let response = null
    try {
      if (headers) {
        response = await axios.post(url, data, { headers })
      } else {
        response = await axios.post(url, data)
      }
    } catch (e) {
      console.error(e)
    } finally {
      store.state.isLoading = false
    }

    if (!response || !response.data) {
      return { resultCode: ResultCode.REQUEST_ERROR, ResultMsg: ResultMsg.REQUEST_ERROR }
    } else {
      return { code: ResultCode.OK, data: response.data }
    }
  },

  get: async function (url = '', params = null) {
    let response = null
    if (url && params) {
      url += '?'
      for (let key in params) {
        url += key + '=' + (params[key]) + '&'
      }

      url = url.substring(0, url.lastIndexOf('&'))
    }
    store.state.isLoading = true
    try {
      response = await axios.get(url)
    } catch (e) {
      console.error(e)
    } finally {
      store.state.isLoading = false
    }

    if (!response) {
      return { resultCode: ResultCode.REQUEST_ERROR, ResultMsg: ResultMsg.REQUEST_ERROR }
    } else {
      return { code: ResultCode.OK, data: response.data }
    }
  },

  del: async function (url = '', params = null) {
    let response = null
    if (url && params) {
      url += '?'
      for (let key in params) {
        url += key + '=' + (params[key]) + '&'
      }
      url = url.substring(0, url.lastIndexOf('&'))
    }
    store.state.isLoading = true
    try {
      response = await axios.delete(url)
    } catch (e) {
      console.error(e)
    } finally {
      store.state.isLoading = false
    }

    if (!response || !response.data) {
      return { resultCode: ResultCode.REQUEST_ERROR, ResultMsg: ResultMsg.REQUEST_ERROR }
    } else {
      return { code: ResultCode.OK, data: response.data }
    }
  }
}

export default request
