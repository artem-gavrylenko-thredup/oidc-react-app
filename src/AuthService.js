import { UserManager } from "oidc-client";
import userManagerConfig from './config/userManagerConfig';

export default class AuthService {
    constructor() {
        this.userManager = new UserManager(userManagerConfig);

        this.userManager.events.addUserLoaded(this.updateToken);

        this.userManager.events.addAccessTokenExpired(() => {
            console.log("token expired");

            this.userManager.signinSilent().then(this.updateToken);
        });
    }

    updateToken(user) {
        console.log('user', user);
        // set token_id to cookies
    }

    signinRedirect = () => {
        this.userManager.signinRedirect({});
    };

    signinRedirectCallback = () => {
        this.userManager.signinRedirectCallback();
    };
}