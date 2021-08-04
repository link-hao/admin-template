<template>
  <div class="sz-salary w-h-100">
    <nav-bar></nav-bar>
    <div class="content-container">
      <side-bar id="slide-bar"></side-bar>
      <div class="right-container">
        <div class="bread_content">
          <i :class="isCollapse? 'el-icon-s-fold' : 'el-icon-s-unfold'" :title="isCollapse? '展开' : '收起'" @click="handleLefeMenu" class="cursor-pointer padding-8 font-size-20"></i>
          <span>{{contentval}}</span>
        </div>
        <div class="router-content">
          <transition name="fade-transform" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from './navbar'
import SideBar from './sidebar'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    NavBar,
    SideBar
  },
  computed: {
    ...mapState(['contentval', 'isCollapse'])
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(['setLoading', 'setContentVal', 'setLeftMenu']),
    handleLefeMenu () {
      this.setLeftMenu(!this.isCollapse)
      console.log(this.$store.state.isCollapse)
    }

  }
}
</script>
<style lang="less" scoped>
.sz-salary {
  background-color: #f7f9fa;
  overflow-x: hidden;
}
.sz-salary .slider_bar_menu {
  background-color: #ffffff;
  overflow-y: auto;
  overflow-x: hidden;
  border-right: 1px dashed #eae3e3;
}
.sz-salary .content-container {
  display: flex;
  width: 100%;
  height: calc(100% - 60px);
}
.sz-salary .right-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  .bread_content {
    font-size: 1.2vw;
    color: #475669;
    background: rgba(218, 218, 218, 0.3);
    font-weight: 600;
    height: 50px;
    line-height: 50px;
    padding-left: 10px;
  }
  .router-content {
    padding: 10px;
    flex: 1;
    overflow: auto;
  }
}
/*fade-transform*/
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}
.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.handelRightPosition {
  left: 0 !important;
}
</style>
