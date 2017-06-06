import Vue from 'vue';
import Router from 'vue-router';
import index from '../components/index.vue';
import carCtl from '../components/pages/carCtl.vue';

Vue.use(Router);
export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/carCtl/:id',
    name: 'carCtl',
    component: carCtl
  }
  ],
});
