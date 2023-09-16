import React, { useEffect } from "react";

interface InitiliazationContext {
    readonly appId: string;
    readonly appVersion: string;
}

const InitializationContext = React.createContext<InitiliazationContext>({
    appId: "",
    appVersion: "",
});

export const useInitialization = () => {
    const context = React.useContext(InitializationContext);
    if (context === undefined) {
        throw new Error(
            "useInitialization must be used within a InitializationProvider"
        );
    }
    return context.appId;
}

export const InitializationProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [appId, setAppId] = React.useState("");
    const [appVersion, setAppVersion] = React.useState("");

    useEffect(() => {
        const fakeFetchAppId = async () => {
            //wait 1 second
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setAppId("myAppId");
        };
        
        const fakeFetchAppVersion = async () => {
            //wait 2 seconds
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setAppVersion("1.0.0");
        };

        fakeFetchAppId();
        fakeFetchAppVersion();
    }, []);

    return (
        <InitializationContext.Provider
            value={{
                appId: appId,
                appVersion: appVersion,
            }}
        >
            {children}
        </InitializationContext.Provider>
    );
}
