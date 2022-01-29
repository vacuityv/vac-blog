<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <vac-header></vac-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import VacHeader from "@/components/VacHeader";

export default {
  name: 'App',
  components: {VacHeader},
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.common-layout {
}

.common-layout .el-container {
  /*max-width: 1200px;*/
}
</style>
