import axios from "axios";
import { userMapper } from "./user.mapper";

export const getUserService = async (page: number, result : number) => {
    const {data} = await axios.get (
        `https://randomuser.me/api?results=${result}&page=${page}`
    )

    return data?.results?.map(userMapper)
}