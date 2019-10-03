<template>
  <li class="cinema-card">
    <h5 class="card-name">
      <span>{{title}}</span>
      <span class="money">{{money}} 元起</span>
    </h5>
    <div class="addrs">
      <span>{{addr}}</span>
      <span>{{distance}}</span>
    </div>
    <div class="welfare-wrap">
      <slot></slot>
    </div>
  </li>
</template>

<script>
  export default {
    name: "CinemaCard",
    props: {
      title: String,
      money: String,
      addr: String,
      distance: String,
    }
  }
</script>

<style lang="scss" scoped>
  .cinema-card{
    width: 100%;
    margin-top: px2rem(20);
    padding-bottom: px2rem(20);
    border-bottom: px2rem(1) solid #ccc;
    .card-name{
      height: px2rem(70);
      font-size: px2rem(30);
      line-height: px2rem(70);
      .money{
        color: red;
        margin-left: px2rem(30);
      }
    }
    .addrs{
      width: 100%;
      color: #666;
      font-size: px2rem(24);
      line-height: px2rem(45);
      span:nth-of-type(2){
        float: right;
        margin-right: px2rem(26);
      }
    }
    .welfare{
      display: flex;
      padding: px2rem(12) 0 px2rem(12);
      span{
        display: block;
        margin-right: px2rem(10);
        padding: px2rem(2) px2rem(15);
        border: px2rem(1) solid orange;
        border-radius: px2rem(5);
        color: orange;
        font-size: px2rem(24);
      }
    }
  }
</style>
