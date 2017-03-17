import React from 'react';
import { renderToString } from 'react-dom';
import Login from './login/Login';
import Welcome from './welcome/Welcome';
import Logout from './logout/Logout';
import { Redirect } from 'react-router-dom';

module.exports = [
  {
    path: '/',
    exact: true,
    component: Login
  },
  {
    path: '/welcome',
    component: Welcome
  },
  {
    path: '/logout',
    component: Logout
  },
  {
    path: '/login',
    render: () => (
      renderToString(<Redirect to="/" />)
    )
  }
];