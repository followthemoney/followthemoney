import { LitElement, html, css } from "lit-element";

export class DetailedCards extends LitElement {
  static get properties() {
    return {
      list: { type: Array, attribute: false, reflect: true },
    };
  }

  static get styles() {
    return css`
      mv-container {
        --mv-container-min-width: 352px;
        --mv-container-max-width: 352px;
        --mv-container-min-height: 472px;
        --mv-container-max-height: 472px;
        --mv-container-border: 2px solid var(--n3-color);
        --mv-container-shadow: var(--border-shadow2);
        --mv-container-border-radius: 10px;
        --mv-container-margin: 0;
        --mv-container-padding: 1px 0 0 1px;
      }

      .detailed-cards {
        display: grid;
        grid-template-columns: 352px 352px 352px;
        grid-column-gap: 18px;
      }

      .detailed-card {
        color: var(--f1-color);
      }

      .image {
        width: 352px;
        height: 248px;
      }

      .image .provided {
        width: 352px;
        max-height: 248px;
      }

      .image .default {
        width: 130px;
        height: 140px;
        margin-top: 52px;
        margin-left: 108px;
      }

      .location-category {
        color: var(--a1-color);
        margin: 11px 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .name {
        font-size: var(--font-size-l);
        font-weight: bold;
        margin: 0 20px;
      }

      .description {
        min-height: 85px;
        max-height: 85px;
        overflow-y: hidden;
        margin: 12px 20px 0 20px;
      }

      .raised,
      .count,
      .date,
      .accounted {
        font-weight: bold;
        margin: 0 20px;
      }

      .accounted {
        color: var(--a1-color);
      }
    `;
  }

  constructor() {
    super();
    this.list = [];
  }

  render() {
    return html`
      <div class="detailed-cards">
        ${this.list.map(
          ({
            image,
            location,
            category,
            project: { name, description },
            report: { currency, raised, count, accounted, date },
          }) => html`
            <mv-container>
              <div class="detailed-card">
                <div class="image">
                  ${image
                    ? html` <img class="provided" src="${image}" /> `
                    : html`
                        <img class="default" src="./images/logo-btp.png" />
                      `}
                </div>
                <div class="location-category">
                  <div class="location">${location}</div>
                  <div class="category">${category}</div>
                </div>
                <div class="name">${name}</div>
                <div class="description">${description}</div>
                ${raised
                  ? html`<div class="raised">
                      ${currency || html`&#x20b1;`} ${raised} raised
                    </div>`
                  : html``}
                ${count
                  ? html`<div class="count">${count} reports</div>`
                  : html``}
                ${accounted
                  ? html`<div class="accounted">
                      ${currency || html`&#x20b1;`} ${accounted} accounted for
                    </div>`
                  : html``}
                ${date ? html`<div class="date">${date}</div>` : html``}
              </div>
            </mv-container>
          `
        )}
      </div>
    `;
  }
}

customElements.define("detailed-cards", DetailedCards);
