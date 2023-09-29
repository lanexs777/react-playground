import React, { useEffect } from "react";
import { Login } from "./components/Login";
import logo from "./logo.svg";
import { useInitialization } from "./providers/InitializationProvider";

const mySubmitHandler = (username: string, password: string) => {
    console.log(username, password);
};

export const MyApp = React.memo(() => {
    const appId = useInitialization();

    useEffect(() => {
        console.log("MyApp rendered, appId:", appId);
    });

    return (
        <>
            <img src={logo} alt="Logo" />
            <Login onSubmit={mySubmitHandler} />
            <p>App ID: {appId}</p>
        </>
    );
});
