import React, { useState } from "react";
import Dashbord from "./pages/dashboard/Dashbord";
import LandingPage from "./pages/landingpage/LandingPage";
import "./pages/landingpage/landing.css";

function App() {
    const [show, setShow] = useState(true);

    return <>{!show ? <LandingPage setShow={setShow} /> : <Dashbord setShow={setShow} />}</>;
}

export default App;
