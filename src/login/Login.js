import React from 'react';
import './Login.css';
import auth from '../utils/auth';
import {Link} from 'react-router';

const Login = React.createClass({
  getInitialState() {
    return {
      error: false,
      loggedIn: false
    }
  },
  componentWillMount() {
    this.setState({
      loggedIn: auth.loggedIn()
    })
  },
  handleSubmit(evt) {
    evt.preventDefault();
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    auth.login(email, password, (loggedIn) => {
      var {router} = this.props
      if (loggedIn) {
        router.transitionTo('/welcome')
      } else {
        this.setState({
          error: true
        });
      }
    });

  },
  render() {
    return (
      <main className="main-container main-container--login">
        <header className="login__header">
          <h3>Sign in to the test app</h3>
        </header>
        {this.state.loggedIn ? (
          <p>You're already logged in. Go to the <Link to="/welcome">welcome page</Link> or <Link to="/logout">logout</Link>.</p>
        ) : (
          <form onSubmit={this.handleSubmit} className="login__form">
            <div className="login__field-wrapper">
              <label htmlFor="email" className="login__label">Email:</label>
              <input type="text" name="email" ref="email" className="login__input"/>
            </div>
            <div className="login__field-wrapper">            
              <label htmlFor="password" className="login__label">Password:</label>
              <input type="password" name="password" ref="password" className="login__input"/>
            </div>
            <button type="submit" className="cta__button">Login</button>
          </form>
        )}
        {this.state.error && (
          <p className="login__error">email and password aren't correct. Try: paulgrock@gmail.com | password</p>
        )}
      </main>
    );
  }
});

export default Login;
