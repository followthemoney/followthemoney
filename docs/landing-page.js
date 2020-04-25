import { LitElement, html, css } from "lit-element";
import "mv-button";
import "mv-container";
import "mv-footer";
import "mv-listbox";
import "mv-main";
import "mv-spinner";
import "mv-tab";
import "./donor-details.js";
import "./detailed-cards.js";

export class LandingPage extends LitElement {
  static get properties() {
    return {
      donation: { type: Number, attribute: false, reflect: true },
      recentDonors: { type: Array, attribute: false, reflect: true },
      topDonations: { type: Array, attribute: false, reflect: true },
      featuredProject: { type: Object, attribute: false, reflect: true },
      topFundraisers: { type: Array, attribute: false, reflect: true },
      latestReports: { type: Array, attribute: false, reflect: true },
    };
  }

  static get styles() {
    return css`
      :host {
        top: 0;
        padding: 0;
        margin: 0;
        color: var(--f1-color);
        --mv-footer-height: 40px;
        --mv-main-margin-left: 0;
      }

      a {
        text-decoration: none;
      }

      nav {
        color: var(--f2-color);
      }

      h2 {
        font-size: var(--font-size-xxl);
        font-weight: bold;
        margin-bottom: 52px;
      }

      mv-main {
        --mv-content-padding: 0;
      }

      mv-container {
        --mv-container-light-color: var(--f1-color);
      }

      mv-button {
        --font-family: var(--font-family);
      }

      .billboard {
        padding: 0;
        margin: 0;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 776px;
        max-height: 776px;
        height: auto;
        background-image: url("./images/billboard.png");
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
      }

      .billboard-content {
        padding: 0;
        margin: 0;
        background: var(--n4-color);
        min-height: 776px;
        max-height: 776px;
      }

      .navigation-menu {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .logo {
        padding: 17px 0 0 0;
        margin: 0 auto 0 115px;
        width: 129px;
      }

      .logo img {
        height: 129px;
        width: 129px;
      }

      .top-menu {
        display: flex;
        flex-direction: row;
      }

      .top-menu ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: var(--font-size-l);
        padding: 50px;
        margin: 0;
        height: var(--font-size-l);
      }

      .top-menu li {
        list-style: none;
        padding: 0 25px;
      }

      .top-menu mv-button {
        --background-color: var(--f2-color);
        --mv-button-light-background: var(--f2-color);
        --mv-button-hover-light-background: var(--a1-color);
      }

      .billboard-message {
        color: var(--f2-color);
        margin: 80px 0 0 126px;
      }

      .billboard-message .slogan {
        font-size: 3.75rem;
        width: 789px;
        min-height: 112px;
      }

      .billboard-message .sub-text {
        margin-top: 20px;
        font-size: 2.5rem;
        width: 789px;
        min-height: 38px;
      }

      .billboard-message mv-button {
        --font-size-m: 1.875rem;
        --mv-button-padding: 20px 50px;
        --mv-button-margin: 35px 0 0 0;
        --background-color: var(--a1-color);
        --mv-button-light-background: var(--a1-color);
        --mv-button-hover-light-background: var(--a1-color);
      }

      .page-content {
        width: 100%;
        height: auto;
        background: var(--b1-color);
      }

      .main-container {
        width: 1440px;
        margin: 0 auto;
      }

      section {
        padding: 30px 173px 25px 173px;
      }

      .lists-featured {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }

      .lists-featured mv-container {
        --mv-container-min-width: 500px;
        --mv-container-max-width: 500px;
        --mv-container-min-height: 512px;
        --mv-container-max-height: 512px;
        --mv-container-border: 2px solid var(--n3-color);
        --mv-container-shadow: none;
        --mv-container-border-radius: 10px;
        --mv-container-margin: 0;
        --mv-container-padding: 30px 0 30px 30px;
      }

      .recent-donors mv-tab {
        --mv-tab-width: calc(100% - 30px);
        --mv-tab-rounded-active-light-background: var(--a1-color);
        --font-size-xl: var(--font-size-l);
      }

      .featured-fundraiser {
        display: flex;
        flex-direction: column;
      }

      .featured-fundraiser h3 {
        font-size: var(--font-size-l);
        font-weight: normal;
        padding: 12px;
        margin: 0 30px 46px 0;
        border-bottom: 1px solid var(--n1-color);
      }

      .project-details {
        text-align: center;
      }

      .project-details .name {
        text-align: center;
        font-size: var(--font-size-l);
        font-weight: bold;
        margin-bottom: 11px;
      }

      .project-details .banner-description {
        display: grid;
        grid-template-columns: 270px auto;
        grid-column-gap: 27px;
        grid-template-areas:
          "banner description"
          "banner reports";
      }

      .banner-description .reports-link {
        grid-area: reports;
        display: flex;
        flex-direction: row-reverse;
        padding-right: 30px;
      }

      .link-group {
        color: var(--f3-color);
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: center;
      }

      i.next {
        margin-top: -6px;
        font-style: normal;
        font-size: 2rem;
        margin-left: 5px;
      }

      .banner-description .banner {
        grid-area: banner;
      }

      .banner-description .description {
        grid-area: description;
        text-align: left;
        padding-right: 30px;
        text-align: justify;
      }

      .quick-donation .fixed-amount {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin: 40px 75px 17px 45px;
      }

      .quick-donation button {
        color: var(--f1-color);
        font-size: var(--font-size-l);
        background: var(--b3-color);
        border: 1px solid var(--b3-color);
        border-radius: 5px;
        width: 117px;
        height: 63px;
        outline: none;
        user-select: none;
        cursor: pointer;
      }

      .quick-donation button.selected {
        color: var(--a1-color);
        border: 1px solid var(--a1-color);
        font-weight: bold;
      }

      .custom-amount {
        margin-right: 30px;
        width: calc(100% - 30px);
        display: grid;
        grid-column-gap: 10px;
        grid-template-columns: calc(100% - 130px) 40px;
        align-items: center;
      }

      .custom-amount mv-spinner {
        --mv-input-border: 2px solid var(--n3-color);
      }

      .custom-amount mv-button {
        --background-color: var(--a1-color);
        --mv-button-light-background: var(--a1-color);
        --mv-button-hover-light-background: var(--a1-color);
      }

      .top-fundraisers {
        padding-top: 80px;
      }

      .see-more {
        display: flex;
        flex-direction: row-reverse;
        margin-top: 50px;
        font-size: var(--font-size-l);
        font-weight: bold;
      }
    `;
  }

