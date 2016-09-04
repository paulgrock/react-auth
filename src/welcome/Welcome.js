import React from 'react';
import {Link} from 'react-router';

const Welcome = () => {
  return (
    <main className="main-container main-container--welcome">
      <h3>Welcome to the totally secure area!</h3>
      <Link to="/logout" className="cta__button">Logout</Link> 
    </main>
  );
}

export default Welcome;