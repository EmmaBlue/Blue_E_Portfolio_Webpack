<template>
  <body>
      <main>
        <projects></projects>
      </main>
  </body>
</template>

<script>
import navig from "./components/navig.vue";
import projects from "./components/projects.vue";
import mainfooter from "./components/mainfooter.vue";

  export default {
     components: {
          "navig": navig,
          "projects": projects,
          "mainfooter": mainfooter
      }
  
  }
</script>

