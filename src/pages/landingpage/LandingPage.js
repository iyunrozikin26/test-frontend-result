import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="landing flex flex-col items-center justify-center w-full h-full ">
            <span className="text-white text-5xl pb-7 font-extralight">WELCOME TO</span>
            <span className="text-gray-200 text-lg font-bold ">
                <span className="text-green-400 font-extrabold text-5xl flex flex-row justify-center items-center">LandX</span> Content Management System
            </span>
            <p className="text-sm font-medium text-gray-400 pb-7">Let's grow to your business! Secure Your Future Starting Today</p>
            <Link to="/users">
                <button className="border text-gray-400 p-2  border-slate-500 rounded-full hover:bg-slate-700">Explore Now</button>
            </Link>
        </div>
    );
};

export default LandingPage;
