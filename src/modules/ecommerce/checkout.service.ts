import { checkOutParams } from "./checkout.types"

export const checkOutServive = ({price, voucher} : checkOutParams) => {
    console.log(price)
    const discount = price * (voucher/100)
    const finalPrice = price - discount
    const point = discount * 0.2
    
    return {
        price,
        voucher,
        discount,
        finalPrice,
        point
    }

}