import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login/Login';
import Welcome from './welcome/Welcome';
import Logout from './logout/Logout';
import './index.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authApp from './reducers';

const routes = [
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
      <Redirect to="/" />
    )
  }
]

const store = createStore(authApp, applyMiddleware(thunk))

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        {routes.map((route, idx) => (
          <Route exact={route.exact} component={route.component} render={route.render} path={route.path} key={idx} />
        ))}
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));