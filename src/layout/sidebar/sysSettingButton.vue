<template>
  <div class="menuSysPeizhi">
    <div
      v-for="(item,index) in sysMenuList"
      :key="index"
      :class="{ activeColor: item.name === contentval }"
      @click="goRouter(item)"
    >
      <i :class="item.iconClass"></i>
      {{ item.name }}
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      activeItem: '',
      sysMenuList: [{
        iconClass: 'el-icon-share',
        name: '菜单',
        routerPath: '/system/router'
      }, {
        iconClass: 'el-icon-s-custom',
        name: '角色',
        routerPath: '/system/role'
      }, {
        iconClass: 'el-icon-user',
        name: '用户',
        routerPath: '/system/permissions'
      }]
    }
  },
  computed: {
    ...mapState(['contentval'])
  },
  methods: {
    ...mapActions(['setContentVal']),
    goRouter (_item) {
      this.activeItem = _item.name
      this.$router.push(_item.routerPath)
    }
  }
}
</script>
<style lang="less" scoped>
.menuSysPeizhi {
  width: 75%;
  height: 40px;
  border-radius: 20px;
  background: #04cb94;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    flex: 1;
    line-height: 40px;
    text-align: center;
    color: white;
    font-size: 14px;
  }
  > div:nth-child(1) {
    border-radius: 25px 0 0 25px;
  }
  > div:nth-child(3) {
    border-radius: 0 25px 25px 0;
  }
  > div:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.3);
  }
}
</style>
