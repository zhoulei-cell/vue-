<template>
  <div class="register">
    <h3>账号注册</h3>
    <InputGroup
      type="text"
      placeholder="用户名"
      v-model="username"
      :error="error.user"
    ></InputGroup>
    <InputGroup
      type="password"
      placeholder="密码"
      v-model="password"
      :error="error.pwd"
    ></InputGroup>
    <InputGroup
      type="text"
      placeholder="邮箱号"
      :btnTitle="btnTitle"
      v-model="email"
      :error="error.email"
      :disabled="disabled"
      @getVerify="getVerifyCode"
    ></InputGroup>
    <InputGroup
      type="text"
      placeholder="验证码"
      v-model="verify"
      :error="error.verify"
    ></InputGroup>
    <button @click="registerNow()" class="register-submit">立即注册</button>
    <div class="back">
      <router-link class="iconfont icon-fanhui" to="/login">返回登录</router-link>
    </div>
  </div>
</template>

<script>
  import InputGroup from "@/components/InputGroup"
  export default {
    name: "Register",
    data(){
      return {
        username: "",
        password: "",
        email: "",
        verify: "",
        disabled: false,
        btnTitle: "发送验证码",
        error: {
          user: "",
          pwd: "",
          email: "",
          verify: ""
        }
      }
    },
    methods: {
      getVerifyCode(){
        if(this.disabled){return};
        if(this.isEmail(this.email)){
          //倒计时
          this.Countdown();
          //发送验证码
        }
      },
      registerNow(){
        var isUser = this.isUser();
        var isPwd = this.isPwd();
        var isEmail = this.isEmail();
        var isVerify = this.isVerify();
        if(isUser && isPwd && isEmail && isVerify){
          //发送注册请求
        }
      },
      isUser(){
        if(/^[a-zA-Z_]\w{4,9}$/.test(this.username)){
          this.error.user = "";
          return true;
        }else{
          this.error.user = this.username ? "账号格式错误: 请填写以字母下划线开头,长度5-10位字母数字下划线的用户名" : "用户名不能为空";
          return false;
        }
      },
      isPwd(){
        if(/^\w{6,}$/.test(this.password)){
          this.error.pwd = "";
          return true;
        }else{
          this.error.pwd = this.password ? "密码格式错误: 请输入以字母开头,长度6位以上字母数字下划线" : "密码不能为空";
          return false;
        }
      },
      isEmail(){
        if(/^([\w]+)@([\w]+)\.([\w]+)$/.test(this.email)){
          this.error.email = "";
          return true;
        }else{
          this.error.email = this.email ? "请填写正确的邮箱地址" : "邮箱账号不能为空";
          return false;
        }
      },
      isVerify(){
        if(this.verify){
          this.error.verify = "";
          return true;
        }else{
          this.error.verify = "验证码不能为空";
          return false;
        }
      },
      Countdown(){
        var num = 60;
        this.disabled = true;
        var timer = window.setInterval(()=>{
          num--;
          this.btnTitle = num + "秒后重试";
          if(num == 0){
            this.disabled = false;
            this.btnTitle = "重新获取验证码";
            window.clearInterval(timer);
          }
        },1000)
      }
    },
    components: {
      InputGroup,
    }
  }
</script>


<style lang="scss" scoped>
  .register{
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
  .register-submit{
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
  .back{
    margin-top: px2rem(15);
    height: px2rem(70);
    text-align: right;
    line-height: px2rem(70);
    a{
      color: #888;
      font-size: px2rem(24);
    }
  }
</style>
