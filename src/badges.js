import { LitElement, html, css } from 'lit';
import "./badge-component";

export class Badges extends LitElement {
    static get tag() {
        return 'badges-list';
    }

    static get properties() {
        return {
            badges: { type: Array },
            searchForThis: { type: String }
        }
    }
    
    constructor() {
        super();
        this.badges = [];
        this.updateBadges();
        this.searchForThis = '';
        this.searchThis(this.badges,this.searchForThis);
    }

    updateBadges() {
        const address = '../api/badges-api.js';
        fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            this.badges = data;
        });
    }

    searchThis(items, searchForThis){
        return items.filter((list) => 
        {
          for (var item in list)
          {
            if (list[item].toString().toLowerCase().includes(searchForThis.toLowerCase()))
            {
              return true;
            }
          }
          return false;
        });
    }
    
    static get styles() {
        return css`
        :host {
            display: block
        }
        .wrapper {
            border: 2px solid black;
            display: flex;
        }
        .item {
            display: inline-flex;
        }
    `;
    }

    render() {
        return html`
            <div class="wrapper">
                ${this.searchThis(this.badges,this.searchForThis).map(badge => html`
                <div class="item">
                    <badge-component subject="${badge.subject}" badgeTitle="${badge.badgeTitle}" creator="${badge.creator}"></badge-component>
                </div>
                `)}
            </div>
        `;
    }
}
customElements.define(Badges.tag, Badges);