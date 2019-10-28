import React from 'react';
import logo from './logo.svg';

import { AuthConsumer } from './AuthProvider';

import './App.css';

class App extends React.Component {
  render() {
    return (
        <AuthConsumer>
          {({ signinRedirect }) => (
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Edit <code>src/App.js</code> and save to reload.
                  </p>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href='#' className="App-link" onClick={signinRedirect}>Click</a>
                </header>
              </div>
          )}
        </AuthConsumer>
    );
  }
}

export default App;
