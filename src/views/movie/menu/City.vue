<template>
  <div class="city-body">
    <BScroll ref="bscroll">
      <div class="city-list" ref="city_list">
        <div class="city-hot">
          <h5>热门城市</h5>
          <ul class="city-hot-list">
            <li class="city-hot-list-item" v-for="hot in cityHot" :key="hot.id" @click="handleCity(hot.id,hot.nm)">{{hot.nm}}</li>
            <!--<li class="city-hot-list-item">上海</li>
            <li class="city-hot-list-item">广州</li>
            <li class="city-hot-list-item">天津</li>
            <li class="city-hot-list-item">杭州</li>
            <li class="city-hot-list-item">南京</li>
            <li class="city-hot-list-item">成都</li>-->
          </ul>
        </div>
        <div class="city-sort" v-for="(item,index) in cityIndex" :key="index">
          <h5>{{item}}</h5>
          <ul class="city-sort-list">
            <li class="city-sort-list-item" v-for="city in cityList[item]" :key="city.id" @click="handleCity(city.id,city.nm)">{{city.nm}}</li>
          </ul>
        </div>
      </div>
      <div class="city-index">
        <ul class="city-index-list">
          <li class="city-index-list-item" @click="handleToIndex(0)" key="0">#</li>
          <li class="city-index-list-item" @click="handleToIndex(index+1)" v-for="(item,index) in cityIndex" :key="index + 1">{{item}}</li>
        </ul>
      </div>
    </BScroll>
  </div>
  
</template>

<script>
  import BScroll from "@/components/BScroll"
  export default {
    name: "City",
    data(){
      return {
        cityId: "",
        cityName: "",
        cityHot: [],
        cityList: {},
        cityIndex: []
      }
    },
    created(){
      //城市信息
      var cityHot = window.localStorage.getItem("cityHot");
      var cityList = window.localStorage.getItem("cityList");
      var cityIndex = window.localStorage.getItem("cityIndex");
      if( cityHot && cityList && cityIndex ){
        this.cityHot = JSON.parse(cityHot);
        this.cityList = JSON.parse(cityList);
        this.cityIndex = JSON.parse(cityIndex);
        return;
      }
      this.axios.get("/api/cityList").then(res=>{
        var key = '',
            cityData = res.data.data.cities;
        cityData.forEach((item)=>{
          //热门城市
          if(item.isHot == 1){
            this.cityHot.push(item);
          }
          //城市列表
          key = item.py.substring(0,1).toUpperCase();
          if( !(key in this.cityList) ){
            this.cityList[key] = [];
            this.cityIndex.push(key);
          }
          this.cityList[key].push(item);
        })
        this.cityIndex.sort();
        window.localStorage.setItem("cityHot",JSON.stringify(this.cityHot));
        window.localStorage.setItem("cityList",JSON.stringify(this.cityList));
        window.localStorage.setItem("cityIndex",JSON.stringify(this.cityIndex));
      })
    },
    methods:{
      handleCity(id,name){
        //window.localStorage.setItem("cityId",id);
        //window.localStorage.setItem("cityName",name);
        this.$store.dispatch("city/SETCITY",{id,name});
      },
      handleToIndex(index){
        var childs = this.$refs.city_list.getElementsByTagName("div");
        //this.$refs.city_list.parentNode.scrollTop = childs[index].offsetTop;
        this.$refs.bscroll.scroll.scrollToElement(childs[index]);
      }
    },
    components:{
      BScroll,
    },
  }
</script>

<style lang="scss" scoped>
  @mixin hBar{
    height: px2rem(60);
    color: #a4a4a4;
    font-size: px2rem(32);
    line-height: px2rem(60);
  }
  .city-body{
    overflow: hidden;
    position: absolute;
    top: px2rem(71);
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .city-list{
    padding: px2rem(20) px2rem(100) 0 px2rem(30);
    box-sizing: border-box;
  }
  .city-list .city-hot{
    width: 100%;
    h5{
      @include hBar;
    }
    .city-hot-list{
      display: flex;
      flex-wrap: wrap;
      .city-hot-list-item{
        width: 29%;
        height: px2rem(50);
        margin-left: 3%;
        margin-top: px2rem(20);
        background-color: #eee;
        text-align: center;
        font-size: px2rem(30);
        line-height: px2rem(50);
      }
    }
  }

  .city-list .city-sort{
    width: 100%;
    margin-top: px2rem(10);
    h5{
      @include hBar;
    }
    .city-sort-list{
      .city-sort-list-item{
        height: px2rem(60);
        border-bottom: px2rem(1) solid #ccc;
        font-size: px2rem(25);
        line-height: px2rem(60);
      }
    }

  }

  .city-index{
    position: fixed;
    top: 50%;
    right: px2rem(10);
    transform: translateY(-48%);
    cursor: pointer;
    .city-index-list{
      .city-index-list-item{
        width: px2rem(50);
        height: px2rem(36);
        font-size: px2rem(26);
        text-align: center;
        line-height: px2rem(36);
      }
    }
  }
</style>