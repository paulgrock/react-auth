import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

const Welcome = ({loggedIn}) => {
  if (!loggedIn) {
    return <Redirect to='/' />
  }
  return (
    <main className="main-container main-container--welcome">
      <h3>Welcome to the totally secure area!</h3>
      <Link to="/logout" className="cta__button">Logout</Link> 
    </main>
  );
}

const mapStateToProps = ({loggedIn}) => ({
  loggedIn
})

export default connect(mapStateToProps)(Welcome);