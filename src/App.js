import "./App.css";

import React, { Component } from "react";
import { HomeWithAuth } from "./Home";
import { Map } from "./Map";
import { ProfileWithAuth } from "./Profile";
import { withAuth } from "./AuthContext";

const PAGES = {
  home: (props) => <HomeWithAuth {...props} />,
  map: (props) => <Map {...props} />,
  profile: (props) => <ProfileWithAuth {...props} />,
};

class App extends Component {
  state = { currentPage: "home" };

  navigateTo = (page) => {
    if (this.props.isLoggenIn) {
      this.setState({ currentPage: page });
    } else {
      this.setState({ currentPage: "home" });
    }
  };

  render() {
    return (
      <>
        <header>
          <div>{this.state.currentPage}</div>
          <nav>
            <ul>
              {Object.keys(PAGES).map((page) => (
                <li key={page}>
                  <button onClick={() => this.navigateTo(page)}>{page}</button>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main>
          <section>{PAGES[this.state.currentPage]({ navigate: this.navigateTo })}</section>
        </main>
      </>
    );
  }
}

export default withAuth(App);
