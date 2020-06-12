<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<style>
  @import "assets/fonts/fontawesome5/css/all.min.css";
  @import "assets/css/bootstrap.css";
  @import "assets/css/style.css";
</style>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
