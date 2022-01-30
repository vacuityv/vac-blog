<template>
  <div class="afb-right">
    <el-icon :size="24" color="white" class="afb-right" @click="dialogFormVisible = true">
      <user/>
    </el-icon>
  </div>

  <el-dialog v-model="dialogFormVisible"
             width="400px"
             :show-close="false"
             :center="true"
             :close="dialogClose()"
  >
    <div class="dialog-title">
      <img src="../assets/logo.png">
      <div class="title-text">Vacuity</div>
    </div>
    <el-form :model="form"
             label-position="top"
             style="max-width: 460px"
    >
      <el-form-item label="Account">
        <el-input v-model="form.account" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="form.password" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="login()" :loading="loading">Sign in</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>

import {reactive, ref} from 'vue'


export default {
  name: "Login",
  setup() {
    const dialogFormVisible = ref(false)
    const form = reactive({
      account: '',
      password: '',
    })
    const loading = ref(false)

    return {dialogFormVisible, form, loading}
  },

  methods:{
    login(){
      this.loading = true;
      var loginTimes = localStorage.getItem("loginTimes")
      if (loginTimes === null) {
        loginTimes = 0;
      }
      loginTimes = parseInt(loginTimes)
      localStorage.setItem("loginTimes", loginTimes + 1);
    },
    dialogClose(){
      this.loading = false;
      console.log("loginTimes=" + localStorage.getItem("loginTimes"))
    }
  }
}
</script>

<style scoped>

.dialog-title {
  text-align: center;
  padding-top: -20px;
}

.dialog-title img {
  width: 55px;
  margin-bottom: 20px;
}

.dialog-title .title-text {
  font-weight: 500;
  font-size: 23px;
  margin-bottom: 20px;
}

.el-dialog .el-dialog--center .el-dialog__body {
  padding: 0 50px !important;
}

.el-form-item--default {
  font-size: 18px !important;
  font-weight: 500 !important;
}

.dialog-footer .el-button {
  padding: 0;
  width: 350px;
  height: 40px;
  background-color: #4f72f3;
  color: white;
  font-weight: 500;
}

</style>