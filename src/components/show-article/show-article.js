import { LitElement, html, css } from 'lit-element';
import endPoints from '../../constants/endpoints';
import api from '../../utils/api';
import '@polymer/iron-image';

/**
 * <show-article> Route component that shows a single article.
 *
 * @customElement
 * @litElement
 */
class ShowArticle extends LitElement {
  /**
   * Properties of element.
   */
  static get properties() {
    return {
      /**
       * Stores boolean value of if the article being fetched?
       *
       * @type {{Boolean}}
       */
      isLoading: { type: Boolean },
      /**
       * Stores the article data.
       *
       * @type {{Object}}
       */
      article: { type: Object },
    };
  }

  /**
   * Styles of element.
   *
   * @returns {String} Styles of element.
   */
  static get styles() {
    return css`
      iron-image {
        --iron-image-width: 48px;
        --iron-image-height: 48px;
      }

      .article-image-text {
        display: inline-block;
        vertical-align: top;
        margin-left: 16px;
      }

      .article-image-text .username {
        font-size: 20px;
      }

      .article-image-text .date {
        margin-top: 4px;
        font-size: 12px;
      }
    `;
  }

  /**
   * Constructor.
   */
  constructor() {
    super();
    this.isLoading = true;
    this.article = {};
  }

  /**
   * When component first renders.
   */
  async firstUpdated() {
    const res = await api.get(
      `${endPoints.ARTICLES_ROUTE}/${this.location.params.slug}`
    );

    this.isLoading = false;
    this.article = res.data.article;
  }

  /**
   * Render html of the element.
   *
   * @returns {String} HTML template of the element.
   */
  render() {
    if (this.isLoading) {
      return 'Loading.....';
    }

    const { title, body, createdAt, author } = this.article;

    return html`<div>
      <div class="article-meta">
        <h2>${title}</h2>
        <div class="article-author">
          <iron-image src="${author.image}" alt="${author.username}" preload>
          </iron-image>
          <div class="article-image-text">
            <div class="username">${author.username}</div>
            <div class="date">${new Date(createdAt).toLocaleString()}</div>
          </div>
        </div>
      </div>
      <p class="article-body">${body}</p>
    </div>`;
  }
}

window.customElements.define('show-article', ShowArticle);