  constructor() {
    super();
    this.donation = 1000;
    this.recentDonors = [];
    this.topDonations = [];
    this.featuredProject = {};
    this.topFundraisers = [];
    this.latestReports = [];
  }

  render() {
    return html`
      <mv-main>
        <aside class="billboard">
          <div class="billboard-content">
            <div class="navigation-menu">
              <h1 class="logo">
                <img src="./images/logo-wt.png" title="Follow the money" />
              </h1>
              <nav class="top-menu">
                <ul>
                  <li>Search</li>
                  <li>Discover</li>
                  <li>Fundraiser for</li>
                  <li>How it works</li>
                </ul>
                <ul>
                  <li>Sign-up</li>
                  <li>
                    <mv-button type="outline" button-style="success">
                      Start a fundraiser
                    </mv-button>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="billboard-message">
              <div class="slogan">
                Be sure that your donations reach their destinations!
              </div>
              <div class="sub-text">Transparency is the key!</div>
              <mv-button>Follow the money</mv-button>
            </div>
          </div>
        </aside>
        <div class="page-content">
          <div class="main-container">
            <section class="donations">
              <h2>Donations</h2>
              <div class="lists-featured">
                <mv-container class="recent-donors">
                  <mv-tab group type="rounded">
                    <mv-tab tab key="most-recent">Most recent</mv-tab>
                    <mv-tab content key="most-recent">
                      <donor-details
                        .donors="${this.recentDonors}"
                      ></donor-details>
                    </mv-tab>
                    <mv-tab tab key="top-donations">Top donations</mv-tab>
                    <mv-tab content key="top-donations">
                      <donor-details
                        .donors="${this.topDonations}"
                      ></donor-details>
                    </mv-tab>
                  </mv-tab>
                </mv-container>
                <mv-container class="featured-fundraiser">
                  <h3>Featured fundraiser</h3>
                  <div class="project-details">
                    <div class="name">${this.featuredProject.name}</div>
                    <div class="banner-description">
                      <div class="banner">
                        <img
                          src="${this.featuredProject.banner}"
                          title="${this.featuredProject.name}"
                        />
                      </div>
                      <div class="description">
                        ${this.featuredProject.description}
                      </div>
                      <div class="reports-link">
                        <a href="">
                          <div class="link-group">
                            <div>Reports</div>
                            <i class="next">&#x203A;</i>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="quick-donation">
                    <div class="fixed-amount">
                      <button
                        class="amount${this.donation === 100
                          ? " selected"
                          : ""}"
                        @click="${this.selectQuickDonation(100)}"
                      >
                        &#x20b1; 100
                      </button>
                      <button
                        class="amount${this.donation === 1000
                          ? " selected"
                          : ""}"
                        @click="${this.selectQuickDonation(1000)}"
                      >
                        &#x20b1; 1000
                      </button>
                      <button
                        class="amount${this.donation === 2000
                          ? " selected"
                          : ""}"
                        @click="${this.selectQuickDonation(2000)}"
                      >
                        &#x20b1; 2000
                      </button>
                    </div>
                    <div class="custom-amount">
                      <mv-spinner
                        .value="${this.donation || ""}"
                        min="0"
                        step="50"
                        @spinner-change="${this.changeCustomDonation}"
                      ></mv-spinner>
                      <mv-button type="rounded">Next</mv-button>
                    </div>
                  </div>
                </mv-container>
              </div>
            </section>
            ${this.topFundraisers.length > 0
              ? html`
                  <section class="top-fundraisers">
                    <h2>Top fundraisers</h2>
                    <detailed-cards
                      .list="${this.topFundraisers}"
                    ></detailed-cards>
                    <div class="see-more">
                      <a href="">
                        <div class="link-group">
                          <div>See more</div>
                          <i class="next">&#x203A;</i>
                        </div>
                      </a>
                    </div>
                  </section>
                `
              : html``}
            ${this.latestReports.length > 0
              ? html`
                  <section class="latest-reports">
                    <h2>Latest reports</h2>
                    <detailed-cards
                      .list="${this.latestReports}"
                    ></detailed-cards>
                    <div class="see-more">
                      <a href="">
                        <div class="link-group">
                          <div>See more</div>
                          <i class="next">&#x203A;</i>
                        </div>
                      </a>
                    </div>
                  </section>
                `
              : html``}
          </div>
        </div>

        <mv-footer slot="footer">
          <mv-footer item>FollowTheMoney 2020</mv-footer>
        </mv-footer>
      </mv-main>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    // TODO - these should be replaced with an API fetch
    const sampleData = [
      {
        name: "Jose M.",
        amount: "1000",
        date: "4/24/2020, 8:46:19 PM",
        project: "COVID-19 relief fund",
      },
      {
        name: "Mary Salazar",
        amount: "150",
        date: "4/24/2020, 8:44:29 PM",
        project: "School in Bago",
        comment: "God bless you!",
      },
      {
        name: "Anonymous",
        amount: "1000",
        date: "4/24/2020, 8:43:14 PM",
        project: "Animal shelter in Manila",
      },
      {
        name: "Jose M.",
        amount: "1000",
        date: "4/24/2020, 8:46:19 PM",
        project: "Animal shelter in Manila",
        comment: "Keep it up guys!",
      },
      {
        name: "Christian Munez",
        amount: "2000",
        date: "4/24/2020, 8:46:19 PM",
        project: "COVID-19 relief fund",
      },
      {
        name: "Jose M.",
        amount: "1000",
        date: "4/24/2020, 8:46:19 PM",
        project: "COVID-19 relief fund",
      },
      {
        name: "Mary Salazar",
        amount: "150",
        date: "4/24/2020, 8:44:29 PM",
        project: "School in Bago",
        comment: "God bless you!",
      },
      {
        name: "Anonymous",
        amount: "1000",
        date: "4/24/2020, 8:43:14 PM",
        project: "Animal shelter in Manila",
      },
      {
        name: "Jose M.",
        amount: "1000",
        date: "4/24/2020, 8:46:19 PM",
        project: "Animal shelter in Manila",
        comment: "Keep it up guys!",
      },
      {
        name: "Christian Munez",
        amount: "2000",
        date: "4/24/2020, 8:46:19 PM",
        project: "COVID-19 relief fund",
      },
    ];

    this.recentDonors = this.shuffleArray(sampleData);
    this.topDonations = this.shuffleArray(sampleData);

    this.featuredProject = {
      name: "COVID-19 relief fund",
      banner: "./images/covid-19.png",
      description:
        "The disruption caused by COVID-19 is affecting the lives of billions across the globe, as we are required to adapt to new lifestyles for the unforeseeable future.",
    };

    this.topFundraisers = [
      {
        image: "./images/donors.png",
        location: "Manila, Philippines",
        category: "Category",
        project: {
          name: "Project name",
          description:
            "Project description - UP alumni in Hong Kong donate over 200k to protect medical frontliners at PGH COVID 19 center",
        },
        report: { raised: 1263000, count: 16 },
      },
      {
        image: "./images/donors.png",
        location: "Manila, Philippines",
        category: "Category",
        project: {
          name: "Project name",
          description:
            "Project description - UP alumni in Hong Kong donate over 200k to protect medical frontliners at PGH COVID 19 center",
        },
        report: { raised: 1263000, count: 16 },
      },
      {
        image: "./images/donors.png",
        location: "Manila, Philippines",
        category: "Category",
        project: {
          name: "Project name",
          description:
            "Project description - UP alumni in Hong Kong donate over 200k to protect medical frontliners at PGH COVID 19 center",
        },
        report: { raised: 1263000, count: 16 },
      },
    ];

    this.latestReports = [
      {
        location: "Manila, Philippines",
        category: "Category",
        project: {
          name: "Project/Company name",
          description: "We’ve bought animal food for 200 dogs.",
        },
        report: { accounted: 110000, date: "04.24.2020" },
      },
      {
        location: "Manila, Philippines",
        category: "Category",
        project: {
          name: "Project/Company name",
          description: "We’ve purchased chairs for the new classroom.",
        },
        report: { accounted: 110000, date: "04.24.2020" },
      },
      {
        location: "Manila, Philippines",
        category: "Category",
        project: {
          name: "Project/Company name",
          description: "We’ve bought animal food for 200 dogs.",
        },
        report: { accounted: 110000, date: "04.24.2020" },
      },
    ];
  }

  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return [...array];
  };

  selectQuickDonation = (amount) => () => {
    this.donation = amount;
  };

  changeCustomDonation = (event) => {
    this.donation = event.detail.value;
  };
}

customElements.define("landing-page", LandingPage);
