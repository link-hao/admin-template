<template>
  <div class="customLoading">
    <div class="main">
      <img src="../assets/images/ajax-loader.gif" />
    </div>
  </div>
</template>
<style lang="less" scoped>
.customLoading {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3000;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
