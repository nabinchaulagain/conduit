import { LitElement, html, css } from 'lit-element';
import initRouter from './router';

/**
 * <conduit-demo> Main app component.
 *
 * @customElement
 * @litElement
 */
class ConduitDemo extends LitElement {
  /**
   * Styles of element.
   *
   * @returns {String} CSS.
   */
  static get styles() {
    return css`
      main {
        max-width: 998px;
        margin: auto;
      }
    `;
  }

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
