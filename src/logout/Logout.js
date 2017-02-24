import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import toggleLogin from '../actions/toggle-login';

class Logout extends Component {
  componentWillMount() {
    this.props.handleLogOut();
  }

  render() {
    return (
      <main className="main-container main-container--logout">
        <h3>You are now logged out.</h3>
        <Link to="/" className="cta__button">Login</Link>
      </main>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleLogOut() {
    dispatch(toggleLogin(false))
  }
});

export default connect(null, mapDispatchToProps)(Logout);