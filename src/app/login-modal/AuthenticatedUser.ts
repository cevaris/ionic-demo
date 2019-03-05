export class AuthenticatedUser {
    username: string;
    apiKey: string;

    constructor({ username, apiKey }) {
        this.username = username;
        this.apiKey = apiKey;
    }
}