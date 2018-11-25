import './sass/style.scss'
import Vue from 'vue'
import ProjectApp from './vue/ProjectApp.vue'

 if (module.hot) {
       module.hot.accept()
     }


var app = new Vue({
    el: '#comm-app',
    render: h => h(ProjectApp),

 })

 /*import emma from './images/emma-mobile.png'
 import about from './images/about-mobile.jpg'
 var emmaImg = document.querySelector('#emma-front')
 var aboutImg = document.querySelector('#about-pic')
 emmaImg.src = emma;
 aboutImg.src = about;*/




