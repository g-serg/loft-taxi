import React, {Component} from "react";

class Login extends Component {
  handlerSubmit = (event) => {
    event.preventDefault();
    this.props.onClick("Map");
  };

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handlerSubmit(event)}>
          <label htmlFor="login">Имя пользователя *</label>
          <input type="email" name="email"></input>
          <label htmlFor="password">Пароль *</label>
          <input type="password" name="password"></input>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
