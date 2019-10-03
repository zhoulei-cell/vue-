<template>
  <li class="movie-card" :class="{'dashed':isDashed}">
    <div class="movie-card-pic">
      <img :src="pic_src" alt="">
    </div>
    <div class="movie-card-info">
      <h5>
        {{info_title}} 
        <span v-if="info_title_points">{{info_title_points}}</span> 
        <img v-if="isImax" src="data:image/png;base64,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" alt="">
      </h5>
      <p>
        {{info_look}} 
        <span v-if="info_points">{{info_points}}</span> 
      </p>
      <p>{{info_starring}}</p>
      <p>{{info_des}}</p>
    </div>
    <div v-if="btn_mall" class="movie-card-mall">
      <span :class="{'btn-color':btn_color}">{{btn_mall}}</span>
    </div>
  </li>
</template>

<script>
  export default {
    name: "MovieCard",
    props: {
      pic_src: String,
      info_title: String,
      info_title_points: Number,
      info_look: String,
      info_points: Number,
      info_starring: String,
      info_des: String,
      btn_mall: String,
      isImax: Boolean,
      btn_color: Boolean,
      isDashed: Boolean,
    }
  }
</script>

<style lang="scss" scoped>
  @mixin text_overflow{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .movie-card{
    display: flex;
    width: 100%;
    margin-top: px2rem(20);
    padding-bottom: px2rem(20);
    border-bottom: px2rem(1) solid #ccc;
  }
  .movie-card.dashed{
    border-bottom: px2rem(1) dashed #ccc;
  }
  .movie-card .movie-card-pic{
      width: px2rem(128);
      height: px2rem(180);
      padding-right: px2rem(20);
      img{
        display: block;
        width: 100%;
        height: 100%;
      }
  }
  .movie-card .movie-card-info{
    flex: 1;
    overflow: hidden;
    position: relative;
    padding-right: px2rem(80);
    box-sizing: border-box;
    h5{
      height: px2rem(48);
      font-size: px2rem(30);
      line-height: px2rem(48);
      @include text_overflow;
      img{
        position: absolute;
        right: px2rem(15);
        top: px2rem(10);
      }
      span{
        position: absolute;
        right: px2rem(15);
        top: 0;
        color: orange;
      }
    }
    p{
      height: px2rem(44);
      color: #666;
      font-size: px2rem(25);
      line-height: px2rem(44);
      @include text_overflow;
      span{
        color: orange;
      }
    }
  }
  .movie-card .movie-card-mall{
    width: px2rem(90);
    height: px2rem(180);
    span{
      display: block;
      width: px2rem(90);
      height: px2rem(50);
      margin-top: px2rem(65);
      background-color: red;
      border-radius: px2rem(5);
      color: white;
      font-size: px2rem(26);
      line-height: px2rem(50);
      text-align: center;
    }
    span.btn-color{
      background-color: #3c9fe6;
    }
  }
</style>

