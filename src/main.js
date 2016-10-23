import 'normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import configRouter from './routers/routers';
Vue.use(VueRouter);
const router = new VueRouter();
configRouter(router);
/* eslint-disable no-new */
router.start(Vue.extend(App), '#app');
