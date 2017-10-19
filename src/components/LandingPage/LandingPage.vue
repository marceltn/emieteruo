<template>
  <div id="landing-page">
    <welcome-banner></welcome-banner>
    <our-history></our-history>
    <grooms-men-brides-maids></grooms-men-brides-maids>
  </div>
</template>

<script>
  import WelcomeBanner from './WelcomeBanner.vue'
  import IntroWedding from './IntroWedding.vue'
  import OurHistory from './OurHistory.vue'
  import GroomsMenBridesMaids from './GroomsMenBridesMaids.vue'

  export default {
    components: {
      WelcomeBanner,
      IntroWedding,
      OurHistory,
      GroomsMenBridesMaids
    }
  }
</script>

<style>
/* Landing */

	body #landing-page {
		background-image: -moz-linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../../assets/img/banner.jpg");
		background-image: -webkit-linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../../assets/img/banner.jpg");
		background-image: -ms-linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../../assets/img/banner.jpg");
		background-image: linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../../assets/img/banner.jpg");
		background-attachment: fixed;
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		padding-top: 0;
	}

	body #footer {
		background-color: rgba(29, 36, 42, 0.9);
	}

	body #banner,
	body .wrapper.style4 {
		background-image: -moz-linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../../assets/img/banner.jpg");
		background-image: -webkit-linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../../assets/img/banner.jpg");
		background-image: -ms-linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../../assets/img/banner.jpg");
		background-image: linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../../assets/img/banner.jpg");
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
