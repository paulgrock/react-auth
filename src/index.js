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

const store = createStore(authApp, applyMiddleware(thunk))

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/login" render={() => (
          <Redirect to="/" />
        )} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/logout" component={Logout} />
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
