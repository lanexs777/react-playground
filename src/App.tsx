import React from "react";
import { InitializationProvider } from "./providers/InitializationProvider";
import { MyApp } from "./MyApp";

export const App = () => {
    return (
        <InitializationProvider>
            <MyApp />
        </InitializationProvider>
    );
};
