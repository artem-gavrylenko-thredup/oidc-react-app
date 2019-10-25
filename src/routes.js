import React from 'react';
import { BrowserRouter as Router , Route, Switch } from "react-router-dom";
import { makeAuthenticator, makeUserManager, Callback } from 'react-oidc';

import App from './App';

import userManagerConfig from './config/userManagerConfig';

const userManager = makeUserManager(userManagerConfig);
const AppWithAuth = makeAuthenticator({
    userManager,
    signinArgs: {
        state: {
            foo: 15
        }
    }
})(App);

const Routes = () => (
    <Router>
        <Switch>
            <Route
                path="/callback"
                render={routeProps => (
                    <Callback
                        onSuccess={user => {
                            // `user.state` will reflect the state that was passed in via signinArgs.
                            console.log('user', user);
                            routeProps.history.push('/')
                        }}
                        userManager={userManager}
                    />
                )}
            />
            <Route path="/" component={AppWithAuth} />
        </Switch>
    </Router>
);

export default Routes;