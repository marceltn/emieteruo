<template>
  <div id="landing-page">
    <welcome-header></welcome-header>
    <intro-wedding></intro-wedding>
  </div>
</template>

<script>
  import WelcomeHeader from './WelcomeHeader.vue'
  import IntroWedding from './IntroWedding.vue'

  export default {
    components: {
      WelcomeHeader,
      IntroWedding
    }
  }
</script>

<style scoped>
</style>
