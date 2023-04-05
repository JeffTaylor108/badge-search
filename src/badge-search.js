import { LitElement, html, css } from 'lit';

export class BadgeSearch extends LitElement {
  static properties = {
    subject: { type: String },
    title: { type: String },
    creator: { type: String },
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

  .search {
      margin-top: 30px;
      margin-right: 5px;
      margin-left: 5px;
      padding: 10px;
      box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.3);
  }

  .portlet.light .portlet-body {
      padding-top: 8px;
  }

  .portlet .portlet-body {
      clear: both;
  }
  .tiles {
      margin-right: -10px;
  }
  .tiles .tile.category-14 {
      background: transparent;
      border: 1px solid #fff;
      border-color: #3e98d3;
  }

  .badge-top {
      background-color: #cfe6f4;
      border-left: 15px solid #3e98d3;
      color: #333333;
  }

  .tile-body, .tiles .tile.category-14 .tile-object {
      border-left: 15px solid #3e98d3;
  }
  .tiles .tile-object {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      min-height: 30px;
      background-color: transparent;
      *zoom: 1;
  }
  .tiles .tile.category-14 .tile-object > .name {
      margin-bottom: 2px;
  }


  .tiles .tile.category-5 {
      background: transparent;
      border: 1px solid #fff;
      border-color: #efc22d;
  }

  .tiles .tile.category-5 .badge-top {
      background-color: #fcf2d3;
      border-left: 15px solid #efc22d;
      color: #333333;
  }

  .tiles .tile.category-5 .tile-body, .tiles .tile.category-5 .tile-object {
      border-left: 15px solid #efc22d;
  }

  h3, .h3 {
      font-size: 24px;
  }
  h1, .h1, h2, .h2, h3, .h3 {
      margin-top: 20px;
      margin-bottom: 10px;
  }

  .tiles .tile.category-13 {
      background: transparent;
      border: 1px solid #fff;
      border-color: #6884C1;
  }

  .tiles .tile.category-13 .badge-top {
      background-color: #e7ebf5;
      border-left: 15px solid #6884C1;
      color: #333333;
  }

  .tiles .tile.category-13 .tile-body, .tiles .tile.category-13 .tile-object {
      border-left: 15px solid #6884C1;
  }

  .pull-right {
      float: right;
  }

  .tiles .badge-tile.tile .tile-body h3, .tiles .badge-tile.tile .tile-body .h3, .tiles .group-tile.tile .tile-body h3, .tiles .group-tile.tile .tile-body .h3, .tiles .portfolio-tile.tile .tile-body h3, .tiles .portfolio-tile.tile .tile-body .h3, .tiles .user-tile.tile .tile-body h3, .tiles .user-tile.tile .tile-body .h3, .tiles .mission-tile.tile .tile-body h3, .tiles .mission-tile.tile .tile-body .h3 {
      word-break: break-word;
      color: #333333;
      line-height: 0.9em;
      margin-top: 0;
      margin-bottom: 5px;
  }

  h1, h2, h3, h4, h5, h6 {
      font-family: "effra", sans-serif;
      font-weight: 300;
  }
  .tiles .tile.category-13 .tile-object > .name {
      margin-bottom: 2px;
  }

  .tiles .tile.category-5 .tile-object > .name {
      margin-bottom: 2px;
  }

  .tiles .tile.category-1 {
      background: transparent;
      border: 1px solid #fff;
      border-color: #4FA86E;
  }

  .tiles .badge-tile.tile, .tiles .group-tile.tile, .tiles .portfolio-tile.tile, .tiles .user-tile.tile, .tiles .mission-tile.tile {
      border-radius: 6px;
      background-color: #fff;
  }

  .tiles .tile.double {
      width: 280px !important;
  }

  .tiles .tile {
      display: block;
      letter-spacing: 0.02em;
      float: left;
      height: 135px;
      width: 135px !important;
      cursor: pointer;
      text-decoration: none;
      color: #ffffff;
      position: relative;
      font-weight: 300;
      font-size: 12px;
      line-height: 20px;
      overflow: hidden;
      border: 4px solid transparent;
      margin: 0 10px 10px 0;
  }

  .tiles .tile.category-1 .badge-top {
      background-color: #cce7d6;
      border-left: 15px solid #4FA86E;
      color: #333333;
  }

  .tiles .badge-tile.tile .badge-top, .tiles .badge-tile.tile .tile-top, .tiles .badge-tile.tile .portfolio-top, .tiles .badge-tile.tile .user-top, .tiles .group-tile.tile .badge-top, .tiles .group-tile.tile .tile-top, .tiles .group-tile.tile .portfolio-top, .tiles .group-tile.tile .user-top, .tiles .portfolio-tile.tile .badge-top, .tiles .portfolio-tile.tile .tile-top, .tiles .portfolio-tile.tile .portfolio-top, .tiles .portfolio-tile.tile .user-top, .tiles .user-tile.tile .badge-top, .tiles .user-tile.tile .tile-top, .tiles .user-tile.tile .portfolio-top, .tiles .user-tile.tile .user-top, .tiles .mission-tile.tile .badge-top, .tiles .mission-tile.tile .tile-top, .tiles .mission-tile.tile .portfolio-top, .tiles .mission-tile.tile .user-top {
      font-weight: 400;
      height: 2.25em;
      line-height: 2.25em;
      padding: 0 0.75em;
  }

