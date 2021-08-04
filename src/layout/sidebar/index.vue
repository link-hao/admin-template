<template>
  <div class="slider_bar_menu">
    <div class="menu_item_content">
      <menu-one></menu-one>
    </div>
  </div>
</template>
<script>
import menuOne from './leftMenu'
import SysButton from './sysSettingButton'
export default {
  components: {
    menuOne,
    SysButton
  },
  data () {
    return {

    }
  },
  methods: {
    handleClick (item) {
      this.activeName = item.label
    }
  }
}
</script>
<style lang="less">
</style>
