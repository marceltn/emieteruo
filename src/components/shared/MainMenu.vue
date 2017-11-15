<template>
<transition
  v-on:enter="fadeEnter"
name="fade" mode="in-out">
  <b-navbar v-if="scrolled" key="navTop" :class="{ scrolledStyle: scrolled }" fixed="top" id="mainNav" toggleable="md" :type="barType">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <b-navbar-brand href="#banner" v-scroll-to="'#banner'" class="scrolledStyleItem">EMIETERUO</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-nav is-nav-bar class="ml-auto">
        <b-nav-item right href="#" class="scrolledStyleItem">Agradecimentos</b-nav-item>
        <b-nav-item right href="#" class="scrolledStyleItem">Fotos</b-nav-item>
        <b-nav-item right href="#" class="scrolledStyleItem">Pós casamento</b-nav-item>
      </b-nav>

    </b-collapse>
  </b-navbar>
  <b-navbar v-else key="navScrolled" :class="{ scrolledStyle: scrolled }" fixed="top" id="mainNav" toggleable="md" :type="barType">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <b-navbar-brand href="#header">EMIETERUO</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-nav is-nav-bar class="ml-auto">
        <b-nav-item right href="#">Agradecimentos</b-nav-item>
        <b-nav-item right href="#">Fotos</b-nav-item>
        <b-nav-item right href="#">Pós casamento</b-nav-item>
      </b-nav>

    </b-collapse>
  </b-navbar>
</transition>
</template>

<script>
import { navScrollSpy } from '../mixins/NavScrollSpy'
import { utils } from '../mixins/Utils'

export default {
  mixins: [navScrollSpy, utils],
  data () {
    return {
      barType: 'dark'
    }
  },
  methods: {
    fadeEnter: function (el, done) {
      this.barType = this.scrolled ? 'light' : 'dark'
      done()
    }
  }
}
</script>

<style scoped>
.navbar-brand {
  font-family: 'Amatic SC', cursive;
}

.scrolledStyle {
  background-color: white;
  border-bottom: 1px solid #8f8f8f;
}

.scrolledStyleItem a {
  color: #155724 !important;
}

.scrolledStyleItem a:hover {
  font-weight: bold;
}

.fade-enter-active {
  transition: opacity .5s ease;
}

.fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
