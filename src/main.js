import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import {BootstrapVue} from 'bootstrap-vue';
import vueDebounce from 'vue-debounce';
// Import Bootstrap an BootstrapVue CSS files (order is important)

window.$ = window.jQuery = require('jquery');
Vue.use(vueDebounce, {
  listenTo: ['input', 'keyup'],
  defaultTime: '400ms',
});
Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
