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
        this.badges = [{
            "subject": "Technology & Information",
            "title": "APA Style Citations: Introduction",
            "creator": "Victoria Raish"
        },
        {
            "subject": "Education",
            "title": "IST Career Resources",
            "creator": "Cassie Rosas-Carson"
        },
        {
            "subject": "Professional Skills",
            "title": "IST Careers - Meet a Coach - level 2",
            "creator": "Rita Griffith"
        },
        {
            "subject": "Agriculture & Natural Resources",
            "title": "Treat Yourself",
            "creator": "Allain Daigle"
        }];
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