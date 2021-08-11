import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [{
    path: '/',
    component: () => import('@/views/HomeNavbar.vue'),
    children: [{
      path: '',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/Stock',
      name: 'Stock',
      component: () => import('@/views/Stock.vue'),
    },
    {
      path: '/TodoList',
      name: 'TodoList',
      component: () => import('@/views/TodoList.vue'),
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('@/views/Login.vue'),
    },
    {
      path: '/ClockIn/:UserName',
      name: 'ClockIn',
      component: () => import('@/views/ClockIn.vue'),
    },
    ],
  },
  {
    path: '*',
    redirect: '/Login',
  },
  ],
});
