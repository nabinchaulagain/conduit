import { LitElement, html } from 'lit-element';

// TODO: complete this page
/**
 * <show-article> Route component that shows a single article.
 *
 * @customElement
 * @litElement
 */
class ShowArticle extends LitElement {
  /**
   * Render html of the element.
   *
   * @returns {String} HTML template of the element.
   */
  render() {
    return html`<h1>Show article page</h1>`;
  }
}

window.customElements.define('show-article', ShowArticle);
