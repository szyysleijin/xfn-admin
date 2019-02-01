import Vue from 'vue';
import Router from 'vue-router';

import login from './views/login.vue'
import main from './views/main'
import notfound from './views/notfound'

import settings from './components/settings'
import tablelist from './components/tablelist'
import tableadd from './components/tableadd'
import tabledelete from './components/tabledelete'
import categorylist from './components/categorylist'
import categoryadd from './components/categoryadd'
import categorydelete from './components/categorydelete'
import categoryupdate from './components/categoryupdate'
import dishadd from './components/dishadd'
import dishlist from './components/dishlist'
import dishupdate from './components/dishupdate'
import dishdelete from './components/dishdelete'
import orderlist from './components/orderlist'
import security from './components/security'



Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/login'},
    { path:'/login',component:login},
    { 
      path:'/main',
      component:main,
      children:[
        {path:'',redirect:'/table/list'},
        {path:'/settings',component:settings},
        {path:'/table/list',component:tablelist},
        {path:'/table/add',component:tableadd},
        {path:'/table/delete',component:tabledelete},
        {path:'/category/list',component:categorylist},
        {path:'/category/add',component:categoryadd},
        {path:'/category/delete',component:categorydelete},
        {path:'/category/update',component:categoryupdate},
        {path:'/dish/add',component:dishadd},
        {path:'/dish/list',component:dishlist},
        {path:'/dish/update',component:dishupdate},
        {path:'/dish/delete',component:dishdelete},
        {path:'/order/list',component:orderlist},
        {path:'/security',component:security}
      ]
    },
    {path:'*',component:notfound}
  ]
})
// {
//   path: '/about',
//   name: 'about',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
// }