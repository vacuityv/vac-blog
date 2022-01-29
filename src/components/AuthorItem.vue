<template>
  <el-row class="vac-article-author">
    <el-col :span="1">
      <img src="../assets/logo.png">
    </el-col>
    <el-col :span="18">
      <el-row>
        <el-col :span="24" class="author-name">{{ authorName }}</el-col>
        <el-col :span="24" class="author-time">{{ authorTime }}</el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "AuthorItem",
  data(){
  },
  props: ['authorName', 'authorTime']
}
</script>

<style scoped>

.vac-article-author {
  margin-top: 20px;
  text-align: left;
  vertical-align: center;
}

.vac-article-author img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

.vac-article-author .author-name {
  font-weight: bold;
}

.vac-article-author .author-time {
  color: #90a2aa;
}

</style>