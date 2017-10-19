<template>
<div id="app">
  <main-menu></main-menu>
  <router-view></router-view>
  <main-footer></main-footer>
</div>
</template>

<script>
import MainMenu from './components/shared/MainMenu.vue'
import MainFooter from './components/shared/MainFooter.vue'

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


/* Reset */
/*
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after, q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

body {
  -webkit-text-size-adjust: none;
}*/

#app {
  margin: 0;
  font-family: 'Karla', sans-serif;
  font-size: 1.3em;
  overflow-x: hidden;
}
</style>
