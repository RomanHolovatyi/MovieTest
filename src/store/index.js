import Vue from 'vue'
import Vuex from 'vuex'
import movies from './movies'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: 'Code Reviewer',
      token: '273b9080'
    }
  },
  mutations: {
  },
  actions: {},
  modules: {
    movies
  }
})
