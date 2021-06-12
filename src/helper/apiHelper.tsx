import axios from "axios";
import { iUser } from "../interfaceModel/user";

async function getUsers(endpoint: string): Promise<iUser[]> {
    try {
        const baseURL = "https://api.github.com";
        const response = await axios.get(`${ baseURL }${ endpoint }`);
        return response?.data;
    } catch (err) {
        throw err;
    }

}

export default { getUsers };
