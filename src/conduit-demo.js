import { LitElement, html } from 'lit-element';
import initRouter from './router';

/**
 * <conduit-demo> Main app component.
 *
 * @customElement
 * @litElement
 */
class ConduitDemo extends LitElement {
  /**
   * Called when first rendered.
   */
  firstUpdated() {
    initRouter(this.shadowRoot.querySelector('main'));
  }

  /**
   * Render the element.
   *
   * @returns {String} The html template of element.
   */
  render() {
    return html`<main></main>`;
  }
}

window.customElements.define('conduit-demo', ConduitDemo);
