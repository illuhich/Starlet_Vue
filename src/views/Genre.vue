<template lang="html">
  <div class="section">
    <div class="section-film-head">
      <div class="row no-gutters">
        <div class="col-12">
          <div class="film-detail text-center text-lg-left">
            <!-- text-center -->
            <div class="title">
              {{ genre.title }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section-collection">
      <div class="container">
        <div class="section-content-all">
          <div class="row no-gutters">
            <div v-for="movie in genre.movies" :key="movie.id" class="col-6 col-sm-4 col-md-3 col-lg-2 col-films">
              <div class="collection-film">
                <a :href="`/${movie.slug}/`" class="film-link">
                  <img :src="movie.poster" alt="">
                </a>
                <div class="hidden rating">
                  <div class="rating-count">
                    <p v-if="movie.imdb_rating <= 4" class="small">{{ movie.imdb_rating}}</p>
                    <p v-if="movie.imdb_rating <= 7" class="medium">{{ movie.imdb_rating}}</p>
                    <p v-else class="good">{{ movie.imdb_rating }}</p>
                  </div>
                  <div class="age_limit">
                    <p>{{ movie.age_limit }}+</p>
                  </div>
                </div>
                <div class="hidden info">
                  <p>{{ movie.ru_title }}</p>
                  <p class="release_date">{{ movie.release_date | publishDate }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Genre',
  props: ['slug'],
  data() {
    return {
      genre: {},
    }
  },
  created() {
    this.loadGenre();
  },
  methods: {
    async loadGenre() {
      this.genre = await fetch(
        `${this.$store.getters.getServerUrl}/movie/genre/${this.slug}`
      ).then(response => response.json())
      console.log(this.genre)
      document.title = `${this.genre.title} - Starlet`;
    }
  },
  filters: {
    publishDate(date) {
      return moment(date).locale('ru').format("D MMMM YYYY");
    }
  }
}
</script>

<style lang="css" scoped>
</style>
