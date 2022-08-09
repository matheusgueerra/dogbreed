import axios from "axios";

export const api = axios.create({
    baseURL: 'https://dogbreed-api.q9.com.br/'
});

export const createSession = async (email, password) => {
    return api.post('/register', {email, password})
};

