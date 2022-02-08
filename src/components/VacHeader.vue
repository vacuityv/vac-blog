<template>
  <div class="vac-header">

    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        :class="{'type-transparent': isHome}"
        mode="horizontal"
        @select="handleSelect"
        router="true"
        active-text-color="white"
        
    >

      <el-menu-item index="/" class="vac-header-menu-item" v-if="!isHome">
        <div class="vac-header-menu">
          <img src="../assets/logo.png">
        </div>
      </el-menu-item>
      <el-menu-item index="/home">Home</el-menu-item>
      <el-menu-item index="/about">About</el-menu-item>
      <el-menu-item index="/detail">ArticleDetail</el-menu-item>
      <el-menu-item index="3" class="vac-header-right">Other</el-menu-item>
    </el-menu>

  </div>
</template>

<script>
// let isFirst = true

export default {
  name: "VacHeader",
  data() {
    return {
      isHome: ''
    }
  },
  watch: {
    $route: function(to) {
      this.isHome = to.path === '/' || to.path === '/home'
    }
  },
  mounted() {

  },
}
</script>

<style scoped>
.vac-home-header {
  position: relative;
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6vw 3vw;
  min-height: 200px;
  max-height: 340px;
  text-align: center;
  margin-bottom: 50px;
}

.vac-header {
  z-index: 100;
  max-width: 1200px;
  margin: auto;
}

.vac-header .el-menu {
  background-color: #4f72f3;
  /*background-color: red;*/
  height: var(--el-header-height);
}

.vac-header .el-menu.type-transparent {
  background: transparent;
}

.vac-header-right {
  float: right; /* 浮动在右边 */
}

.el-menu--horizontal {
  border-bottom: 0;
}

.vac-header-menu {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin: 0;
}

.vac-header-menu img {
  height: 30px;
}

.el-menu--horizontal > .el-menu-item {
  color: rgba(255, 255, 255, 0.7);
  font-weight: bold;
  font-size: 1rem;
  transition: color var(--el-transition-duration)
}

.el-menu--horizontal > .el-menu-item:hover {
  background-color: inherit;
}

.vac-header-menu .el-menu .el-menu-item.is-active {
  border-bottom: 0px;
  color: white;
}

.el-menu--horizontal > .el-menu-item {
  border-bottom: 0;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 0px;
}

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  color: white;
  background-color: inherit;
}

</style>