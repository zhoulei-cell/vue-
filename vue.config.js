module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: `@import "./src/assets/hotcss/px2rem.scss";`
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: "http://39.97.33.178/",
        changeOrigin: true,
      }
    }
  }
}