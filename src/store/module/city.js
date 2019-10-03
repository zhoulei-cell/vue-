const city = {
  namespaced: true,
  state: {
    cityId: "",
    cityName: "",
  },
  getters: {
    getCityId(state){
      return state.cityId;
    },
    getCityName(state){
      return state.cityName;
    }
  },
  mutations: {
    SETCITY(state,citys){
      state.cityId = citys.id;
      state.cityName = citys.name;
    }
  },
  actions: {
    SETCITY({commit},citys){
      commit("SETCITY",citys);
    }
  }
}
export default city;