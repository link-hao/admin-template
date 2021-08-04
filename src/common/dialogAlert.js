var notificationConfig = {
  duration: 2500,
  successTitle: '成功',
  warningTitle: '警告',
  errorTitle: '错误'
}

var dialogAlert = function (Vue, options) {
  Vue.prototype.showError = function (errorMsg, confirmCallback, cancelCallback, showCancelButton = false) {
    this.$confirm(errorMsg, '错误', {
      confirmButtonText: '确定',
      type: 'error',
      showCancelButton: showCancelButton,
      center: true
    }).then(confirmCallback).catch(cancelCallback)
  }

  Vue.prototype.showWarning = function (warning, confirmCallback, cancelCallback, showCancelButton = false) {
    this.$confirm(`${warning}`, '提示', {
      confirmButtonText: '确定',
      type: 'warning',
      showCancelButton: showCancelButton,
      center: true
    }).then(confirmCallback).catch(cancelCallback)
  }

  Vue.prototype.showSuccess = function (msg, confirmCallback, cancelCallback, showCancelButton = false) {
    this.$confirm(msg, '成功', {
      confirmButtonText: '确定',
      type: 'success',
      showCancelButton: showCancelButton,
      center: true
    }).then(confirmCallback).catch(cancelCallback)
  }

  Vue.prototype.showMessage = function (msg, type = 'success') {
    const message = msg || '操作成功！'
    this.$message({
      showClose: true,
      message: message,
      type: type,
      duration: notificationConfig.duration
    })
  }

  Vue.prototype.NotifySuccess = function (msg) {
    this.$notify.success({
      title: notificationConfig.successTitle,
      message: msg,
      duration: notificationConfig.duration
    })
  }

  Vue.prototype.NotifyWarning = function (msg) {
    this.$notify.warning({
      title: notificationConfig.warningTitle,
      message: msg,
      duration: notificationConfig.duration
    })
  }

  Vue.prototype.NotifyError = function (msg) {
    this.$notify.error({
      title: notificationConfig.errorTitle,
      message: msg,
      duration: notificationConfig.duration
    })
  }
}

export default dialogAlert
