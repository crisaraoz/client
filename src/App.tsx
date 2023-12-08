import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import {
    RefineSnackbarProvider,

} from "@refinedev/mui";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import {
    Login,
    Home,
} from "pages";
import { ColorModeContextProvider } from "contexts/color-mode";


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
    };

    return (
        <ColorModeContextProvider>
            <CssBaseline />
            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
            <RefineSnackbarProvider>
                <Router>
                    <Routes>
                        <Route path="/login" element={
                            isLoggedIn ? 
                            <Navigate replace to="/home" /> : 
                            <Login onLoginSuccess={handleLoginSuccess} />
                        } />
                        <Route path="/home/*" element={
                            isLoggedIn ? 
                            <Home /> : 
                            <Navigate replace to="/login" />
                        } />
                        <Route path="*" element={<Navigate replace to={isLoggedIn ? "/home" : "/login"} />} />
                    </Routes>
                </Router>
            </RefineSnackbarProvider>
        </ColorModeContextProvider>
    );
}

export default App;