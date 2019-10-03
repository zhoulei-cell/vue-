<template>
  <div class="login">
    <h3>喵喵电影</h3>
    <InputGroup
      type="text"
      placeholder="账号"
      v-model="username"
      :error="error.user"
    ></InputGroup>
    <InputGroup
      type="password"
      placeholder="密码"
      v-model="password"
      :error="error.pwd"
    ></InputGroup>
    <button @click="loginNow()" class="login-submit">登录</button>
    <div class="login-links">
      
      <router-link to="/register">注册账号</router-link>
    </div>
  </div>
</template>

<script>
  import InputGroup from "@/components/InputGroup";
  export default {
    name: "Login",
    data(){
      return {
        username: "",
        password: "",
        error: {
          user: "",
          pwd: "",
        },
      }
    },
    methods:{
      loginNow(){
        var isUser = this.isUser();
        var isPwd = this.isPwd();
        if(isUser && isPwd){
          //验证成功，发送ajax请求验证

        }
      },
      isUser(){
        if(/^[a-zA-Z_]\w{4,9}$/.test(this.username)){
          this.error.user = "";
          return true;
        }else{
          this.error.user = this.username ? "您输入的账号格式有误,请确保您的账号是否正确" : "用户名不能为空";
          return false;
        }
      },
      isPwd(){
        if(/^\w{6,}$/.test(this.password)){
          this.error.pwd = "";
          return true;
        }else{
          this.error.pwd = this.password ? "您输入的密码格式有误,请确保您的密码是否正确" : "密码不能为空";
          return false;
        }
      }
    },
    components: {
      InputGroup,
    },
  }
</script>

<style lang="scss" scoped>
  .login{
    width: 100%;
    height: 100%;
    padding: px2rem(20) 7%;
    box-sizing: border-box;
    h3{
      width: 100%;
      height: px2rem(120);
      color: orange;
      font-size: px2rem(42);
      text-align: center;
      line-height: px2rem(120);
    }
  }
  .login-submit{
    width: 100%;
    height: px2rem(70);
    margin-top: px2rem(70);
    background-color: lightgreen;
    border: none;
    border-radius: px2rem(5);
    color: white;
    font-size: px2rem(26);
    line-height: px2rem(70);
  }
  .login-links{
    width: 100%;
    height: px2rem(70);
    margin-top: px2rem(15);
    line-height: px2rem(70);
    text-align: right;
    a{
      margin-left: px2rem(45);
      color: #888;
      font-size: px2rem(24);
    }
  }
</style>
