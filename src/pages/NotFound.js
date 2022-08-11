import React from "react";

export default function NotFound() {
    return (
        <div className="w-full flex flex-col p-10 justify-center items-center">
            <img className="mb-3 rounded-3xl shadow-lg" src="https://tracer.uii.ac.id/uploaded/404.gif" alt="404 Error" />
            <span className="text-xl text-gray-500 font-bold">Ooopps. . . Sorry, Looks like this page doesn't exist !</span>
        </div>
    );
}
