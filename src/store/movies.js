import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/config/api.js'

Vue.use(Vuex)

const state = {
  movieList: [],
  movieTotalCount: 0
}

const actions = {
  async fetchMovieList ({ state, commit }, { searchQuery, page, type }) {
    try {
      const params = { s: searchQuery, page, apikey: this.state.user.token, type }
      const { data } = await Vue.axios.get(api.movies.fetchMovieList(), { params })
      console.log('error', data)
      commit('SET_MOVIE_LIST', { data: data, addToExistingList: page !== 1 })
      if (data.Response === 'False') {
        Vue.notify({ group: 'app', type: 'error', title: 'Error', text: data.Error })
      }
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
  SET_MOVIE_LIST (state, { data, addToExistingList }) {
    state.movieList = addToExistingList ? [...state.movieList, ...data.Search] : data.Search || []
    state.movieTotalCount = data.totalResults || 0
  }
}

export default {
  state,
  actions,
  mutations,
  namespaced: true
}
