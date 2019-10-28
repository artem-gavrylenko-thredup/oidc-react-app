import React from 'react';

import { AuthConsumer } from './AuthProvider';

class Callback extends React.Component {
    render() {
        const { history } = this.props;

        return (
            <AuthConsumer>
                {({ signinRedirectCallback }) => {
                    signinRedirectCallback();
                    history.push('/');
                    return <span>loading</span>;
                }}
            </AuthConsumer>
        );
    }
}

export default Callback;
