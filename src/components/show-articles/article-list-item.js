import { LitElement, html, css } from 'lit-element';
import '@polymer/iron-image';

/**
 * <article-list-item .article="${article}"></article-list-item>.
 *
 * @customElement
 * @litElement
 */
class ArticleListItem extends LitElement {
  /**
   * Styles of element.
   *
   * @returns {String} CSS styles.
   */
  static get styles() {
    return css`
      .article-wrapper {
        border-bottom: 1px solid #e5e5e5;
        margin-bottom: 8px;
        padding: 8px 0;
      }

      iron-image {
        --iron-image-width: 24px;
        --iron-image-height: 24px;
      }

      .article-author-text {
        font-size: 16px;
        display: inline-block;
        vertical-align: top;
      }
    `;
  }

  /**
   * Properties of element.
   */
  static get properties() {
    return { article: { type: Object } };
  }

  /**
   * Constructor.
   */
  constructor() {
    super();
    this.article = {};
  }

  /**
   * Render HTML.
   *
   * @returns {String} HTML template.
   */
  render() {
    const { title, slug, author } = this.article;

    return html` <div class="article-wrapper">
      <div class="article-author">
        <iron-image src="${author.image}" alt="${author.username}" preload>
        </iron-image>
        <div class="article-author-text">${author.username}</div>
      </div>
      <h3>${title}</h3>
      <a title="${title}" href="/${slug}">Read more</a>
    </div>`;
  }
}

window.customElements.define('article-list-item', ArticleListItem);
