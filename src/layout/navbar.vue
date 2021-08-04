<template>
  <div class="NavBarSearch">
    <div class="title_log">
      <img src="@/assets/images/logo.png" />
      <span class="hidden-xs-only">| {{ systemName }}</span>
    </div>

    <div class="nav_title_right">
      <screenfull id="screenfull" class="hidden-xs-only right-menu-item hover-effect" />
      <p class="hidden-xs-only">
        <svg-icon :iconClass='"user"'></svg-icon>
        <span class="loginName">欢迎您，{{ user ? user.name : '苏小新' }}</span>
      </p>
      <p>
        <svg-icon :iconClass='"exit"'></svg-icon>
        <span class="loginName">安全退出</span>
      </p>
    </div>

    <exit-dialog :dialogVisiable="exitDialogVisiable" @cancelFun="cancelExit" @confirmFun="confirmExit"></exit-dialog>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { Constants } from '@/common'
import ExitDialog from '@/components/ExitConfirmDialog'
import Screenfull from '@/components/Screenfull'
import { mixin as onClickOutside } from 'vue-on-click-outside'

export default {
  name: 'Sidebar',
  mixins: [onClickOutside],

  components: {
    ExitDialog,
    Screenfull
  },
  data () {
    return {
      isShow: false,
      activeIndex: '1',
      exitDialogVisiable: false
    }
  },
  computed: {
    ...mapState(['user', 'screenwidth', 'isCollapse']),
    systemName () {
      return Constants.sysName
    }
  },
  methods: {
    ...mapActions(['setLoading', 'setContentVal', 'setLeftMenu', 'setVerticalMenu']),
    handleLefeMenu () {
      this.setLeftMenu(!this.isCollapse)
    },

    goRouter (item) {
      if (this.screenwidth <= 768) {
        this.setVerticalMenu(false)
        this.setLeftMenu(false)
        if (!this.$store.state.sidebar.opened) {
          this.setLeftMenu(true)
        }
      }
      this.$router.push(item.routerPath)
    },

    cancelExit (visible) {
      this.exitDialogVisiable = visible
    },

    confirmExit () {
      window.location.href = Constants.sysLogoutHref
    },

    closeLeftMenu () {
      if (this.$store.state.screenwidth <= 768) {
        this.setLeftMenu(false)
      }
    },

    closeRightMenu () {
      this.setVerticalMenu(false)
    }
  }
}
</script>
<style lang="less">
.NavBarSearch {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  background: #04cb94;
  height: 60px;
  line-height: 60px;
  padding: 0 40px;
  .title_log {
    padding: 0 30px 0 10px;
    height: 100%;
    vertical-align: middle;
    img {
      vertical-align: middle;
      height: 100%;
      width: 100px;
    }
    span {
      display: inline-block;
      padding-right: 20px;
    }
    i {
      position: absolute;
      right: 10px;
      bottom: 20px;
      color: #04cb94;
    }
  }
  .nav_title_right {
    line-height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    .loginName {
      vertical-align: middle;
    }
    p {
      margin-left: 15px;
      cursor: pointer;
    }
  }
}

</style>
