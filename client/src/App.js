import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import SignupPage from './components/signup/SignupPage'
import LogoutPage from './components/logout/LogoutPage'
import TopBar from './components/layout/TopBar'

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <nav>
            <TopBar />
          </nav>
            <main style={{marginTop:75}}>
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/logout" component={LogoutPage} />
              <Route exact path="/signup" component={SignupPage} />
              <Route exact path="/" render={ () => <Redirect to="/login" /> } />
            </main>
            </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
