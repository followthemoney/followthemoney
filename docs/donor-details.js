import { LitElement, html, css } from "lit-element";
import "mv-listbox";

export class DonorDetails extends LitElement {
  static get properties() {
    return {
      donors: { type: Array, attribute: false, reflect: true },
    };
  }

  static get styles() {
    return css`
      mv-listbox {
        --mv-listbox-min-width: 470px;
        --mv-listbox-max-width: 470px;
        --mv-listbox-margin: 0;
        --mv-listbox-padding: 0;
        --mv-listbox-border: none;
        --mv-listbox-shadow: none;
        --mv-listbox-item-padding: 28px 10px 0 0;
        --mv-listbox-content-max-height: 440px;
      }

      .list-container {
        max-height: 300px;
      }

      .donation {
        display: grid;
        grid-template-columns: 89px auto;
        grid-template-areas: "avatar details";
      }

      .avatar {
        grid-area: "avatar";
        background: var(--a1-color);
        height: 79px;
        width: 79px;
        border-radius: 50%;
        padding: 0;
      }

      .avatar > img {
        height: 67.94px;
        width: 67.94px;
        margin: 6px;
      }

      .name {
        font-size: var(--font-size-l);
        font-weight: bold;
      }

      .amount {
        display: inline-block;
        font-size: var(--font-size-m);
        font-weight: bold;
        color: var(--f2-color);
        background: var(--a1-color);
        padding: 4px 8px;
        border-radius: 5px;
        margin-left: 10px;
      }

      .date {
        grid-area: "date";
      }

      .details {
        color: var(--f1-color);
        display: flex;
        flex-direction: column;
      }

      .details * {
        margin-bottom: 5px;
      }

      .details .main {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .details .sub {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: var(--font-size-s);
        color: var(--f3-color);
      }

      .details .comment {
        min-height: var(--font-size-m);
        line-height: var(--font-size-m);
        border-bottom: 1px solid var(--n1-color);
      }
    `;
  }

  constructor() {
    super();
    this.donors = [];
  }

  render() {
    return html`
      <div class="list-container">
        <mv-listbox list>
          ${this.donors.map(
            ({
              name,
              avatar,
              currency,
              amount,
              date,
              project,
              comment,
            }) => html`
              <mv-listbox item>
                <div class="donation">
                  <div class="avatar">
                    <img src="${avatar || "./images/logo-wtp.png"}" />
                  </div>
                  <div class="details">
                    <div class="main">
                      <div class="name">${name}</div>
                      <div class="amount">
                        ${currency || html`&#x20b1;`} ${amount || 0}
                      </div>
                    </div>
                    <div class="sub">
                      <div class="date">${date || ""}</div>
                      <div class="project">${project || ""}</div>
                    </div>
                    <div class="comment">${comment || ""}</div>
                  </div>
                </div>
              </mv-listbox>
            `
          )}
        </mv-listbox>
      </div>
    `;
  }
}

customElements.define("donor-details", DonorDetails);
