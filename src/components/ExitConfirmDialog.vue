<template>
  <el-dialog
    :visible.sync="confirmDialogVisible"
    width="40%"
    @close="handledCloseDialog"
    :close-on-click-modal="false"
  >
    <p class="font-size-20 padding-16" style="display: flex; align-items: center">
      <i class="el-icon-question color-e4a02b font-size-32 padding-r-20"></i>
      <span>{{confirmTitle}}</span>
    </p>
    <p class="text-align-r">
      <el-button type="info" @click="handledCloseDialog" size="small" plain>取消</el-button>
      <el-button type="success" @click="confirmLogout" size="small">确认</el-button>
    </p>
  </el-dialog>
</template>

<script>
export default {
  name: 'ExitConfirmDialog',

  props: {
    confirmTitle: {
      type: [String],
      default: '您确定要退出登录吗？'
    },

    dialogVisiable: {
      type: [String, Boolean],
      default: false
    }
  },

  data () {
    return {
      confirmDialogVisible: false
    }
  },

  methods: {
    handledCloseDialog () {
      this.$emit('cancelFun', false)
    },

    confirmLogout () {
      this.$emit('confirmFun')
    }
  },

  watch: {
    dialogVisiable (newValue) {
      this.confirmDialogVisible = newValue
    }
  },

  created () {
    this.confirmDialogVisible = false
  }
}
</script>
