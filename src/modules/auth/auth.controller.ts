import { Request, Response } from "express";
import { loginService } from "./auth.service";
import { mapLoginRequest } from "./auth.mapper";

export const loginController = (req : Request, res : Response) => {
    try {

        const params = mapLoginRequest(req.body)
        const token = loginService(params)

        res.cookie("token", token, {
            httpOnly : true,
            sameSite : "strict"
        })

        return res.json({
            success : true,
            message : "Login success"
        })

    }catch(err : any) {
        return res.status(400).json({
            success : false,
            message : err.message
        })
    }
}