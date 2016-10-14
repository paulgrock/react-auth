import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login/Login';
import Welcome from './welcome/Welcome';
import Logout from './logout/Logout';
import auth from './utils/auth';
import './index.css';
import { BrowserRouter, Match, Redirect } from 'react-router'

function authRequired(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/'
    })
  }
}

const App = () => (
	<BrowserRouter>
    {({ router }) => (
      <div>
        <Match exactly pattern="/" render={(matchProps) => (
          <Login router={router} {...matchProps} />
        )} />
        <Match pattern="/login" render={() => (
          <Redirect to="/" />
        )} />
        <Match pattern="/welcome" component={Welcome} />
        <Match pattern="/logout" component={Logout} />
      </div>
    )}
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
