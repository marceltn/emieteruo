<template>
<section id="banner">
  <b-row class="inner">
    <b-col cols="2"></b-col>
    <b-col class="text-center">
      <transition name="slide" type="animation">
        <h2 v-if="!isLoading">{{ title }}</h2>
      </transition>
      <transition name="slide" type="animation">
        <p v-if="!isLoading">{{ welcomeTextUnderContruction }}</p>
      </transition>
    </b-col>
    <b-col cols="2"></b-col>
  </b-row>
  <a href="#our-history"  v-scroll-to="'#our-history'" class="more">Quero saber mais!</a>
</section>
</template>

<script>
import { utils } from '../mixins/Utils'

export default {
  mixins: [utils],
  data: function () {
    return {
      title: 'Nós nos casamos!',
      welcomeText: 'Bem vindo ao nosso site! Aqui você encontra tudo sobre o nosso grande dia, 06 de agosto de 2017, em Maringá.',
      welcomeTextUnderContruction: 'Bem vindo ao nosso site! Nos próximos dias você encontrará aqui tudo sobre o nosso grande dia, 06 de agosto de 2017, em Maringá. Já já mais atualizações'
    }
  }
}
</script>

<style scoped>
.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity .5s;
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}

#banner {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -moz-justify-content: center;
  -webkit-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  cursor: default;
  height: 100vh;
  min-height: 35em;
  overflow: hidden;
  position: relative;
  text-align: center;
  color: white;
}

#banner h2 {
  display: inline-block;
  font-size: 1.75em;
  opacity: 1;
  padding: 0.35em 1em;
  position: relative;
  z-index: 1;
}

#banner h2:before,
#banner h2:after {
  -moz-transition: width 0.85s ease;
  -webkit-transition: width 0.85s ease;
  -ms-transition: width 0.85s ease;
  transition: width 0.85s ease;
  -moz-transition-delay: 0.25s;
  -webkit-transition-delay: 0.25s;
  -ms-transition-delay: 0.25s;
  transition-delay: 0.25s;
  background: #fff;
  content: '';
  display: block;
  height: 2px;
  position: absolute;
  width: 100%;
}

#banner h2:before {
  top: 0;
  left: 0;
}

#banner h2:after {
  bottom: 0;
  right: 0;
}

#banner p {
  letter-spacing: 0.225em;
  text-transform: uppercase;
}

#banner p a {
  color: inherit;
}

#banner .more {
  -moz-transition: -moz-transform 0.75s ease, opacity 0.75s ease;
  -webkit-transition: -webkit-transform 0.75s ease, opacity 0.75s ease;
  -ms-transition: -ms-transform 0.75s ease, opacity 0.75s ease;
  transition: transform 0.75s ease, opacity 0.75s ease;
  -moz-transition-delay: 3.5s;
  -webkit-transition-delay: 3.5s;
  -ms-transition-delay: 3.5s;
  transition-delay: 3.5s;
  -moz-transform: translateY(0);
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
  border: none;
  bottom: 35px;
  color: inherit;
  font-size: 0.8em;
  height: 8.5em;
  left: 50%;
  letter-spacing: 0.225em;
  margin-left: -8.5em;
  opacity: 1;
  outline: 0;
  padding-left: 0.225em;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  width: 16em;
  z-index: 1;
}

#banner .more:after {
  background-image: url("../../assets/img/arrow.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  bottom: 4em;
  content: '';
  display: block;
  height: 1.5em;
  left: 50%;
  margin: 0 0 0 -0.75em;
  position: absolute;
  width: 1.5em;
}

#banner:after {
  -moz-pointer-events: none;
  -webkit-pointer-events: none;
  -ms-pointer-events: none;
  pointer-events: none;
  -moz-transition: opacity 3s ease-in-out;
  -webkit-transition: opacity 3s ease-in-out;
  -ms-transition: opacity 3s ease-in-out;
  transition: opacity 3s ease-in-out;
  -moz-transition-delay: 1.25s;
  -webkit-transition-delay: 1.25s;
  -ms-transition-delay: 1.25s;
  transition-delay: 1.25s;
  content: '';
  background: #2e3842;
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}

@media screen and (max-width: 736px) {

  #banner {
    padding: 7em 3em 5em 3em;
    height: auto;
    min-height: 0;
  }

  #banner h2 {
    font-size: 1.25em;
  }

  #banner br {
    display: none;
  }

  #banner .more {
    display: none;
  }
}

body.is-loading #banner h2 {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
  opacity: 0;
}

body.is-loading #banner h2:before,
body.is-loading #banner h2:after {
  width: 0;
}

body.is-loading #banner .more {
  -moz-transform: translateY(8.5em);
  -webkit-transform: translateY(8.5em);
  -ms-transform: translateY(8.5em);
  transform: translateY(8.5em);
  opacity: 0;
}

body.is-loading #banner:after {
  opacity: 1;
}
</style>
