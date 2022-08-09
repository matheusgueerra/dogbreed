import React, { createContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { api, createSession } from "../services/api";

export const AuthContext = createContext();


//importar os dados da api


export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');

        if(recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false);
    }, []);

    const login = async(email, password) => {
        //terei que colocar um async e depois adicionar um response await
         const response = await createSession(email, password)

        console.log('login auth', {email, password});

        //o usuário fixo vai sair 
        const loggedUser = response.data.user
        const token = response.data.token


        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("token", token);

        api.defaults.headers.Authorization = `Bearer ${token}`;

        navigate("/")
        if([password === "secret"]){
            setUser(loggedUser);
            navigate("/");
        }


    };

    const logout = () => {
        console.log("logout");
        localStorage.removeItem('user');
        //api.defaults.headers.Authorization = null;
        setUser(null);
        navigate("/login");

    };
    return (
        <AuthContext.Provider 
            value={{authenticated:!!user, user, login, loading,
            logout }}
            >
                {children}
            </AuthContext.Provider>
    )
}