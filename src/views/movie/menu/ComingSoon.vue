<template>
  <div class="movie-body">
    <BScroll>
      <ul class="coming-soon">
        <!--<MovieCard
          pic_src="http://p0.meituan.net/128.180/moviemachine/7b9b0725ab5feae642e1fbba9fbb90fe3702078.jpg"
          info_title="狮子王"
          info_look="137736 人想看"
          info_starring="主演: 唐纳德·格洛弗,詹姆斯·厄尔·琼斯,塞斯·罗根"
          info_des="2019-07-12上映"
          btn_mall="预售"
          :isImax="true"
          :btn_color="true"
          :isDashed="false"
        ></MovieCard>-->
        <MovieCard
          v-for="item in comingList"
          :key="item.id"
          :pic_src="item.img|handleImgSrc"
          :info_title="item.nm"
          :info_look="item.wish + '人想看'"
          :info_starring="'主演:' + item.star"
          :info_des="item.showInfo"
          btn_mall="预售"
          :isImax="true"
          :btn_color="true"
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
    name: "ComingSoon",
    data(){
      return {
        comingList: [],
      }
    },
    created(){
      this.axios.get("api/movieComingList?cityId="+this.$store.getters["city/getCityId"]).then(res=>{
        this.comingList = res.data.data.comingList;
      }).catch(err=>{
        alert("获取电影信息失败"+ err);
      })
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
  .movie-body .coming-soon{
    width: 100%;
    padding: px2rem(20);
    box-sizing: border-box;
  }
</style>