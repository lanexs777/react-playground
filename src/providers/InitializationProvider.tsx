import React, { useEffect } from "react";

interface InitiliazationContext {
    readonly appId: string;
    readonly appTitle: string;
}

/**
 * This value is what any component will receive when trying to read from
 * this context and is not wrapped in a corresponding Context.Provider.
 */
const InitializationContext = React.createContext<InitiliazationContext | null>(
    null
);

export const useInitialization = () => {
    const context = React.useContext(InitializationContext);
    if (context === null) {
        throw new Error(
            "useInitialization must be used within a InitializationProvider"
        );
    }
    
    return context.appId;
};

export const InitializationProvider: React.FC<{
    children: React.ReactNode;
}> = ({ children }) => {
    const [appId, setAppId] = React.useState("");
    const [appTitle, setAppTitle] = React.useState("");

    useEffect(() => {
        const fakeFetchAppId = async () => {
            //wait 1 second
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setAppId("myAppId");
        };

        const fakeFetchAppVersion = async () => {
            //wait 2 seconds
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setAppTitle("App Title");
        };

        fakeFetchAppId();
        fakeFetchAppVersion();
    }, []);


    return (
        <InitializationContext.Provider value={{
            appId,
            appTitle
        }}>
            {children}
        </InitializationContext.Provider>
    );
};
