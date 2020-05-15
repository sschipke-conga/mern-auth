import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

import { setCurrentUser, logoutUser } from './actions/authActions';

import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PrivateRoute from './components/private-route/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';

class App extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    if (localStorage.jwtToken) {
      const token = localStorage.jwtToken;
      setAuthToken(token);
      const decodedToken = jwt_decode(token);
      store.dispatch(setCurrentUser(decodedToken));

      const setCurrentTime = Date.now() / 1000;
      if (decodedToken.exp < setCurrentTime) {
        store.dispatch(logoutUser());
        window.location.href = "./login";
      }
    }
  }

  render() {
    return (
      <Provider store={store} >
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
