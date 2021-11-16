import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueCompositionAPI from '@vue/composition-api'

import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

import './assets/css/style.css';
import './assets/tailwind.css'

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

Vue.use(VueCompositionAPI)

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
})

// eslint-disable-next-line  
delete L.Icon.Default.prototype._getIconUrl  
// eslint-disable-next-line  
L.Icon.Default.mergeOptions({  
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),  
  iconUrl: require('leaflet/dist/images/marker-icon.png'),  
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')  
})

Vue.config.productionTip = false

// Register every components in ./components DIR
const files = require.context('./components/', true, /\.vue$/i)
console.log(files);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

