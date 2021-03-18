import { Router } from '@vaadin/router';
/**
 *
 * @param {HTMLElement} node - Container node.
 */
const initRouter = (node) => {
  const router = new Router(node);

  router.setRoutes(routes);
};

const routes = [
  {
    path: '/',
    component: 'show-articles',
    action: () => {
      import('./components/show-articles');
    },
  },
  {
    path: '/:slug',
    component: 'show-article',
    action: () => {
      import('./components/show-article');
    },
  },
];

export default initRouter;
