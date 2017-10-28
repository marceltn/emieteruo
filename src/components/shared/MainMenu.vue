<template>
<b-navbar fixed="top" id="mainNav" toggleable="sm" type="dark" variant="primary">
  <b-nav-toggle target="nav_collapse"></b-nav-toggle>
  <b-navbar-brand v-scroll-to="'header'" href="#header" class="navbar-brand">EMIETERUO</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">
    <!-- Right aligned nav items -->
    <b-nav is-nav-bar class="ml-auto">
      <b-nav-item right v-scroll-to="'#thanks'" href="#thanks">Agradecimentos</b-nav-item>
      <b-nav-item right v-scroll-to="'#photos'" href="#photos">Fotos</b-nav-item>
      <b-nav-item right v-scroll-to="'#wedding'" href="#wedding">Pós casamento</b-nav-item>
    </b-nav>

  </b-collapse>
</b-navbar>
</template>

<script>
export default {
}
</script>

<style scoped>
.bg-primary {
  background-color: transparent !important;
}
</style>
