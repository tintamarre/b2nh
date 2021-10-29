import Vue from 'vue'
import App from './App.vue'
import './assets/css/style.css';
import './assets/tailwind.css'

Vue.config.productionTip = false

// Register every components in ./components DIR
const files = require.context('./components/', true, /\.vue$/i)
console.log(files);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

new Vue({
  render: h => h(App),
}).$mount('#app')

