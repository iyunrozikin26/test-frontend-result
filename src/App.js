import React, { useState } from "react";
import Dashbord from "./pages/dashboard/Dashbord";
import LandingPage from "./pages/landingpage/LandingPage";
import { Routes, Route } from "react-router-dom";
import "./pages/landingpage/landing.css";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/users" element={<Dashbord />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
