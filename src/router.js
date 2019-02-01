import Vue from 'vue';
import Router from 'vue-router';

import login from './views/login.vue'
import main from './views/main'
import notfound from './views/notfound'

Vue.use(Router)

// {
//   path: '/about',
//   name: 'about',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
// }


export default new Router({
  routes: [
    {path:'/',redirect:'/login'},
    { path:'/login',component:login},
    { path:'/main',component:main},
    {path:'*',component:notfound}
  ]
})
