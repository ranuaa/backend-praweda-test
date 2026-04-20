import { Router } from "express";
import { getUserController } from "./user.controller";

const getUserRouteKorelasi = Router()

getUserRouteKorelasi.get('/', getUserController)

export default getUserRouteKorelasi