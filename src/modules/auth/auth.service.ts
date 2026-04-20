import jwt from "jsonwebtoken"
import { v4 as uuidv4 } from "uuid"
import { loginParams } from "./auth.type"


export const loginService = ({userName} : loginParams) => {
    const payload = {
        id: uuidv4(),
        userName
    }

    const token = jwt.sign(payload, "SecretKey", {
        expiresIn: "1h"
    });

    return token
}