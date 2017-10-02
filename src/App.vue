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
@font-face {
  font-family: 'Karla';
  src: url("./assets/font/Karla-Regular.ttf");
}

@font-face {
    font-family: 'Amatic SC';
    src: url("./assets/font/AmaticSC-Bold.ttf");
}

@font-face {
    font-family: Muli;
    src: url("./assets/font/Muli-Regular.ttf");
}

#app {

  padding-top: 70px;
  margin: 0;
  font-family: 'Karla', sans-serif;
  font-size: 1.3em;
  overflow-x: hidden;
}
</style>
