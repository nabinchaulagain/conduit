import { LitElement, html } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import './article-list-item';

/**
 * <article-list .articles={Array}></article-list>.
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
    return repeat(
      this.articles,
      (article) => article.slug,
      (article) => {
        return html`<article-list-item
          .article="${article}"
        ></article-list-item>`;
      }
    );
  }
}

window.customElements.define('article-list', ArticleList);
