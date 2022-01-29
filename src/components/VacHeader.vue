<template>
  <div class="vac-header">

    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        router="true"
        active-text-color="white"
    >
      <el-menu-item index="/" class="vac-header-menu-item">
        <div class="vac-header-menu">
          <img src="../assets/logo.png">
        </div>
      </el-menu-item>
      <el-menu-item index="/home">Home</el-menu-item>
      <el-menu-item index="/bar">About</el-menu-item>
      <el-menu-item index="3" class="vac-header-right">Other</el-menu-item>
    </el-menu>

  </div>
</template>

<script>
export default {
  name: "VacHeader"
}
</script>

<style scoped>

.vac-header{
  z-index: 100;
}

.vac-header .el-menu {
  background-color: #4f72f3;
}

.vac-header-right {
  float: right; /* 浮动在右边 */
}

.el-menu--horizontal {
  border-bottom: 0;
}

.vac-header-menu{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin: 0;
}
.vac-header-menu img {
  height: 30px;
}
.el-menu--horizontal>.el-menu-item {
  color: rgba(255, 255, 255, 0.7);
  font-weight: bold;
  font-size: 1rem;
}
.el-menu--horizontal>.el-menu-item:hover {
  background-color: inherit;
}
.vac-header-menu .el-menu .el-menu-item.is-active {
  border-bottom: 0px;
  color: white;
}
.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: 0px;
}

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  color: white;
  background-color: inherit;
}

</style>