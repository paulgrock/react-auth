import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login/Login';
import Welcome from './welcome/Welcome';
import Logout from './logout/Logout';
import auth from './utils/auth';
import './index.css';
import { Router, Route, Redirect, browserHistory } from 'react-router';

function authRequired(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/'
    })
  }
}

ReactDOM.render((
	<Router history={browserHistory}>
    <Route path="/" component={Login} />
    <Redirect from="/login" to="/" />
    <Route path="/welcome" component={Welcome} onEnter={authRequired} />
    <Route path="/logout" component={Logout} />
  </Router>
), document.getElementById('root'));
