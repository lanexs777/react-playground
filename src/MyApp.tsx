import React from "react";
import logo from "./logo.svg";
import { Login } from "./components/Login";
import { useInitialization } from "./providers/InitializationProvider";

const mySubmitHandler = (username: string, password: string) => {
    console.log(username, password);
};

export const MyApp = () => {
    const  appId = useInitialization();

    console.log("MyApp rendered, context, appId: ", appId);

    return (
        <>
            <img src={logo} alt="Logo" />
            <Login onSubmit={mySubmitHandler} />
            <p>App ID: {appId}</p>
            {/* <p>App Version: {appVersion}</p> */}
        </>
    );
}