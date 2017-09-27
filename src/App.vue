<template>
  <div id="app">
    <main-menu></main-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue'

export default {
  name: 'app',
  components: {
    MainMenu
  }
}
</script>

<style>
#app {
  @font-face {
    font-family: 'Karla';
    src: url("./assets/font/Karla-Regular.ttf");
  }

  padding-top: 70px;
  margin: 0;
  /*.body-font;*/
  font-family: 'Karla';
  font-size: 1.3em;
  overflow-x: hidden;
}
</style>
