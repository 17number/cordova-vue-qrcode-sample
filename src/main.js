import Vue from 'vue'
import App from './App.vue'
import VueQrcode from '@chenfengyuan/vue-qrcode';
Vue.component(VueQrcode.name, VueQrcode);
import VueQrcodeReader from "vue-qrcode-reader";
Vue.use(VueQrcodeReader);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
