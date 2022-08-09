import { api } from "./api";
import { requestConfig } from "../utils/config";

const register = async(data) => {
    const config = requestConfig("POST", data);
    
    try {
        const res = await fetch(api + "/register", config ).then((res) => res.json())
        .catch(error)

        if(res) {
            localStorage.setItem("user", JSON.stringify(res));
        }
        
    } catch (error) {
        console.log(error)
        
    }
}