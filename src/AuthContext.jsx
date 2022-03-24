import React, { Component } from "react";
import { useState } from "react";

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export const AuthProvider = ({ children }) => {
  const [isLoggenIn, setIsLoggenIn] = useState(false);

  const logIn = (email, password) => {
    if (email === "" || password === "") return;

    setIsLoggenIn(true);
  };

  const logOut = () => {
    setIsLoggenIn(false);
  };

  return (
    <AuthContext.Provider value={{ logIn, logOut, isLoggenIn }}>{children}</AuthContext.Provider>
  );
};

export const withAuth = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <AuthConsumer>
          {(value) => <WrappedComponent {...value} {...this.props}></WrappedComponent>}
        </AuthConsumer>
      );
    }
  };
};
