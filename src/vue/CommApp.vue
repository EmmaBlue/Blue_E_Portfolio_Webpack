<template>
  <body>
      <main>
        <h2>Community Work</h2>
        <communityp></communityp>
      </main>
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

