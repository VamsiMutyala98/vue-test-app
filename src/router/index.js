import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingLayout from '@/components/LandingLayout/LandingLayout.vue'
import LoginPage from '@/components/Login/LoginPage.vue'
import DashboardPage from '@/components/Dashboard/DashboardPage.vue'
import LayoutWrapper from '@/components/Layout/LayoutWrapper.vue'
import ProductsPage from '@/components/Products/ProductsPage.vue'
import CategoriesPage from '@/components/Categories/CategoriesPage.vue'
import UsersPage from '@/components/Users/UsersPage.vue'
import CartPage from '@/components/Cart/CartPage.vue'
import ProductsWrapper from '@/components/Products/ProductsWrapper.vue'
import ProductDetailsPage from '@/components/Products/ProductDetailsPage.vue'

Vue.use(VueRouter);

function checkIfUserIsAuthenticated() {
  if(localStorage.getItem('accessToken')) {
    return true;
  }
  return false;
}

const routes = [
  {
    path: '/',
    name: 'landingLayout',
    component: LandingLayout,
    redirect: '/login',
    children: [
      {
        path: 'login',
        name: 'loginPage',
        component: LoginPage,
      }
    ]
  },
  {
    path: '/layout',
    name: 'layoutWrapper',
    component: LayoutWrapper,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: DashboardPage,
        // meta: { requiresAuth: true },
      },
      {
        path: 'products',
        component: ProductsWrapper,
        meta: { requiresAuth: true },
        children: [
          {
            path: '',
            name: 'productsPage',
            component: ProductsPage,
            meta: { requiresAuth: true },
          },
          {
            path: 'product-detail-view/:productId',
            name: 'productDetailsPage',
            component: ProductDetailsPage,
            meta: { requiresAuth: true },
          }

        ]
      },
      {
        path: 'categories',
        name: 'categoriesPage',
        component: CategoriesPage,
        meta: { requiresAuth: true },
      },
      {
        path: 'users',
        name: 'usersPage',
        component: UsersPage,
        meta: { requiresAuth: true },
      },
      {
        path: 'cart',
        name: 'cartPage',
        component: CartPage,
        meta: { requiresAuth: true },
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = checkIfUserIsAuthenticated();

  if (to.matched.some((route) => route.meta.requiresAuth)) {
    if (!isAuthenticated) {
      // next('/login');
      next({ name: 'loginPage' });
      // window.location.href = '/login';
      console.log("x");
    } else {
      next();
    }
  } else if (to.path === '/login' && isAuthenticated) {
    next('/layout/dashboard');
  } else {
    next();
  }
});



export default router
