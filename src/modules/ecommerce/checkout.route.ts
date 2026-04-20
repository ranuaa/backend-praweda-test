import { Router } from "express";
import { checkOutController } from "./checkout.controller";

const checkOutRoute = Router();

checkOutRoute.post('/', checkOutController)

export default checkOutRoute