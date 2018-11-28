var navig = {
<template>
    <div class="navArea">
                <!-- Start Mobile Nav -->
                <input type="checkbox" class="nav_box" id="nav-toggle">
                <label for="nav-toggle" class="nav_but">
                        <span class="nav_icon">&nbsp;</span>
                </label>
                <!-- End Mobile Nav -->
                <div class="nav_background"></div>
                    <nav class="nav_full">
                        <h3 class="hidden">Main Navigation</h3>
                        <ul class="nav_list">
                             <li class="nav_item">
                                <router-link to="/" class="nav_link">Home</router-link>
                                <router-link to="/projects" class="nav_link">Projects</router-link>
                                <router-link to="/about" class="nav_link">About</router-link>
                                <router-link to="/community" class="nav_link">Community Work</router-link>
                                <router-link to="/contact" class="nav_link">Contact</router-link>
                            </li>
                            <li class="nav_item">
                                <ul class="socNav">
                                    <li v-for="item in socItems">
                                        <a :href="item.link" target="_blank" :id="item.id">
                                            <i :class="item.class"></i>
                                        </a>
                                    </li>

                                </ul>
                            </li>

                        </ul>
                    </nav>
            </div>
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