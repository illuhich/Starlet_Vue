<template lang="html">
  <div class="section">
    <div class="section-film-head">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-4">
              <div class="collection-image">
                <img v-if="actor.photo" :src="actor.photo" alt="">
                <img v-else src="../assets/images/index.jpg" alt="">
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-8">
              <div class="collection-detail">
                <div class="title text-center">
                  {{ actor.name }}
                </div>
                <div class="row">
                  <div class="col-12 text-center text-lg-left">
                    <div class="collection-owner">
                      <div class="detail-text">
                        <span>Карьера:</span>
                        <p>{{ actor.career }}</p>
                      </div>
                      <div class="detail-text">
                        <span>Дата рождения:</span>
                        <p>{{ actor.birth_date | publishDate }}</p>
                      </div>
                      <div class="detail-text">
                        <span>Место рождения:</span>
                        <p>{{ actor.birth_place }}</p>
                      </div>
                      <div class="detail-text">
                        <span>Количество фильмов:</span>
                        <p>{{ castLen }}</p>
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
                </div>
              </div>
            </div>
            <div v-if="actor.biography" class="col-12 text-center">
              <div class="film-desription">
                <div class="biography-title">
                  Биография
                </div>
                <div class="biography-content">
                  {{ actor.biography }}
                </div>
              </div>
            </div>
            <!-- <div class="col-12 text-center">
              <div class="film-desription">
                <div class="biography-title">
                  Фильмы
                </div>
              </div>
            </div> -->
          </div>
        </div>
    </div>

    <div class="section-collection">
      <div class="container">
        <div class="section-content-all">
          <div class="row no-gutters">
            <div v-for="movie in actor.movie_cast" :key="movie.id" class="col-6 col-sm-4 col-md-3 col-lg-2 col-films">
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
                    <p class="good">{{ movie.age_limit }}+</p>
                    <!-- {% if film.age_limit == 18  %}
                      <p class="small">{{ film.age_limit }}+</p>
                    {% else %}
                      <p class="good">{{ film.age_limit }}+</p>
                    {% endif %} -->
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
  name: 'Actor',
  props: ['slug'],
  data() {
    return {
      actor: {},
      castLen: ''
    }
  },
  created() {
    this.loadActor()
  },
  methods: {
    async loadActor() {
      this.actor = await fetch(
        `${this.$store.getters.getServerUrl}/movie/actor/${this.slug}`
      ).then(response => response.json())
      this.castLen = Object.keys(this.actor.movie_cast).length
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
