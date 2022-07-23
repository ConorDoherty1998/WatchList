import { Auth } from "aws-amplify";

export const register = async (email: string, preferred_username: string, password: string): Promise<any>  => {
    try {
        const res = await Auth.signUp({
            username: email,
            password,
            attributes: {
                email,
                preferred_username
            }
        })

        return res;
    }
    catch (err) {
        console.log(err);
    }
    
    return false;
}