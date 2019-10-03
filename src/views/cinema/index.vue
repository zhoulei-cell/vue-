<template>
  <div class="cinema">
    <MHeader title="喵喵影院" :isBack="false"></MHeader>
    <div class="cinema-content">
      <div class="cinema-menu">
        <div class="city_switch">
					全城 <i class="iconfont icon-xiajiantou"></i>
        </div>
        <div class="brand_swtich">
					品牌 <i class="iconfont icon-xiajiantou"></i>
        </div>
        <div class="feature_switch">
					特色 <i class="iconfont icon-xiajiantou"></i>
        </div>
      </div>
      <div class="cinema-body">
        <BScroll>
          <ul class="cinema-card-list">
            <CinemaCard
            v-for="item in cinemas"
            :key="item.id"
            :title="item.nm"
            :money="item.sellPrice"
            :addr="item.addr"
            :distance="item.distance"
            >
            <div class="welfare">
              <template v-for="(tag,key) in item.tag">
                <span v-if="tag == 1" :key="key">{{key}}</span>
              </template>
            </div>
            </CinemaCard>
          </ul>
        </BScroll>
      </div>
    </div>
  </div>
</template>

<script>
  import MHeader from "@/components/Header"
  import CinemaCard from "@/components/CinemaCard"
  import BScroll from "@/components/BScroll"
  export default {
    name: "cinema",
    data(){
      return {
        cinemas:[],
      }
    },
    created(){
      this.axios("api/cinemaList?cityId="+this.$store.getters["city/getCityId"]).then(res=>{
        this.cinemas = res.data.data.cinemas;
        console.log(this.cinemas)
      }).catch(err=>{

      })
    },
    components: {
      MHeader,
      CinemaCard,
      BScroll
    },
    
  }
</script>

<style lang="scss" scoped>
  .cinema,.cinema-content,.cinema-body{
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .cinema-content{
    top: px2rem(80);
  }
  .cinema-menu{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: px2rem(70);
    border-bottom: px2rem(1) solid #bbb;
    box-sizing: border-box;
    div{
      font-size: px2rem(30);
      i{
        font-size: px2rem(30);
      }
    }
  }
  .cinema-body{
    top: px2rem(70);
  }
  .cinema-card-list{
    width: 100%;
    padding: 0 px2rem(30);
    box-sizing: border-box;
  }
</style>