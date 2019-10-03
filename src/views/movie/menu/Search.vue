<template>
  <div class="search-body">
    <div class="search-movie-info">
      <div>
        <i data-v-08e2d0ee="" class="icon iconfont icon-htmal5icon25"></i>
        <input type="text" v-model="msg">
      </div>
    </div>
    <div class="search-movie-titile">电影/电视剧/综艺</div>
    <div class="search-result">
      <BScroll>
        <ul class="search-movie-list">
          <!--<MovieCard
            pic_src="http://p0.meituan.net/128.180/moviemachine/7b9b0725ab5feae642e1fbba9fbb90fe3702078.jpg"
            info_title="狮子王"
            info_look="137736 人想看"
            info_starring="主演: 唐纳德·格洛弗,詹姆斯·厄尔·琼斯,塞斯·罗根"
            info_des="2019-07-12上映"
            info_title_points="9.0"
            :isDashed="true"
          ></MovieCard>-->
          <MovieCard
            v-for="item in searchList"
            :key="item.id"
            :pic_src="item.img|handleImgSrc"
            :info_title="item.nm"
            :info_look="item.wish + '人想看'"
            :info_starring="'主演:' +  item.star"
            :info_des="item.pubDesc"
            :info_title_points="item.sc"
            :isDashed="true"
          ></MovieCard>
        </ul>
      </BScroll>
    </div>
  </div>
</template>

<script>
  import MovieCard from "@/components/MovieCard"
  import BScroll from "@/components/BScroll"
  export default {
    name: "Search",
    data(){
      return {
        msg: "",
        searchList: [],
      }
    },
    methods: {
      cancelRequest(){
        if(typeof this.source ==='function'){
          this.source('终止请求')
        }
      },
    },
    watch: {
      msg: function(newValue){
        // 取消上一次请求
        this.cancelRequest()
        var that = this;
        var id = this.$store.getters["city/getCityId"];
        this.axios.get("api/searchList?cityId="+id+"&kw="+newValue,{
          cancelToken: new this.axios.CancelToken(function(c){
            that.source = c;
          })
        }).then(res=>{
          this.searchList = res.data.data.movies.list;
        }).catch(err=>{
          if (this.axios.isCancel(err)) {
            console.log('Rquest canceled', err.message); //请求如果被取消，这里是返回取消的message
          } else {
            //handle error
            console.log(err);
          }
        })
      }
    },
    components: {
      MovieCard,
      BScroll
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
  .search-body{
    @include posover;
    top: px2rem(71);
  }
  .search-movie-info{
    width: 100%;
    padding: px2rem(20);
    box-sizing: border-box;
    background-color: #f5f5f5;
    div{
      display: flex;
      width: 100%;
      height: px2rem(60);
      background-color: white;
      i{
        display: block;
        width: px2rem(80);
        height: px2rem(60);
        font-size: px2rem(32);
        text-align: center;
        line-height: px2rem(60);
      }
      input{
        flex: 1;
        border: none;
        font-size: px2rem(24);
      }
    }
  }
  .search-movie-titile{
    width: 100%;
    padding-left: px2rem(15);
    height: px2rem(70);
    box-sizing: border-box;
    border-bottom: px2rem(1) solid #ccc;
    color: #999;
    font-size: px2rem(24);
    line-height: px2rem(70);

  }
  .search-result{
    @include posover;
    top: px2rem(171);
  }
  .search-movie-list{
    width: 100%;
    padding: 0 px2rem(20);
    box-sizing: border-box;
  }
</style>