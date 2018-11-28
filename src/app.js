import './sass/style.scss'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueLazyload from 'vue-lazyload'
import App from './vue/App.vue'
import HomeApp from './vue/HomeApp.vue'
import ProjectApp from './vue/ProjectApp.vue'
import CommApp from './vue/CommApp.vue'
import ContactApp from './vue/ContactApp.vue'


Vue.use(VueLazyload);
Vue.use(VueRouter);


const routes = [
  {path: '/', component: HomeApp},
  {path: '/projects', component: ProjectApp},
  {path: '/community', component: CommApp},
  {path: '/contact', component: ContactApp},
  //{path: '/community', component: Community}
  //each route is an object in an array with a defined path and component to be loaded
  //{path: '/users', component: Users},
  //{path: '/users/:userid', component: Users} //:userid is dynamic data from link
  //{{ $this.route.params.userid }} will output :userid from url
  //watch:{ '$route' (to, from){method with changing data} } in export default
]

const router = new VueRouter({
   //pass routes into vue router
   routes,
   //mode: history //removes hashtag from url
 })

const app = new Vue({
   el: '#app',
   router,
   render: h => h(App),
})

 if (module.hot) {
       module.hot.accept()
     }



/*import emma from './images/emma-mobile.png'
import about from './images/about-mobile.jpg'
const emmaImg = document.querySelector('#emma-front');
const aboutImg = document.querySelector('#about-pic');
emmaImg.src = emma;
aboutImg.src = about;*/


 //<router-view></router-view> marks where components routed should display
//<router-link></router-link> sets url for reloading components
//<router-link to="/">Home</router-link>
//<router-link :to="variable">dynamic url</router-link>


