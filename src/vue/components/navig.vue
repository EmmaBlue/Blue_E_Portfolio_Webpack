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
                            <li class="nav_item"><a href="#frontSect" class="nav_link"><img class="logo" src="images/logo.svg" alt="Blue Fyre Logo" width="50" height="30">Home</a></li>
                            <li class="nav_item"><a href="#serviceSect" class="nav_link">Services</a></li>
                            <li class="nav_item"><a href="#portfolioSect" class="nav_link">Our Work</a></li>
                            <li class="nav_item"><a href="#aboutSect" class="nav_link">About</a></li>
                            <li class="nav_item"><a href="#ContactSect" class="nav_link">Contact</a></li>
                            <li class="nav_item">
                                <ul id="socNav">
                                    <li><a href="http://www.twitter.com" target="_blank" id="twitter"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="http://www.instagram.com" target="_blank" id="instagram"><i class="fab fa-instagram"></i></a></li>
                                    <li><a href="http://www.facebook.com" target="_blank" id="facebook"><i class="fab fa-facebook-square"></i></a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
            </div>
</template>

<script>
  export default {
    }
</script>

<style>
  /* Your CSS goes here */
</style>

}