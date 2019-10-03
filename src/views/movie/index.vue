<template>
  <div class="movie">
    <MHeader title="喵喵电影" :isBack="false"></MHeader>
    <div class="movie-content">
      <div class="movie-menu">
        <router-link tag="div" to="/index/movie/city" class="city-name">
          <span>{{$store.getters['city/getCityName']}}</span>
          <i class="icon iconfont icon-xiajiantou"></i>
        </router-link>
        <div class="hot-switch">
          <router-link tag="div" to="/index/movie/beingHit" class="hot-item">正在热映</router-link>
          <router-link tag="div" to="/index/movie/comingSoon" class="hot-item">即将上映</router-link>
        </div>
        <router-link tag="div" to="/index/movie/search" class="search">
          <i class="icon iconfont icon-htmal5icon25"></i>
        </router-link>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import MHeader from "@/components/Header"
  export default {
    name: "movie",
    created(){
      //定位信息
      this.axios.get("api/getLocation").then(res=>{
        //window.localStorage.setItem("cityId",this.cityId);
        //window.localStorage.setItem("cityName",this.cityName);
        var id = res.data.data.id;
        var name = res.data.data.nm;
        this.$store.dispatch("city/SETCITY",{id,name});
      });
    },
    components: {
      MHeader,
    }
  }
</script>

<style lang="scss" scoped>
  @mixin posover{
    overflow: hidden;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .movie{
    height: 100%;
  }
  .movie-content{
    @include posover;
    top: px2rem(80);
  }
  .movie-menu{
    display: flex;
    justify-content: space-between;
    height: px2rem(71);
    padding: 0 px2rem(25);
    box-sizing: border-box;
    border-bottom: px2rem(1) solid #ccc;
    font-size: px2rem(30);
    cursor: pointer;
    .router-link-active{
      border-bottom: px2rem(2) solid red;
    }
    .city-name{
      height: px2rem(70);
      padding: 0 px2rem(20);  
      line-height: px2rem(70);
      i{
        font-size: px2rem(30);
        line-height: px2rem(70);
      }
    }
    .hot-switch{
      display: flex;
      height: px2rem(70);
      .hot-item{
        height: px2rem(70);
        padding: 0 px2rem(15);
        margin: 0 px2rem(20);
        text-align: center;
        line-height: px2rem(70);
      }
    }
    .search{
      width: px2rem(100);
      height: px2rem(70);
      text-align: center;
      i{
        color: red;
        font-size: px2rem(40);
        line-height: px2rem(70);
      }
    }
  }
</style>

