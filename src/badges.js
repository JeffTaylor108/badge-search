import { LitElement, html, css } from 'lit';
import "./badge-search.js";

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
        this.badges = [];
        this.updateRoser();
    }

    async updateRoster() {
        const address = new URL('../api/badges-api.js', import.meta.url).href;
        fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            this.badges = data;
        })
    }
    
    static get styles() {
        return css`
        :host {
            display: block
        }
        .wraper {
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
                ${this.badges.map(badge => html`
                <div class="item">
                    <badge-search subject="${badge.subject}" title="${badge.title}" creator="${badge.creator}">
                </div>
                `)}
            </div>
        `;
    }
}
customElements.define(Badges.tag, Badges);