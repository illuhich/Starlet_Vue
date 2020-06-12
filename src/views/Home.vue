<template lang="ru">
  <div class="section">
    <div class="section-search d-lg-none">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="search">
              <form class="search__container">
                <input class="search__input" type="text" placeholder="Найти киношку...">
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- <div class="section section-collection">
      <div class="container">
        <div class="section-title text-center text-md-left">
          <a class="section-title_link" href="#">Новинки кино</a>
        </div>
        <div class="section-content">
          <div class="row no-gutters">
            {% for film in films %}
            <div class="col-6 col-sm-4 col-md-3 col-lg-2 col-films">
              <div class="collection-film">
                <a href="#" class="film-link">
                  <img src="#" alt="">
                </a>
                <div class="hidden rating">
                  <div class="rating-count">
                  {% if film.imdb_rating <= 4.5  %}
                    <p class="small">{{ film.imdb_rating|stringformat:".1f" }}</p>
                  {% elif film.imdb_rating <= 7 %}
                    <p class="medium">{{ film.imdb_rating|stringformat:".1f" }}</p>
                  {% else %}
                    <p class="good">{{ film.imdb_rating|stringformat:".1f" }}</p>
                  {% endif %}
                  </div>
                  <div class="age_limit">
                    {% if film.age_limit == 18  %}
                      <p class="small">{{ film.age_limit }}+</p>
                    {% else %}
                      <p class="good">{{ film.age_limit }}+</p>
                    {% endif %}
                  </div>
                </div>
                <div class="hidden info">
                  <p>{{ film.ru_title }}</p>
                  <p class="release_date">{{ film.release_date|date:'d E Y' }}</p>
                </div>
              </div>
            </div>
            {% endfor %}
          </div>
        </div>
        <div class="section-button text-center text-lg-right">
          <a class="btn btn-orange" href="#">Просмотреть коллекцию</a>
        </div>
      </div>
    </div>

    <div class="section section-collection">
      <div class="container">
        <div class="section-title text-center text-md-left">
          <a class="section-title_link" href="#">Сейчас в кинотеатрах</a>
        </div>
        <div class="section-content">
          <div class="row no-gutters">
            {% for film in films %}
            <div class="col-6 col-sm-4 col-md-3 col-lg-2 col-films">
              <div class="collection-film">
                <a href="#" class="film-link">
                  <img src="#" alt="">
                </a>
                <div class="hidden rating">
                  <div class="rating-count">
                  {% if film.imdb_rating <= 4.5  %}
                    <p class="small">{{ film.imdb_rating|stringformat:".1f" }}</p>
                  {% elif film.imdb_rating <= 7 %}
                    <p class="medium">{{ film.imdb_rating|stringformat:".1f" }}</p>
                  {% else %}
                    <p class="good">{{ film.imdb_rating|stringformat:".1f" }}</p>
                  {% endif %}
                  </div>
                  <div class="age_limit">
                    {% if film.age_limit == 18  %}
                      <p class="small">{{ film.age_limit }}+</p>
                    {% else %}
                      <p class="good">{{ film.age_limit }}+</p>
                    {% endif %}
                  </div>
                </div>
                <div class="hidden info">
                  <p>{{ film.ru_title }}</p>
                  <p class="release_date">{{ film.release_date|date:'d E Y' }}</p>
                </div>
              </div>
            </div>
            {% endfor %}
          </div>
        </div>
        <div class="section-button text-center text-lg-right">
          <a class="btn btn-orange" href="#">Просмотреть коллекцию</a>
        </div>
      </div>
    </div> -->
    <div v-for="collection in collectionsList" :key="collection.id" class="section section-collection">
      <div class="container">
        <div class="section-title text-center text-md-left">
          <a class="section-title_link" :href="`collection/${collection.id}`">
            {{ collection.title }}
          </a>
        </div>
        <div class="section-content">
          <div class="row no-gutters">
            <div v-for="movie in collection.get_films" :key="movie.id" class="col-6 col-sm-4 col-md-3 col-lg-2 col-films">
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
        <div class="section-button text-center text-lg-right">
          <a class="btn btn-orange" :href="`collection/${collection.id}`">
            Просмотреть коллекцию
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Home',
  data() {
    return {
      collectionsList: []
    }
  },
  components: {

  },
  created() {
    this.loadListCollections()
  },
  methods: {
    async loadListCollections() {
      this.collectionsList = await fetch(
        `${this.$store.getters.getServerUrl}/movie/collections`
      ).then(response => response.json())
      // console.log(this.collectionsList)
    }
  },
  filters: {
    publishDate(date) {
      return moment(date).locale('ru').format("D MMMM YYYY");
    }
  }
}
</script>
