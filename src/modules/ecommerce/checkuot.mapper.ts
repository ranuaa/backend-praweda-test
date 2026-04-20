import { checkOutParams } from "./checkout.types";

export const mapCheckoutRequest = (body : any) : checkOutParams => {

    if(!body.price || !body.voucher) {
        throw new Error("Price and voucher Required")
    }

    return {
        price  : Number(body.price),
        voucher : Number(body.voucher)
    }
}