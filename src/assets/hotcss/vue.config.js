module.exports = {
  //关闭eslint代码验证
  lintOnSave: false,
  css: {
    loaderOptions: {
      //给sass引入全局变量
      sass: {
        data: `@import "./src/assets/hotcss/px2rem.scss";`
      }
    }
  }
}