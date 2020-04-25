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
        height: 130px;
        margin: 0 auto;
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
            report: { raised, count, accounted, date },
          }) => html`
            <mv-container>
              <div class="detailed-card">
                <div class="image">
                  ${image
                    ? html` <img class="provided" src="${image}" /> `
                    : html`
                        <img class="default" src="./images/logo-bt.png" />
                      `}
                </div>
              </div>
            </mv-container>
          `
        )}
      </div>
    `;
  }
}

customElements.define("detailed-cards", DetailedCards);
