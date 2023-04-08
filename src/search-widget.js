import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

export class SearchWidget extends LitElement {
  static properties = {
    input: { type: String }
  }

  static styles = css`
    :host {
        display: block;
    }
    simple-icon {
        display: inline-block;
        --simple-icon-height: 40px;
        --simple-icon-width: 40px;
    }
  `;

  constructor() {
    super();
    this.input = '';
  }

  inputChange(e) {
    this.input = this.shadowRoot.querySelector('input').value;
  }

  update(changedProperties) {
    super.update(changedProperties);
    if (changedProperties.has('input')) {
      this.dispatchEvent(new CustomEvent('input-changed', {
        detail: {
          value: this.input
        }
      }));
    }
  }

  render() {
    return html`
        <simple-icon icon="icons:search"></simple-icon>
        <input type="text" value="${this.input}" @input="${this.inputChange}"/>
    `;
  }
}

customElements.define('search-widget', SearchWidget);
