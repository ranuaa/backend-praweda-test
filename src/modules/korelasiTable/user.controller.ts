import { Request,Response } from "express";
import { getUserWithCompany } from "./user.service";

export const getUserController = (req : Request, res : Response) => {
    const data = getUserWithCompany()

    return res.json({
        success : true,
        data
    })
}