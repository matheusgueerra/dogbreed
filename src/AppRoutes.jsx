import React, { useContext } from "react";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import LoginPage from './pages/Login/login';
import HomePage from './pages/Home/home';
import Register from "./pages/Register/Register";

import { AuthProvider, AuthContext } from "./contexts/auth";

const AppRoutes = () => {
    const Private = ({children}) => {
        const { authenticated, loading } = useContext(AuthContext);

        if(loading) {
            return <div className="loading">Carregando...</div>
        }

        if(!authenticated) {
            return <Navigate to="/login" />
        }

        return children;
    };

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route 
                    exact
                    path="/registre"
                    element={<Register/>}
                    />
                    <Route 
                    exact 
                    path="/login" 
                    element={<LoginPage />}
                    />
                    <Route 
                    exact 
                    path="/" 
                    element={
                    <Private>
                        <HomePage />
                    </Private>
                    } 
                />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default AppRoutes

