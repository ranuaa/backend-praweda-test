import { loginParams } from "./auth.type";

export const mapLoginRequest = (body : any): loginParams  => {
    if(!body.userName) {
        throw new Error("User name is required")
    }

    return {
        userName : String(body.userName)
    }
}