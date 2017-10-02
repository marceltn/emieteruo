<template>
  <div id="landing-page">
    <welcome-header></welcome-header>
    <intro-wedding></intro-wedding>
    <our-history></our-history>
    <grooms-men-brides-maids></grooms-men-brides-maids>
  </div>
</template>

<script>
  import WelcomeHeader from './WelcomeHeader.vue'
  import IntroWedding from './IntroWedding.vue'
  import OurHistory from './OurHistory.vue'
  import GroomsMenBridesMaids from './GroomsMenBridesMaids.vue'

  export default {
    components: {
      WelcomeHeader,
      IntroWedding,
      OurHistory,
      GroomsMenBridesMaids
    }
  }
</script>

<style scoped>
</style>
