import { LitElement, html, css } from 'lit';
import "./badge-search.js";
import "./search-widget.js";

export class Badges extends LitElement {
    static get tag() {
        return 'badges';
    }

    static get properties() {
        return {
            badges: { type: Array },
        }
    }
    
    constructor() {
        super();
        this.badges = [];
        this.getSearchResults().then((results) => {
            this.badges = results;
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

    async getSearchResults(value = '') {
        const address = `/api/badges-api?search=${value}`;
        const results = await fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            return data;
        })

        return results;
    }

    async _handleSearchEvent(e) {
        const term = e.detail.value;
        this.badges = this.getSearchResults(term);
    }

    render() {
        return html`
            <search-widget @value-changed="${this._handleSearchEvent}"></search-widget>
            <div class="wrapper">
                ${this.badges.map(badge => html`
                <div class="item">
                    <badge-search subject="${badge.subject}" badgeTitle="${badge.badgeTitle}" creator="${badge.creator}">
                </div>
                `)}
            </div>
        `;
    }
}
customElements.define(Badges.tag, Badges);