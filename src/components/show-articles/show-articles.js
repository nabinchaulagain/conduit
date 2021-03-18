import { LitElement, html, css } from 'lit-element';
import endPoints from '../../constants/endpoints';
import api from '../../utils/api';
import './article-list';

/**
 * <show-articles> Route component that shows list of articles.
 *
 * @customElement
 * @litElement
 */
class ShowArticles extends LitElement {
  /**
   * Styles of element.
   *
   * @returns {String} CSS of element.
   */
  static get styles() {
    return css`
      h1 {
        text-align: center;
      }
    `;
  }

  /**
   * Properties of element.
   */
  static get properties() {
    return {
      /**
       * Boolean value that indicates if articles are being loaded or not.
       *
       * @type {{Boolean}}
       */
      isLoading: { type: Boolean },
      /**
       * Array of article objects fetched from API.
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
    this.isLoading = true;
    this.articles = [];
  }

  /**
   * Called when first rendered.
   */
  async firstUpdated() {
    const res = await api.get(endPoints.ARTICLES_ROUTE);

    this.isLoading = false;
    this.articles = res.data.articles;
  }

  /**
   * Render html of the element.
   *
   * @returns {String} HTML template of the element.
   */
  render() {
    return html`
      <h1>Latest Articles</h1>
      <div>
        ${this.isLoading
          ? 'Loading....'
          : html` <article-list .articles=${this.articles}></article-list>`}
      </div>
    `;
  }
}

window.customElements.define('show-articles', ShowArticles);
