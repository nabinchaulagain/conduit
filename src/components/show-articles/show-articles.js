import { LitElement, html } from 'lit-element';

// TODO: complete this page
/**
 * <show-articles> Route component that shows list of articles.
 *
 * @customElement
 * @litElement
 */
class ShowArticles extends LitElement {
  /**
   * Render html of the element.
   *
   * @returns {String} HTML template of the element.
   */
  render() {
    return html`<h1>Show articles page</h1>`;
  }
}

window.customElements.define('show-articles', ShowArticles);
