import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/config/api.js'

Vue.use(Vuex)

const state = {
  movieList: [],
  movieTotalCount: 0,
  movieError: ''
}

const actions = {
  async fetchMovieList ({ state, commit }, { searchQuery, page }) {
    try {
      const params = { s: searchQuery, page, apikey: this.state.user.token }
      const { data } = await Vue.axios.get(api.movies.fetchMovieList(), { params })
      commit('SET_MOVIE_LIST', data)
    } catch (err) {
      console.log('err in fetchMovieList', err)
    }

  },
  async fetchMovieById (store, id) {
    try {
      console.log('id', id)
      const params = { i: id, apikey: this.state.user.token }
      const { data } = await Vue.axios.get(api.movies.fetchMovieById(), { params })
      return data
    } catch (err) {
      console.log('err in fetchMovieById', err)
    }
  }
}

const mutations = {
  SET_MOVIE_LIST (state, payload) {
    state.movieList = payload.Search
    state.movieTotalCount = payload.totalResults
    state.movieError = payload.movieError
  }
}

export default {
  state,
  actions,
  mutations,
  namespaced: true
}
