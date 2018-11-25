<template>
  <body>
     <header id="main-header">
        <section id="logo-sect">
          <h2 id="logo">Emma Jae <span id="big-blue">Blue</span></h2>
        </section>
        <navig></navig>
      </header>
      <main>
        <contactp></contactp>
      </main>
     <mainfooter></mainfooter>
  </body>
</template>

<script>
import navig from "./components/navig.vue";
import contactp from "./components/contactp.vue";
import mainfooter from "./components/mainfooter.vue";

  export default {
     components: {
          "navig": navig,
          "contactp": contactp, 
          "mainfooter": mainfooter
      }
  
  }
</script>

