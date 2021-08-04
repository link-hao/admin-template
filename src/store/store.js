import Vue from 'vue'
import Vuex from 'vuex'
import MUTATIONS from './common'
import { storeLocalStorage } from '@/utils'
const sessionFieldName = 'OperationDataCenterV2'

Vue.use(Vuex)
let store = new Vuex.Store({
  state: {
    user: null,
    isLoading: false,
    isShowAppNavBar: true,
    contentval: '制度汇编',
    screenwidth: 768,

    // 菜单栏
    minLeftMenuWidth: 0,
    maxLeftMenuWidth: 240,
    isCollapse: false
  },
  mutations: {
    user (state, user) {
      if (user) {
        state.user = user
        storeLocalStorage(sessionFieldName, state)
      }
    },
    isLoading (state, value) {
      state.isLoading = value
    },
    isCollapse (state, value) {
      state.isCollapse = value
    },
    contentval: (state, value) => {
      if (value) {
        state.contentval = value
        storeLocalStorage(sessionFieldName, state)
      }
    },
    screenwidth: (state, value) => {
      if (value) {
        state.screenwidth = value
        storeLocalStorage(sessionFieldName, state)
      }
    }
  },
  actions: {
    setUser: ({ commit }, user) => {
      commit(MUTATIONS.USER, user)
    },
    setLoading: ({ commit }, isLoading) => {
      commit(MUTATIONS.ISLOADING, isLoading)
    },
    setLeftMenu: ({ commit }, value) => {
      commit(MUTATIONS.ISCOLLAPSE, value)
    },

    setContentVal: ({ commit }, contentval) => {
      commit(MUTATIONS.CONTENTVAL, contentval)
    },
    setScreenWidth: ({ commit }, screenwidth) => {
      commit(MUTATIONS.SCREENWIDTH, screenwidth)
    }
  }
})

export default store
