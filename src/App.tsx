import React from "react";
import { InitializationProvider } from "./providers/InitializationProvider";
import { MyApp } from "./MyApp";
import { QueryClient, QueryClientProvider } from "react-query";

export const App = () => {
    return (
        <QueryClientProvider client={new QueryClient()}>
            <InitializationProvider>
                <MyApp />
            </InitializationProvider>
        </QueryClientProvider>
    );
};
