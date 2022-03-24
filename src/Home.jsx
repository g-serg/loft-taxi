import React, { Component } from "react";
import { withAuth } from "./AuthContext";

export class Home extends Component {
  goToProfile = () => {
    this.props.navigate("profile");
  };

  authentificate = (event) => {
    event.preventDefault();

    const { email, password } = event.target;
    this.props.logIn(email.value, password.value);
  };

  render() {
    return (
      <>
        {this.props.isLoggenIn ? (
          <p>
            You are login in <button onClick={this.goToProfile}>Goto profile</button>
          </p>
        ) : (
          <form onSubmit={this.authentificate}>
            <label htmlFor="email">Email: </label>
            <input id="email" type="email" name="email" />
            <label htmlFor="password">Password: </label>
            <input id="password" type="password" name="password" />
            <button type="submit">Log in</button>
          </form>
        )}
      </>
    );
  }
}

export const HomeWithAuth = withAuth(Home);
