import React, {Component} from 'react';

class Login extends Component {
  handlerSubmit = (event) => {
    event.preventDefault();
    this.props.onClick('Map');
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="login">Имя пользователя *</label>
          <input type="email" name="email"></input>
          <label htmlFor="password">Пароль *</label>
          <input type="password" name="password"></input>
          <input type="submit" onClick={(event) => this.handlerSubmit(event)} value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
