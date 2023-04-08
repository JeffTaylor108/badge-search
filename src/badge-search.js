import { LitElement, html, css } from 'lit';
import "./search-widget";
import "./badges";
import { Badges } from './badges';


export class BadgeSearch extends LitElement {
  static properties = {
    data: { type: Array },
    searchForThis: { type: String }
  }

  static styles = css`
    div {
    display: block;
    }

    .page-content {
        margin-top: 0px;
        padding: 0px;
    }

    .page-head .page-title {
        display: inline-block;
        float: left;
        padding: 5px 0 10px 0;
    }

    h1 {
        color: #333333;
        font-size: 36px;
        margin-top: 0;
        margin-bottom: 20px;
    }

    .portlet.light .portlet-body {
        padding-top: 8px;
    }

    .portlet .portlet-body {
        clear: both;
    }

    h3, .h3 {
        font-size: 24px;
    }

    h1, .h1, h2, .h2, h3, .h3 {
        margin-top: 20px;
        margin-bottom: 10px;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: "effra", sans-serif;
        font-weight: 300;
    }

    .searchWidget{
      width: 80%;
      margin: left;
      padding: 12px;
    }

  `;

  constructor() {
    super();
    this.data = [];
    this.searchForThis = '';
  }

  wordChanged(e) {
    this.searchForThis = e.detail.value;
  }

  render() {
    return html`
    <div class="page-content-wrapper">
      <div class="page-content">
        <div class="page-head">
          <div class="page-title">
            <h1>Explore</h1>
          </div>
        </div>

        <div class="row ng-scope" ng-      controller="ExploreCtrl">
          <div class="col-lg-12">
            <div class="portlet light">
              <div class="portlet-body">
                <div class="h3">
              Explore our content in a self-guided manner. Want us to guide you through learning new skills? Try out Missions. Looking for other people with similar focus? Find them in Groups. Interested in viewing all the options within a certain subject area? You can do that with Topics.
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 class="caption bold">Looking for something brand spankin' new? Here are the most recently added badges!</h2>
        <div class = "searchBar">
          <search-widget @word-changed="${this.wordChanged}"></search-widget>
        </div>
        <badges-list searchForThis="${this.searchForThis}"></badges-list>
      </div>
    </div>
    `;
  }
}

customElements.define('badge-search', BadgeSearch);
