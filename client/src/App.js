import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import NavBar from './components/NavBar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" render={() => (
              localStorage.usertoken && localStorage.usertoken !== 'undefined' ? (
                <Profile />
              ) : (
                <Redirect to="/" />
              )
            )} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
