<template>
  <div class="better-scroll" ref="scroll">
    <slot></slot>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  export default {
    name: "BScroll",
    data(){
      return {
        scroll: null,
      }
    },
    mounted(){
      this.$nextTick(()=>{
        this.scroll = new BScroll(this.$refs.scroll,{
          tap: true,
          click: true
        })
      })
    }
  }
</script>

<style lang="scss" scoped>
.better-scroll{
    width: 100%;
    height: 100%;
  }
</style>