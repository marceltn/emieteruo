<template>
<section id="groomsMenBridesMaids">
  <b-container>
    <b-row>
      <b-col class="text-center">
        <h2 class="section-heading">Padrinhos e Madrinhas</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="brides-team">
        <h2 class="section-heading">Time da noiva</h2>
        <progressive-img static src="../static/img/bridesTeam.jpg" placeholder="../static/img/bridesTeam_lazy.jpg" alt="brides team"></progressive-img>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="grooms-team">
        <h2 class="section-heading">Time do noivo</h2>
        <progressive-img static src="../static/img/groomsTeam.jpg" placeholder="../static/img/groomsTeam_lazy.jpg" alt="grooms team"></progressive-img>
      </b-col>
    </b-row>
  </b-container>
</section>
</template>

<script>
export default {
}
</script>

<style scoped>
  b-img {
    width: 15px;
  }
</style>
