<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { API } from '@/services'
import { Formate } from '@/utils'
import TheLoading from '@/components/Loading'

export default {
  components: {
    TheLoading
  },
  name: 'App',
  computed: {
    ...mapState(['isLoading', 'user', 'xdfDepartment', 'screenwidth'])
  },
  data () {
    return {

    }
  },
  async created () {
    this.setScreenWidth(document.body.clientWidth)
    window.onresize = () => {
      return (() => {
        var screenWidth = document.body.clientWidth
        this.setScreenWidth(screenWidth)
      })()
    }

    this.$on('hook:beforeDestory', () => {
      window.removeEventListener('resize')
    })
  },

  methods: {
    ...mapActions(['setScreenWidth']),
  }
}
</script>

<style>
@import url("./assets/css/index.css");
@import url("./assets/css/color.css");
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #f7f9fa;
}
@media screen and (max-width:768px ) {
  #app {
    font-size: 14px;
  }
}
</style>
