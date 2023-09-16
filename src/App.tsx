import React from "react";
import logo from "./logo.svg";
import { Login } from "./components/Login";

export const App = () => {
    const mySubmitHandler = (username: string, password: string) => {
        console.log(username, password);
    };
    return (
        <>
            <img src={logo} alt="Logo" />
            <Login onSubmit={mySubmitHandler} />
        </>
    );
};
