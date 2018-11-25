<template>
  <body>
     <header id="main-header">
        <section id="logo-sect">
          <h2 id="logo">Emma Jae <span id="big-blue">Blue</span></h2>
        </section>
        <navig></navig>
      </header>
      <main>
        <h2>Community Work</h2>
        <communityp></communityp>
      </main>
     <mainfooter></mainfooter>
  </body>
</template>

<script>
import navig from "./components/navig.vue";
import communityp from "./components/communityp.vue";
import mainfooter from "./components/mainfooter.vue";

  export default {
     components: {
          "navig": navig,
          "communityp": communityp,
          "mainfooter": mainfooter
      }
  
  }
</script>

