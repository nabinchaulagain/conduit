import { LitElement, html, css } from 'lit-element';

/**
 * <article-list articles={Array}></article-list>.
 *
 * @customElement
 * @litElement
 */
class ArticleList extends LitElement {
  /**
   * Properties of element.
   */
  static get properties() {
    return {
      /**
       * Array of article objects.
       * Passed from parent.
       *
       * @type {{Array}}
       */
      articles: { type: Array },
    };
  }

  /**
   * Constructor.
   */
  constructor() {
    super();
    this.articles = [];
  }

  /**
   * Render template of element.
   *
   * @returns {String} HTML template string.
   */
  render() {
    return html`${JSON.stringify(this.articles)}`;
  }
}

window.customElements.define('article-list', ArticleList);
