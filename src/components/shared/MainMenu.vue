<template>
  <b-navbar key="navTop" :class="{ scrolledStyle: scrolled }" fixed="top" id="mainNav" toggleable="md" :type="barType">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <b-navbar-brand href="#banner" v-scroll-to="'#banner'">EMIETERUO</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-nav is-nav-bar class="ml-auto">
        <b-nav-item right href="#" :class="navItemStyle">Agradecimentos</b-nav-item>
        <b-nav-item right href="#" :class="navItemStyle">Fotos</b-nav-item>
        <b-nav-item right href="#" :class="navItemStyle">Pós casamento</b-nav-item>
      </b-nav>

    </b-collapse>
  </b-navbar>
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
  computed: {
    navItemStyle: function () {
      return {
        scrolledStyleItem: this.scrolled
      }
    }
  },
  watch: {
    scrolled () {
      if (this.scrolled) {
        this.barType = 'light'
      } else {
        this.barType = 'dark'
      }
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

#mainNav {
  transition: all 0.3s 0.07s;
}
</style>
