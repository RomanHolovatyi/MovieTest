<template>
  <keep-alive>
    <div class="page page-home">
      <div class="page-home__title">Find movie to watch, {{ user.name }}</div>
      <input
        v-model="searchQuery"
        placeholder="Enter movie title"
        class="page-home__input"
      >
      <multiselect
        v-model="movieType"
        :options="movieTypeList"
        hide-selected
        label="text"
        track-by="value"
        class="page-home__select"
        @select="onTypeSelect"
      />
      <h2>Total Results: {{ movieTotalCount }}</h2>
      <movie-list :movie-list="movieList" />
      <button
        v-if="isShowMoreButtonVisible"
        class="button page-home__button"
        @click="loadMoreMovies"
      >
        Load More
      </button>
    </div>
  </keep-alive>
</template>

<script>
  import debounce from 'lodash.debounce'
  import Multiselect from 'vue-multiselect'
  import 'vue-multiselect/dist/vue-multiselect.min.css'
  import movieList from '@/components/MovieList'
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'Home',
    components: {
      Multiselect,
      movieList
    },
    data () {
      return {
        movieType: {
          text: 'All',
          value: ''
        },
        movieTypeList: [
          {
            text: 'All',
            value: ''
          },
          {
            text: 'Movies',
            value: 'movie'
          },
          {
            text: 'TV Series',
            value: 'series'
          }
        ],
        page: 1,
        searchQuery: ''
      }
    },
    computed: {
      ...mapState({
        movieList: state => state.movies.movieList,
        movieTotalCount: state => state.movies.movieTotalCount,
        user: state => state.user
      }),
      isShowMoreButtonVisible () {
        return this.movieTotalCount - this.page * 10 > 0
      },
    },
    watch: {
      searchQuery: debounce(function () {
        this.page = 1
        this.loadMovies()
      }, 700)
    },
    methods: {
      ...mapActions({
        fetchMovieList: 'movies/fetchMovieList'
      }),
      loadMovies (type = this.movieType) {
        if (this.searchQuery.length < 3) return
        let params = { searchQuery: this.searchQuery, page: this.page, type: type.value }
        this.fetchMovieList(params)
      },
      loadMoreMovies () {
        this.page += 1
        this.loadMovies()
      },
      onTypeSelect (newType) {
        this.page = 1
        this.loadMovies(newType)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-home {
    &__title {
      font-size: 28px;
      font-weight: 800;
    }

    &__input {
      color: #333;
      font-size: 1.2rem;
      margin: 20px auto;
      padding: 1.5rem 2rem;
      border-radius: 0.2rem;
      background-color: rgb(255, 255, 255);
      border: 1px solid black;
      width: 90%;
      display: block;
      transition: all 0.3s;
    }

    &__select {
      width: 90%;
      margin: 0 auto;
    }

    &__button {
      margin-top: 20px;
    }
  }
</style>
