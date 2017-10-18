<template>
<b-navbar top id="mainNav" toggleable="sm" sticky="true" type="dark" variant="primary">
  <b-nav-toggle target="nav_collapse"></b-nav-toggle>
  <b-navbar-brand v-scroll-to="'header'" href="#header" class="navbar-brand">EMIETERUO</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">
    <!-- Right aligned nav items -->
    <b-nav is-nav-bar class="ml-auto">
      <b-nav-item right v-scroll-to="'#our-history'" href="#our-history">Sobre nós</b-nav-item>
      <b-nav-item right v-scroll-to="'#groomsMenBridesMaids'" href="#groomsMenBridesMaids">Padrinhos e Madrinhas</b-nav-item>
      <b-nav-item right v-scroll-to="'#thanks'" href="#thanks">Agradecimentos</b-nav-item>
      <b-nav-item right v-scroll-to="'#photos'" href="#photos">Fotos do casamento</b-nav-item>
      <b-nav-item right v-scroll-to="'#wedding'" href="#wedding">Detalhes do casamento</b-nav-item>
    </b-nav>

  </b-collapse>
</b-navbar>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
