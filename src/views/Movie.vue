<template lang="html">
  <div class="section">
    <div class="section-film-head">
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-5 col-md-4 col-xl-3 film-poster-col">
              <!-- col-lg-3 -->
              <div class="film-poster">
                <img :src="movie.poster" alt="movie poster">
              </div>
            </div>
            <div class="col-12 col-sm-7 col-md-8 col-xl-9">
              <div class="film-detail text-center text-lg-left">
                <!-- text-center -->
                <div class="title">
                  {{ movie.ru_title }}
                </div>
                <div class="film-detail-p">
                  <p class="orig_title">{{ movie.orig_title }}</p>
                  <p class="additional_information">{{ movie.country }} •
                    {{ movie.release_date | date }} • {{ movie.duration }} мин • {{ movie.age_limit }}+</p>
                  <p v-if="movie.tagline" class="tagline">«{{ movie.tagline }}»</p>
                </div>
                <div class="rating">
                  <div class="count">
                    <p class="rating-film-count">{{ movie.imdb_rating }}</p>
                  </div>
                  <div class="rating-film-name">
                    <p class="starlet-rating">Starlet</p>
                  </div>
                </div>
                <div class="rating">
                  <div class="count">
                    <p class="rating-film-count">{{ movie.imdb_rating }}</p>
                  </div>
                  <p class="rating-film-name">IMDb</p>
                </div>
                <div class="film-director">
                  <p v-if="directorsCount > 1" class="film-director-title">Режиссеры</p>
                  <p v-else class="film-director-title">Режиссер</p>
                  <div v-for="director in movie.directors" :key="director.slug" class="film-director-detail">
                    <a :href="`/actor/${director.slug}/`" class="film-director-name">{{ director.name }}</a>
                  </div>

                </div>
                <div class="film-genre">
                  <div v-for="genre in movie.genres" :key="genre.slug" class="film-genre-title">
                    <a :href="`/genre/${genre.slug}/`">{{ genre.title }}</a>
                  </div>
                </div>

                <div class="film-buttons">
                  <!-- <div class="film-section-button">
                    <a class="btn btn-small btn-blue" href="#">Поделиться</a>
                    <a class="btn btn-small btn-green" href="#">Внести изменения</a>
                  </div> -->
                  <div class="film-section-button">
                    <a class="btn btn-small btn-orange" href="#">Написать рецензию</a>
                  </div>
                  <div class="film-section-button">
                    <a class="btn btn-small-i btn-pink" href="#">
                      <i class="far fa-heart"></i>
                      <p>Сохранить</p>
                    </a>
                    <a class="btn btn-small-i btn-pink" href="#">
                      <i class="far fa-bookmark"></i>
                      <p>В коллекцию</p>
                    </a>
                  </div>
                </div>
                <div class="film-share">
                  <span>Поделиться:</span>
                  <i class="far fa-link"></i>
                  <i class="fab fa-telegram-plane"></i>
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-vk"></i>
                </div>
              </div>

            </div>
            <div class="col-12 text-center">
              <div class="film-section-button-bottom">
                <a class="btn btn-small btn-orange review-add" href="#">Написать рецензию</a>
              </div>
              <div class="film-section-button-bottom">
                <a class="btn btn-small-i btn-pink" href="#">
                  <i class="far fa-heart"></i>
                  <p>Сохранить</p>
                </a>
                <a class="btn btn-small-i btn-pink" href="#">
                  <i class="far fa-bookmark"></i>
                  <p>В коллекцию</p>
                </a>
              </div>
            </div>
          </div>
        </div>

    </div>

    <div class="section-film-body">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center text-md-left">
            <div class="film-cast">
              <div class="description-title">
                Актерский состав
              </div>
              <div class="section-cast-content">
                <div class="row no-gutters">
                  <div v-for="actor in movie.get_cast" :key="actor.slug" class="col-4 col-sm-3 col-md-2 col-cast col-films">
                    <div class="collection-film">
                      <a :href="`/actor/${actor.slug}/`" class="cast-link">
                        <img v-if="actor.photo" :src="actor.photo"  alt="actor photo">
                        <img v-else src="../assets/images/index.jpg"  alt="actor photo">
                      </a>
                      <a :href="`/actor/${actor.slug}`"><p class="cast-name">{{ actor.name }}</p></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 text-center">
            <div class="film-desription">
              <div class="description-title">
                Описание
              </div>
              <div class="description-content">
                {{ movie.description }}
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
  name: 'Movie',
  props: ['slug'],
  data() {
    return {
      movie: {},
      directorsCount: ''
    }
  },
  created() {
    this.loadMovie();
  },
  methods: {
    async loadMovie() {
      this.movie = await fetch(
        `${this.$store.getters.getServerUrl}/movie/${this.slug}`
      ).then(response => response.json())
      document.title = `${this.movie.ru_title} - Starlet`;
      this.directorsCount = Object.keys(this.movie.directors).length
    }
  },
  filters: {
      date(date) {
        return moment(date).locale('ru').format("DD MM YYYY");
      }
    }
}
</script>

<style lang="css" scoped>
</style>
