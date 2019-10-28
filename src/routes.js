import React from 'react';
import { BrowserRouter as Router , Route, Switch } from "react-router-dom";

import { AuthProvider } from "./AuthProvider";

import App from './App';
import Callback from './Callback';

const Routes = () => (
    <Router>
        <AuthProvider>
            <Switch>
                <Route path="/callback" component={Callback} />
                <Route path="/" component={App} />
            </Switch>
        </AuthProvider>
    </Router>
);

export default Routes;