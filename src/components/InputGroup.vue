<template>
  <div class="input-group">
    <div class="input-box" :class="{'is-err':error}">
      <input :type="type" :value="value" :placeholder="placeholder" @input="$emit('input',$event.target.value)">
      <button v-if="btnTitle" :class="{'disabled':disabled}" :disabled="disabled" @click="$emit('getVerify')">{{btnTitle}}</button>
   </div>
   <div v-if="error" class="error">{{error}}</div>
  </div>
  
</template>

<script>
  export default {
    name: "InputGroup",
    props:{
      type:{
        type: String,
        default: "text"
      },
      value: String,
      placeholder: String,
      btnTitle: String,
      disabled: Boolean,
      error: String
    },
  }
</script>

<style lang="scss" scoped>
  .input-group{
    padding: px2rem(25) 0;
  }
  .input-box{
    display: flex;
    width: 100%;
    height: px2rem(70);
    padding: 0 px2rem(20);
    box-sizing: border-box;
    border: px2rem(1) solid #ccc; 
    border-radius: px2rem(5);
    input{
      flex: 1;
      overflow: hidden;
      height: 100%;
      border: none;
      outline: none;
      font-size: px2rem(26);
    }
    button{
      height: 100%;
      margin-left: px2rem(20);
      border: none;
      background-color: transparent;
      font-size: px2rem(26);
    }
    button.disabled{
      color: #888;
    }
  }
  .is-err{
    border: px2rem(1) solid red; 
  }
  .error{
    color: red;
    font-size: px2rem(24);
    line-height: px2rem(45);
  }
</style>