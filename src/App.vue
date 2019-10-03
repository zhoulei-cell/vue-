<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: "App"
  }
</script>


<style lang="scss">
  html,body,#app {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
</style>
