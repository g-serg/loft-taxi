import "./App.css";

import React, {Component} from "react";
import Login from "./Login";
import Map from "./Map";
import Profile from "./Profile";

class App extends Component {
  state = {currentPage: "Login"};

  PAGES = {
    Login: <Login onClick={(page) => this.navigateTo(page)} />,
    Map: <Map />,
    Profile: <Profile />,
  };

  navigateTo = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  render() {
    return (
      <>
        <header>
          <div>{this.state.currentPage}</div>
          <nav>
            {Object.keys(this.PAGES).map((page) => (
              <button key={page} onClick={() => this.navigateTo(page)}>
                {page}
              </button>
            ))}
          </nav>
        </header>
        <main>
          <section>{this.PAGES[this.state.currentPage]}</section>
        </main>
      </>
    );
  }
}

export default App;
