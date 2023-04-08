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

     `;
  }
}

customElements.define('badge-component', BadgeComponent);