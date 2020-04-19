import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/config/api.js'

Vue.use(Vuex)

const state = {}

const actions = {
  async fetchMovieList (store, { search, page }) {
    const { data } = await Vue.axios.get(api.movies.fetchMovieList(), {
      params: {
        s: search,
        page
      }
    })
    return data
  },
  async fetchMovieById (store, id) {
    const { data } = await Vue.axios.get(api.main, {
      params: {
        i: id
      }
    })
    return data
  }
}

export default {
  state,
  actions
}
