<template>
  <div class="header">
    <i class="iconfont icon-fanhui" v-if="isBack" @click="$emit('back')"></i>
    <h3>{{title}}</h3>
  </div>
</template>

<script>
  export default {
    name: "Header",
    props: ["title","isBack"]
  }
</script>

<style lang="scss" scoped>
  .header{
    position: absolute;
    width: 100%;
    padding: px2rem(10) px2rem(20);
    height: px2rem(80);
    box-sizing: border-box;
    background-color: red;
    color: white;
    font-size: px2rem(40);
    text-align: center;
    line-height: px2rem(60);
    i{
      float: left;
      height: px2rem(60);
      font-size: px2rem(40);
    }
    h3{
      height: 100%;
    }
  }
</style>

