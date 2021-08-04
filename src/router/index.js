import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/store'

const Layout = () => import('@/layout')
const FontPage = () => import('@/views/FontPage')

// error-page
const ErrorPage = () => import('@/views/ErrorPage/Index')
const NotFind404Page = () => import('@/views/ErrorPage/404')
const NoPermissionPage = () => import('@/views/ErrorPage/NoPermission')
const NetworkErrorPage = () => import('@/views/ErrorPage/NetworkError')

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          redirect: 'index'
        },
        {
          path: 'index',
          name: 'Dashaboard',
          component: FontPage
        },
        {
          path: 'log',
          name: 'Log',
          component: () => import('@/views/log')
        }
      ]
    },

    {
      path: '/error',
      component: ErrorPage,
      children: [{
        path: 'no-permissions',
        name: '无权限',
        component: NoPermissionPage
      },
      {
        path: '404',
        name: '页面错误',
        component: NotFind404Page
      },
      {
        path: 'network-error',
        name: '网络错误',
        component: NetworkErrorPage
      },
      {
        path: '',
        redirect: '404'
      }
      ]
    },
    {
      path: '*',
      redirect: '/error',
      hidden: true
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    if (to.name) {
      Store.state.contentval = to.name
    }
    next()
  } else {
    if (to.name) {
      Store.state.contentval = to.name
    }
    next()
  }
})
