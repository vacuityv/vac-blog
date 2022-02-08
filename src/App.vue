<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <vac-header></vac-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <!--      <el-footer>Footer</el-footer>-->
    </el-container>


<!--    <Login/>-->

  </div>
</template>

<script>
import VacHeader from "@/components/VacHeader";
// import Login from "@/components/Login";



export default {
  name: 'App',
  components: {
    VacHeader,
    // Login
  }
}


</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.common-layout {
}

.common-layout .el-container {
  /*max-width: 1200px;*/
}

.el-header {
  --el-header-padding: 0;
  --el-header-height: 60px;
  padding: var(--el-header-padding);
  box-sizing: border-box;
  flex-shrink: 0;
  height: var(--el-header-height);
  background-color: #4f72f3;
}

#app .el-main {
  --el-main-padding: 0px;
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  box-sizing: border-box;
  padding: var(--el-main-padding);
}

.main-content {
  max-width: 1200px;
  margin: auto;
}

.common-layout .afb-right {
  width: 60px;
  height: 60px;
  background-color: #4f72f3;
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
}




</style>
