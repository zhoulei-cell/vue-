import Vue from "vue"
import Vuex from "vuex"

import city from "./module/city" 

Vue.use(Vuex)

const modules = {
  city,
}

const store = new Vuex.Store({
  modules
})

export default store;