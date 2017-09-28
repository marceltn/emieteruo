<template>
  <div id="app">
    <div id="page-top">
      <main-menu></main-menu>
      <router-view></router-view>
      <main-footer></main-footer>
    </div>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue'
import MainFooter from './components/MainFooter.vue'

export default {
  name: 'app',
  components: {
    MainMenu,
    MainFooter
  }
}
</script>

<style>
@import "./assets/vendor/bootstrap/css/bootstrap.min.css";

@font-face {
  font-family: 'Karla';
  src: url("./assets/font/Karla-Regular.ttf");
}

#app {

  padding-top: 70px;
  margin: 0;
  font-family: 'Karla', sans-serif;
  font-size: 1.3em;
  overflow-x: hidden;
}
</style>
