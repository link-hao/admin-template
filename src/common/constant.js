let Constants = {
  sysName: '后台xx系统',
  sysLoginHref: '', // e2登录页
  sysLogoutHref: '', // e2退出
  notificationConfig: {
    duration: 3000,
    successTitle: '成功',
    warningTitle: '警告',
    errorTitle: '错误'
  },

  // 左侧导航栏目录：
  leftMenuList: [
    {
      name: '制度汇编',
      routerPath: '',
      IconClass: 'el-icon-s-finance',
      Children: [{
        name: '制度汇编',
        routerPath: '/index'
      }, {
        name: '文章管理',
        routerPath: '/log'
      }, {
        name: '案例库',
        routerPath: '/index'
      }, {
        name: '案例库管理',
        routerPath: '/log'
      }]
    }
  ]
}
export default Constants
