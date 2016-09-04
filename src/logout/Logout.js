import React from 'react';
import auth from '../utils/auth';
import {Link} from 'react-router';

const Logout = React.createClass({
  componentWillMount() {
    auth.logOut();
  },
  render() {
    return (
      <main className="main-container main-container--logout">
        <h3>You are now logged out.</h3>
        <Link to="/" className="cta__button">Login</Link>
      </main>
    )
  }
})

export default Logout;