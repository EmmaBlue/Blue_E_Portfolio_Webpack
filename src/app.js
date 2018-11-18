import './sass/style.scss'
import Vue from 'vue'
import App from './vue/App.vue'
 if (module.hot) {
       module.hot.accept()
     }

var app = new Vue({
    el: '#app',
    render: h => h(App),

 })

