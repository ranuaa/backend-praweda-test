import express from "express"
import cookieParser from "cookie-parser";


import checkOutRoute from "./modules/ecommerce/checkout.route";
import authRouter from "./modules/auth/auth.route";
import getUserRouteKorelasi from "./modules/korelasiTable/user.route";
import getUserRoute from "./modules/user/user.route";



const app = express();
app.use(express.json())
app.use(cookieParser())

app.use("/checkout", checkOutRoute)
app.use("/auth", authRouter)
app.use("/korelasi", getUserRouteKorelasi)
app.use("/user", getUserRoute)

app.get("/", (req, res) => res.send("API Running"));

export default app