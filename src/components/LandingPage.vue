<template>
  <div id="landing-page">
    <welcome-header></welcome-header>
    <intro-wedding></intro-wedding>
    <our-history></our-history>
  </div>
</template>

<script>
  import WelcomeHeader from './WelcomeHeader.vue'
  import IntroWedding from './IntroWedding.vue'
  import OurHistory from './OurHistory.vue'

  export default {
    components: {
      WelcomeHeader,
      IntroWedding,
      OurHistory
    }
  }
</script>

<style scoped>
</style>
