<template>
  <div class="footer">
    <ul class="tab-bar">
      <router-link tag="li" to="/index/movie">
        <i class="iconfont icon-dianying"></i>
        <span>电影</span>
      </router-link>
      <router-link tag="li" to="/index/cinema">
        <i class="iconfont icon-dianyingshipin"></i>
        <span>影院</span>
      </router-link>
      <router-link tag="li" to="/index/mine">
        <i class="iconfont icon-wode"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabBar",
}
</script>

<style lang="scss" scoped>
  .footer{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: px2rem(110);
    padding: px2rem(10) 0;
    box-sizing: border-box;
    border-top: px2rem(1) solid #ccc;
    .tab-bar{
      display: flex;
      width: 100%;
      height: 100%;
      li{
        flex: 1;
        font-size: px2rem(30);
        text-align: center;
        i{
          font-size: px2rem(40);
          display: block;
        }
      }
      .router-link-active{
        color: red;
      }
    }
  }
</style>

