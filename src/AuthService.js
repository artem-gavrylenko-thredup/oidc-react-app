import { UserManager } from "oidc-client";
import userManagerConfig from './config/userManagerConfig';

export default class AuthService {
    constructor() {
        this.userManager = new UserManager(userManagerConfig);

        this.userManager.events.addUserLoaded(user => {
            console.log('auth');
            console.log('user', user);
        });

        this.userManager.events.addAccessTokenExpired(() => {
            console.log("token expired");

            this.userManager.signinSilent()
                .then(user => {
                    console.log("signed in", user);
                })
                .catch(err => {
                    console.log(err);
                });
        });
    }

    signinRedirect = () => {
        this.userManager.signinRedirect({});
    };

    signinRedirectCallback = () => {
        this.userManager.signinRedirectCallback().then((resp) => {
            console.log('resp', resp);
            // set id_token to cookie
        });
    };

    signinSilentCallback = () => {
        this.userManager.signinSilentCallback();
    };

    createSigninRequest = () => {
        return this.userManager.createSigninRequest();
    };
}