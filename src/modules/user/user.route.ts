import { Router } from "express";
import { getUserController } from "./user.controller";

const getUserRoute = Router()

getUserRoute.get('/user', getUserController)

export default getUserRoute