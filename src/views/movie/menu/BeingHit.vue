<template>
  <div class="movie-body">
    <BScroll>
      <ul class="being-hit">
        <!--<MovieCard
          pic_src="http://p0.meituan.net/128.180/moviemachine/5dac476535359b7bb951ff15d37a9d0b153821.jpg"
          info_title="蜘蛛侠.英雄远征"
          info_look="观众评"
          info_points="9.0"
          info_starring="主演: 汤姆·赫兰德,杰克·吉伦哈尔,塞缪尔·杰克逊"
          info_des="今天15家影院放映157场"
          btn_mall="购票"
          :isImax="true"
          :btn_color="false"
          :isDashed="false"
        ></MovieCard>-->
        <MovieCard
          v-for="item in movieList"
          :key="item.id"
          :pic_src="item.img|handleImgSrc"
          :info_title="item.nm"
          info_look="观众评"
          :info_points="item.sc"
          :info_starring="'主演:'+ item.star"
          :info_des="item.showInfo"
          btn_mall="购票"
          :isImax="true"
          :btn_color="false"
          :isDashed="false"
        ></MovieCard>
      </ul>
    </BScroll>
  </div>
</template>

<script>
  import MovieCard from "@/components/MovieCard"
  import BScroll from "@/components/BScroll"
  export default {
    name: "BeingHit",
    data(){
      return {
        movieList:[],
      }
    },
    created(){
      this.axios.get("api/movieOnInfoList?cityId="+this.$store.getters["city/getCityId"]).then(res=>{
        this.movieList = res.data.data.movieList;
      }).catch(err=>{
        alert("获取电影信息失败"+err);
      });
    },
    components: {
      MovieCard,
      BScroll
    },
  }
</script>

<style lang="scss" scoped>
  .movie-body{
    overflow: hidden;
    position: absolute;
    top: px2rem(71);
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .movie-body .being-hit{
    width: 100%;
    padding: px2rem(20);
    box-sizing: border-box;
  }
</style>