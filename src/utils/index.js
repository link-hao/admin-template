import Convertor from './convertor'
import Formate from './formate'
import Validator from './validator'
import ExcelUtil from './excel'

export default function deepClone (source) { // 引用类型深拷贝
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}

function storeLocalStorage (fieldName, toStoreData) { // vuex持久化
  window.sessionStorage.setItem(fieldName, JSON.stringify(toStoreData))
}

// 防抖
export const Debounce = (fn, t) => {
  let delay = t || 1000
  let timer
  return function () {
    let args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, args)
    }, delay)
  }
}

// 节流
export const Throttle = (fn, t) => {
  let last
  let timer
  let interval = t || 2000
  return function () {
    let args = arguments
    let now = +new Date()
    if (last && now - last < interval) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        last = now
        fn.apply(this, args)
      }, interval)
    } else {
      last = now
      fn.apply(this, args)
    }
  }
}

export {
  Convertor,
  Formate,
  Validator,
  ExcelUtil,
  storeLocalStorage
}
