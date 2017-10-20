<template>
<footer>
  <b-container>
    <b-row>
      <b-col md="4">
        <span>Feito com</span>
        <svg class="by-heart" version="1.1" width="50px" height="34px" viewBox="0 0 90.65 85.04">
          <path class="by-heart-path" fill="none" stroke="#ea6b46" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
          M45.137,23.041c4.912-24.596,40.457-27.775,42.128-0.435c1.398,22.88-21.333,40.717-42.128,50.522 M45.137,23.041
          C40.225-1.555,5.057-4.734,3.387,22.606c-1.398,22.88,20.955,40.717,41.75,50.522"/>
        </svg>
        <span>por Emi e Teruo</span>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="4">
        <span class="copyright">Direitos reservados &copy; emieteruo 2017</span>
      </b-col>
    </b-row>
  </b-container>
</footer>
</template>

<script>
export default {
}
</script>

<style>
footer {
  background-image: -moz-linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../../assets/img/footer.jpg");
  background-image: -webkit-linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../../assets/img/footer.jpg");
  background-image: -ms-linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../../assets/img/footer.jpg");
  background-image: linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../../assets/img/footer.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
