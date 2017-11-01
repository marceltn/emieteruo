<template>
  <!-- <progressive-background id="landing-page" src="../../../static/img/banner_1.jpg" placeholder="../../../static/img/banner_1_lazy.jpg"> -->
  <div id="landing-page">
    <welcome-banner></welcome-banner>
    <!-- <our-history></our-history>
    <grooms-men-brides-maids></grooms-men-brides-maids> -->
  <!-- </progressive-background> -->
  </div>
</template>

<script>
  import WelcomeBanner from './WelcomeBanner.vue'
  import OurHistory from './OurHistory.vue'
  import GroomsMenBridesMaids from './GroomsMenBridesMaids.vue'

  export default {
    components: {
      WelcomeBanner,
      OurHistory,
      GroomsMenBridesMaids
    }
  }
</script>

<style>
/* Landing */

	body #landing-page {
    background-image: url("../../assets/img/banner_1.jpg");
		background-attachment: fixed;
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		padding-top: 0;
	}

	body #footer {
		background-color: rgba(29, 36, 42, 0.9);
	}
</style>
