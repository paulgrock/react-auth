import React, {Component} from 'react';
import './Login.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchLoginThunk from '../actions/fetch-login';

class Login extends Component {
  handleSubmit = (evt) => {
    evt.preventDefault();
    const email = this.email.value;
    const password = this.password.value;
    this.props.fetchLogin(email, password);
  }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/welcome" />
    }
    return (
      <main className="main-container main-container--login">
        <header className="login__header">
          <h3>Sign in to the test app</h3>
        </header>
        <form onSubmit={this.handleSubmit} className="login__form">
          <div className="login__field-wrapper">
            <label htmlFor="email" className="login__label">Email:</label>
            <input type="text" name="email" ref={(email) => this.email = email} className="login__input"/>
          </div>
          <div className="login__field-wrapper">            
            <label htmlFor="password" className="login__label">Password:</label>
            <input type="password" name="password" ref={(password) => this.password = password} className="login__input"/>
          </div>
          <button type="submit" className="cta__button">Login</button>
        </form>
        {this.props.error && (
          <p className="login__error">email and password aren't correct. Try: paulgrock@gmail.com | password</p>
        )}
      </main>
    );
  }
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLogin(url, pw) {
      dispatch(fetchLoginThunk(url, pw))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
