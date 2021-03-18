import { Router } from '@vaadin/router';

/**
 * Redirect to another page.
 *
 * @param {String} path - Where to redirect.
 */
const redirectTo = (path) => {
  Router.go(path);
};

export default redirectTo;
