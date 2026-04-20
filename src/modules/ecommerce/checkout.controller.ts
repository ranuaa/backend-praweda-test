import { Request, Response } from "express";
import { mapCheckoutRequest } from "./checkuot.mapper";
import { checkOutServive } from "./checkout.service";

export const checkOutController = (req : Request, res : Response) => {

    try {

        const params = mapCheckoutRequest(req.body)

        const data = checkOutServive(params)

        return res.json({
            success : true,
            data
        })
    } catch (err : any) {
        return res.status(400).json({
            success : false,
            message : err.message
        })
    }

}