import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class BadgeComponent extends LitElement {
  static properties = {
    subject: { type: String },
    badgeTitle: { type: String },
    creator: { type: String },
    icon: { type: String },
  }

  static styles = css`
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
  `;

  constructor() {
    super();
    this.subject = 'Technology & Information';
    this.badgeTitle = 'APA Style Citations: Introduction';
    this.creator = 'Victoria Raish';
    this.icon = 'default';
  }

  render() {

return html`
    <a class="tile badge-tile double category-14" id="badge_337" data-badge-id="337" data-model="badge" href="/badges/337/earn">

<div class="badge-top">
  <span class="pull-left">${this.subject}</span>
</div>

<div class="tile-body">

  <div class="badge-image pull-right" style="width: 60px; height: 60px; display: block;">
    <div style="width: 60px; height: 60px; display: block; background-size: contain; background-repeat: no-repeat; background-image: url(/uploads/badge/image/337/APA_Style.png)"></div>
  </div>

  <h3> ${this.badgeTitle}</h3>
</div>

<div class="tile-object">
  <div class="name">
    Creator: ${this.creator}
  </div>
</div>
</a>
     `;
  }
}

customElements.define('badge-component', BadgeComponent);