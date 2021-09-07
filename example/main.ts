// @ts-ignore
import App from './App.vue';
import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';

Vue.use(VueCompositionAPI);

export default new Vue({
  el: '#app',
  render: h => h(App),
});
