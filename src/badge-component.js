import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class BadgeComponent extends LitElement {
  static properties = {
    subject: { type: String },
    badgeTitle: { type: String },
    creator: { type: String }
  }

  static styles = css`
    .tiles {
    margin-right: -10px;
    margin-left: 10px;
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

    h3, .h3 {
        font-size: 24px;
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

    .tiles .badge-tile.tile .badge-top, .tiles .badge-tile.tile .tile-top, .tiles .badge-tile.tile .portfolio-top, .tiles .badge-tile.tile .user-top, .tiles .group-tile.tile .badge-top, .tiles .group-tile.tile .tile-top, .tiles .group-tile.tile .portfolio-top, .tiles .group-tile.tile .user-top, .tiles .portfolio-tile.tile .badge-top, .tiles .portfolio-tile.tile .tile-top, .tiles .portfolio-tile.tile .portfolio-top, .tiles .portfolio-tile.tile .user-top, .tiles .user-tile.tile .badge-top, .tiles .user-tile.tile .tile-top, .tiles .user-tile.tile .portfolio-top, .tiles .user-tile.tile .user-top, .tiles .mission-tile.tile .badge-top, .tiles .mission-tile.tile .tile-top, .tiles .mission-tile.tile .portfolio-top, .tiles .mission-tile.tile .user-top {
        font-weight: 400;
        height: 2.25em;
        line-height: 2.25em;
        padding: 0 0.75em;
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
    this.badgeTitle = 'APA Style Citations: Introduction';
    this.creator = 'Victoria Raish';
  }

  render() {

    return html`
        <div id="badges" class="tiles">
        <div class="tile badge-tile double category-14">

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
                ${this.creator}
            </div>
            </div>
        </div>
        </div>
        `;
    }
}

customElements.define('badge-component', BadgeComponent);