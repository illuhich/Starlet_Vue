<template lang="html">
  <div class="section">
    <div class="section-film-head">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-4">
              <div class="collection-image">
                <img :src="collection.image" alt="">
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-8">
              <div class="collection-detail">
                <div class="title text-center">
                  {{ collection.title }}
                </div>
                <div class="row">
                  <div class="col-12 col-lg-6 text-center text-lg-left">
                    <div class="collection-owner">
                      <div class="detail-text">
                        <span>Создатель:</span>
                        <div class="owner-link">
                          <a href="#">{{ collection.owner.username }}</a>
                        </div>
                      </div>
                      <div class="detail-text">
                        <span>Дата обновления:</span>
                        <p>{{ collection.updated | publishDate }}</p>
                      </div>
                      <div class="detail-text">
                        <span>Колличество фильмов:</span>
                        <p>{{ CollectionMoviesCount }}</p>
                      </div>
                      <div class="detail-text">
                        <span>Колличество последователей:</span>
                        <p>{{ CollectionFollowersCount }}</p>
                      </div>
                      <div class="detail-text">
                        <span>Поделиться:</span>
                        <i class="far fa-link"></i>
                        <i class="fab fa-telegram-plane"></i>
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-vk"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <!-- {% if request.user == collection.owner %}
                      <div class="section-button text-center follow_button">
                        <a class="btn btn-small btn-red" href="#">Удалить коллекцию</a>
                      </div>
                    {% elif request.user in collection.followers.all %}
                      <div class="section-button text-center follow_button">
                        <a class="btn btn-small btn-red" href="#">Удалить из коллекций</a>
                      </div>
                    {% else %} -->
                      <div class="section-button text-center follow_button">
                        <a class="btn btn-small btn-pink" href="#">Добавить к коллекциям</a>
                      </div>
                    <!-- {% endif %} -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

    <div class="section-collection">
      <div class="container">
        <div class="section-content-all">
          <div class="row no-gutters">
            <div v-for="movie in collection.movies" :key="movie.id" class="col-6 col-sm-4 col-md-3 col-lg-2 col-films">
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
  name: 'Collection',
  props: ['id'],
  data() {
    return {
      collection: {},
      CollectionMoviesCount: '',
      CollectionFollowersCount: ''
    }
  },
  created() {
    this.loadMovie();
  },
  methods: {
    async loadMovie() {
      this.collection = await fetch(
        `${this.$store.getters.getServerUrl}/movie/collection/${this.id}`
      ).then(response => response.json())
      document.title = `${this.collection.title} - Starlet`;
      this.CollectionMoviesCount = Object.keys(this.collection.movies).length;
      this.CollectionFollowersCount = Object.keys(this.collection.followers).length;
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
