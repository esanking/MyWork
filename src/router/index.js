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
    ],
  },
  {
    path: '*',
    redirect: '/',
  },
  ],
});

// const routes = [
//   {
//     path: "/",
//     name: "HomeNavbar",
//     component: HomeNavbar,
//     children: [{
//       path: "",
//       name: "Home",
//       component: () => import('@/views/Home.vue')
//     },
//     {
//       path: "/Stock",
//       name: "Stock",
//       component: () => import('@/views/Stock.vue')
//     },
//     {
//       path: "/TodoList",
//       name: "TodoList",
//       component: () => import('@/views/TodoList.vue')
//     }
//     ]
//   },
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// export default router;
