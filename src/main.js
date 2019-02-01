import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import qrcode from 'qrcode'

Vue.prototype.axios=axios
Vue.use(element)
Vue.config.productionTip = false

Vue.filter('data',(val)=>{
  // 日期过滤器
  var data = new Date(val)
  var yy = data.getFullYear();
  var mm = data.getMonth()+1;
  mm = mm>9 ? mm : '0'+mm
  var dd = data.getDate();
  dd = dd>9 ? dd : '0'+dd
  return `${yy}-${mm}-${dd}`
})

Vue.filter('datatime',(val)=>{
  // 日期过滤器, 时分秒
  var data = new Date(val)
  var yy = data.getFullYear();
  var mm = data.getMonth()+1;
  mm = mm>9 ? mm : `0${mm}`
  var dd = data.getDate();
  dd = dd>9 ? dd : `0${dd}`

  var hh = data.getHours();
  hh = hh>9 ? hh : '0'+hh
  var mi = data.getMinutes()
  mi = mi>9 ? mi : '0'+mi
  var ss = data.getSeconds()
  ss = ss>9 ? ss : '0'+ss
  return `${yy}-${mm}-${dd} ${hh}:${mi}:${ss}`
})

Vue.filter('currency',(val)=>{
  // 价格过滤器¥2.00
  return '¥'+val.toFixed(2)
})

Vue.filter('tablestatus',(val)=>{
  if(val==1)
    return '空闲'
  else if (val==2) 
    return '预定'
  else if (val==3)
    return '占用'
  else 
    return '其他'
})
new Vue({
  router,
  store,
  render: h => h(App) // 挂载根组件
}).$mount('#app')
