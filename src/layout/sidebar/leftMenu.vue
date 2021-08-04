<template>
  <div id="side-bar_1">
    <el-menu
      :default-active="defaultActive"
      background-color="#FFFFFF"
      text-color="#666666"
      active-text-color="#27c2c1"
      :unique-opened="true"
      :collapse="this.$store.state.isCollapse"
      class="el-menu-vertical"
    >
      <template v-for="(item, index) in navRouterList">
        <el-submenu
          v-if="item.Children && item.Children.length > 0"
          :key="item.index"
          :index="item.name"
        >
          <template slot="title">
            <i :class="item.IconClass"></i>
            <span>{{item.name}}</span>
          </template>

          <template v-for="itemChild in item.Children">
            <el-submenu
              v-if="itemChild.Children && itemChild.Children.length"
              :index="itemChild.name"
              :key="itemChild.index"
              class="erji"
            >
              <template slot="title">
                <i :class="itemChild.IconClass"></i>
                <span>{{itemChild.name}}</span>
              </template>

              <!-- 三级菜单 -->
              <el-menu-item
                v-for="itemChild_Child in itemChild.Children"
                :index="itemChild_Child.name"
                :key="itemChild_Child.index"
                @click="goRouter(itemChild_Child)"
              >
                <i :class="itemChild_Child.IconClass"></i>
                <span slot="title">{{itemChild_Child.name}}</span>
              </el-menu-item>
            </el-submenu>

            <el-menu-item
              v-else
              :index="itemChild.name"
              :key="itemChild.index"
              @click="goRouter(itemChild)"
            >
              <span slot="title">{{itemChild.name}}</span>
            </el-menu-item>
          </template>
        </el-submenu>

        <el-menu-item
          v-else-if="item.IsMenu || (!item.IsMenu && !item.Children)"
          :key="index"
          :index="item.name"
          @click="goRouter(item)"
        >
          <template>
            <span slot="title">{{item.name}}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { Constants } from '@/common'
export default {
  name: 'SideBar',
  data () {
    return {
      defaultActive: '',
      navRouterList: Constants.leftMenuList
    }
  },
  computed: {
    ...mapState(['screenwidth', 'user']),

    isCollapse () {
      return this.$store.state.isCollapse
    }
  },
  mounted () {
    this.setCurrentRoute()
  },
  methods: {
    ...mapActions(['setLoading', 'setContentVal']),
    setCurrentRoute () {
      this.defaultActive = this.$route.name
    },
    goRouter (item) {
      this.$router.push(item.routerPath)
    }
  }
}
</script>

<style scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width:200px;
}
#side-bar_1 .el-menu .el-menu-item {
  min-width: 0;
}

.el-submenu__title {
  padding-left: 0px !important;
}
span {
  font-size: 0.875rem;
  padding: 0;
}
i {
  font-size: 1rem;
  color: #27c2c1;
}
</style>
