<template>
  <div class="errPage-container">
    <el-button icon="arrow-left" class="pan-back-btn" @click="back">返回</el-button>
    <el-row>
      <el-col :span="12">
        <h1 class="text-jumbo text-ginormous m-t-b40">Oops!</h1>
        <h2 class="m-bottom24 color-ff4949">Network Error</h2>
        <h6 class="m-bottom24">如有疑问请联系IT部门</h6>
        <ul class="list-unstyled padding-l-40">
          <li class="link-type">
            <a href="http://www.baidu.com/">随便看看</a>
          </li>
          <li>
            <a href="#" @click.prevent="dialogVisible=true">点我看图</a>
          </li>
        </ul>
      </el-col>
      <el-col :span="12">
        <img :src="errGif" width="313" height="428" alt="Girl has dropped her ice cream." />
      </el-col>
    </el-row>
    <el-dialog :visible.sync="dialogVisible" title="逗你开心">
      <img :src="ewizardClap" class="pan-img" />
    </el-dialog>
  </div>
</template>

<script>
import errGif from '@/assets/images/401.gif'
import ewizardClap from '@/assets/images/401_p.gif'

export default {
  name: 'Page401',
  data () {
    return {
      errGif: errGif + '?' + new Date(),
      ewizardClap: ewizardClap,
      dialogVisible: false
    }
  },
  methods: {
    back () {
      this.$router.push('/')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.errPage-container {
  width: 800px;
  max-width: 100%;
  margin: auto;
  .pan-back-btn {
    margin-top: 100px;
    background: #008489;
    color: #fff;
    border: none !important;
  }
  .pan-gif {
    margin: 0 auto;
    display: block;
  }
  .pan-img {
    display: block;
    margin: 0 auto;
  }
  .text-jumbo {
    font-size: 60px;
    font-weight: 700;
    color: #484848;
  }
  .list-unstyled {
    font-size: 14px;
    li {
      padding-bottom: 5px;
      list-style: disc;
    }
    a {
      color: #008489;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
