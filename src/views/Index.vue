<template>
  <div class="main">
    <div class="content">
      <router-view></router-view>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
  import TabBar from "@/components/TabBar"
  export default {
    name: "Index",
    components: {
      TabBar,
    }
  }
</script>

<style lang="scss" scoped>
  .main{
    position: relative;
    width: 100%;
    height: 100%;
    .content{
      overflow: hidden;
      position: absolute;
      left: 0;
      top: 0;
      bottom: px2rem(110);
      width: 100%;
    }
  }
  
</style>
