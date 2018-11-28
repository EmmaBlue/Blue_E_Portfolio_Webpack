<template>
  <body>
    <main>
      <front></front>
      <work></work>
      <about></about>
      <community></community>
      <contact></contact>

    </main>
  </body>
</template>

<script>
  import navig from "./components/navig.vue";
  import front from "./components/front.vue";
  import work from "./components/work.vue";
  import about from "./components/about.vue";
  import community from "./components/community.vue";
  import contact from "./components/contact.vue";
  import mainfooter from "./components/mainfooter.vue";

  export default {

      components: {
          "navig": navig,
          "front": front,
          "work": work,
          "about": about,
          "community": community,
          "contact": contact,
          "mainfooter": mainfooter
      }
  
  }
</script>

