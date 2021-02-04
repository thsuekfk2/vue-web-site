import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Course from '../views/Course.vue'
import Play from '../views/Play.vue'


//youtube
import VueYoutube from 'vue-youtube'
 
Vue.use(VueYoutube)
import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)
Vue.use(VueYouTubeEmbed, { global: false })
Vue.use(VueYouTubeEmbed, { global: true, componentId: "youtube-media" })

//youtube


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Course',
    component: Course
  },
  {
    path: '/',
    name: 'Play',
    component: Play
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
