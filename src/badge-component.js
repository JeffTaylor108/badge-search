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