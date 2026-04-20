import { Response,Request } from "express";
import { getUserService } from "./user.service";

export const getUserController = async (req : Request, res : Response) => {
    try {
        const page = Number(req.query.page) || 1
        const result = Number(req.query.result) || 10

        const data = await getUserService(page,result)

        return res.json({
            success : true,
            data
        })
    }catch(err : any) {
        return res.status(400).json({
            success : false,
            message : err.message
        })
    }
}