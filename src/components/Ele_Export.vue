<template>
  <el-dialog
    title="数据导出"
    :visible.sync="showDialog"
    @close="handleDialogClose"
    :close-on-click-modal="false"
  >
    <el-button @click="importCurrentData">当前数据</el-button>
    <el-button @click="importAllData">所有数据</el-button>
  </el-dialog>
</template>

<script>
export default {
  name: 'ImportDialog',

  props: {
    dialogVisible: {
      type: [Boolean],
      default: false
    }
  },

  data () {
    return {
      showDialog: false
    }
  },

  methods: {
    handleDialogClose () {
      this.showDialog = false
      this.$emit('dialogCloseFun', false)
    },

    importCurrentData () {
      this.$emit('downloadCurrent')
      this.handleDialogClose()
    },

    importAllData () {
      this.$emit('downloadAll')
      this.handleDialogClose()
    }
  },

  watch: {
    dialogVisible (newValue) {
      this.showDialog = newValue
    }
  }
}
</script>
