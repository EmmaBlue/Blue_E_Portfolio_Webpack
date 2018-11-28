<template>
  <body>
      <main>
        <contactp></contactp>
      </main>
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

