import Vue from 'vue'
import App from './App'
import { router } from './router'
import ElementUI from 'element-ui'
import store from '@/store'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import './icons'
import VueCookies from 'vue-cookies'
import { DialogAlert, Constants } from '@/common'

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'mini' })
Vue.use(VueCookies)
Vue.use(DialogAlert)

/**
 * @param { vuex data persistence }
 */
store.replaceState(Object.assign(store.state, JSON.parse(sessionStorage.getItem('OperationDataCenterV2'))))

const isPro = process.env.NODE_ENV === 'production'
if (isPro) {
  const userEmail = VueCookies.get('E2Email') || VueCookies.get('U2Email')
  const U2AT = VueCookies.get('U2AT')
  if (!userEmail || !U2AT) {
    window.location.href = Constants.sysLoginHref
  } else {
    store.state.user = {
      U2AT: U2AT,
      email: userEmail
    }
  }
} else {
  store.state.user = {
    U2AT: '25217d1d-feee-4cb9-99f3-2763d05d1393'
  }
}

/**
 * @param { get user name }
 * # new version login without u2nickname in cookies
 * # get userName by API
 */
store.state.user.name = 'Vicent Link'

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
