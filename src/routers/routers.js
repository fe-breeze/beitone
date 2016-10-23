export default (router) => router.map({
  '/': {
    name: 'index',
    component: require('../views/page'),
  },
  '/login': {
    name: 'login',
    component: require('../views/login'),
  },
  '/register': {
    name: 'register',
    component: require('../views/register'),
  },
  '*': {
    component: require('../views/page'),
  },
});

