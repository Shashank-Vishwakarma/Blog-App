import { Client, Account, ID } from "appwrite";

class AuthService {
    constructor() {
        // create appwrite client
        this.client = new Client()
            .setEndpoint(process.env.APPWRITE_API_ENDPOINT)
            .setProject(process.env.APPWRITE_PROJECT_ID);
        // create appwrite account with above client
        this.account = new Account(this.client);
    }

    async createUser({email, password}) {
        try {
            return await this.account.create(
                ID.unique(), 
                email, 
                password
            );
        } catch(error) {
            throw new Error(`Appwrite AuthService Exception :: createUser :: ${error}`)
        }
    }

    async signIn({email, password}) {
        try {
            return await this.account.createEmailSession(
                email,
                password
            );
        } catch(error) {
            throw new Error(`Appwrite AuthService Exception :: signIn :: ${error}`)
        }
    }
}

const authService = new AuthService();

export default authService;