  .tiles .tile.category-1 .tile-body, .tiles .tile.category-1 .tile-object {
      border-left: 15px solid #4FA86E;
  }

  .tiles .tile .tile-body {
      height: 100%;
      vertical-align: top;
      padding: 10px 10px;
      overflow: hidden;
      position: relative;
      font-weight: 400;
      font-size: 12px;
      color: #ffffff;
      margin-bottom: 10px;
  }

  .tiles .tile.category-1 .tile-object > .name {
      margin-bottom: 2px;
  }

  .tiles .badge-tile.tile .tile-object > .name, .tiles .group-tile.tile .tile-object > .name, .tiles .portfolio-tile.tile .tile-object > .name, .tiles .user-tile.tile .tile-object > .name, .tiles .mission-tile.tile .tile-object > .name {
      color: #333333;
  }

  .tiles .tile .tile-object > .name {
      position: absolute;
      bottom: 0;
      left: 0;
      margin-bottom: 5px;
      margin-left: 10px;
      margin-right: 15px;
      font-weight: 400;
      font-size: 13px;
      color: #ffffff;
  }
  `;

  constructor() {
    super();
    this.subject = 'Technology & Information';
    this.title = 'APA Style Citations: Introduction';
    this.creator = 'Victoria Raish';
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
        <div class="search">
          <div class="search-container">
            <form class="search-form ng-pristine ng-valid" id="searchForm" ng-submit="search(true)">
              <div class="search-input input-group">
                <span class="input-group-addon" id="search-group-addon"><i class="fa fa-search"></i></span>
                <input type="text" class="form-control ng-pristine ng-untouched ng-valid ng-empty" id="q" name="q" placeholder="Search Content, Topics, and People" ng-model="searchData.q" fdprocessedid="4gau7f">
                
              </div>
            </div>
          </div>
        </div>
       </div>
     </div>
   </div>

  <div id="results" ng-if="!hasSearched" class="ng-scope">
    <div class="portlet light">
      <div class="portlet-title">
        <h2 class="caption bold">Looking for something brand spankin' new? Here are the most recently added badges!</h2>
      </div>
      <div class="portlet-body">
        <div id="badges" class="tiles">

<a class="tile badge-tile double category-14" id="badge_337" data-badge-id="337" data-model="badge" href="/badges/337/earn">

    <div class="badge-top">
      <span class="pull-left">${this.subject}</span>
    </div>

    <div class="tile-body">

      <div class="badge-image pull-right" style="width: 60px; height: 60px; display: block;">
        <div style="width: 60px; height: 60px; display: block; background-size: contain; background-repeat: no-repeat; background-image: url(/uploads/badge/image/337/APA_Style.png)"></div>
      </div>

      <h3> ${this.title}</h3>
    </div>

    <div class="tile-object">
      <div class="name">
        Creator: ${this.creator}
      </div>
    </div>
</a>

<a class="tile badge-tile double category-5" id="badge_692" data-badge-id="692" data-model="badge" href="/badges/692/earn">

    <div class="badge-top">
      <span class="pull-left">Education</span>
    </div>

    <div class="tile-body">

      <div class="badge-image pull-right" style="width: 60px; height: 60px; display: block;">
        <div style="width: 60px; height: 60px; display: block; background-size: contain; background-repeat: no-repeat; background-image: url(/uploads/badge/image/692/icon125-color15.png)"></div>
      </div>

      <h3> IST Career Resources</h3>
    </div>

    <div class="tile-object">
      <div class="name">
        Creator: Cassie Rosas-Carson 
        
        
        
      </div>
    </div>
</a>

<a class="tile badge-tile double category-13" id="badge_687" data-badge-id="687" data-model="badge" href="/badges/687/earn">

    <div class="badge-top">
      <span class="pull-left">Professional Skills</span>
    </div>

    <div class="tile-body">

      <div class="badge-image pull-right" style="width: 60px; height: 60px; display: block;">
        <div style="width: 60px; height: 60px; display: block; background-size: contain; background-repeat: no-repeat; background-image: url(/uploads/badge/image/687/icon108-color16.png)"></div>
      </div>

      <h3> IST Careers - Meet a Coach - level 2</h3>
    </div>

    <div class="tile-object">
      <div class="name">
        Creator: Rita Griffith 
      </div>
    </div>
</a>

<a class="tile badge-tile double category-1" id="badge_676" data-badge-id="676" data-model="badge" href="/badges/676/earn">

    <div class="badge-top">
      <span class="pull-left">Agriculture &amp; Natural Resources</span>
    </div>

    <div class="tile-body">

      <div class="badge-image pull-right" style="width: 60px; height: 60px; display: block;">
        <div style="width: 60px; height: 60px; display: block; background-size: contain; background-repeat: no-repeat; background-image: url(/uploads/badge/image/676/icon77-color14.png)"></div>
      </div>

      <h3> [test] Treat Yourself</h3>
    </div>

    <div class="tile-object">
      <div class="name">
        Creator: Allain Daigle  
      </div>
    </div>
</a>          
            </div>
          </div>
        </div>
    </div>
  </div>
</div>
</div>
</div>
    `;
  }
}

customElements.define('badge-search', BadgeSearch);