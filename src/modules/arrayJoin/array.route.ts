import { Router } from "express";
import { getArrayController } from "./array.controller";

const getArrayRoute = Router();

getArrayRoute.get("/", getArrayController);

export default getArrayRoute;