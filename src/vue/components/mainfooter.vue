var mainfooter = {
<template>
    <footer>
         <ul class="socNav">
            <li v-for="item in socItems">
                <a :href="item.link" target="_blank" :id="item.id">
                    <i :class="item.class"></i>
               </a>
            </li>
        </ul>
        <p>Emma Jae Blue</p>
        <p>2018 All Rights Reserved</p>
    </footer>
</template>

<script>
  export default {
      data() {

          return {

               socItems: [

                {link:'http://www.twitter.com', id: 'twitter', class: 'fab fa-twitter'},
                {link:'http://www.facebook.com', id: 'facebook', class: 'fab fa-facebook-square'},
                {link:'http://www.instagram.com', id: 'instagram', class: 'fab fa-instagram'},
                {link:'https://github.com/EmmaBlue?tab=repositories', id: 'github', class: 'fab fa-github'}

              ]
          }
      }
    }
</script>

<style>
  /* Your CSS goes here */
</style>

}