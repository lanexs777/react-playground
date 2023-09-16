import React from "react";

interface LoginProps {
    readonly onSubmit: (username: string, password: string) => void;
}

export const Login: React.FC<LoginProps> = ({ onSubmit }) => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <>
            <div>
                <input
                    id="username-input"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <input
                    id="password-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
            </div>
            <button
                id="login-button"
                type="reset"
                value="Submit"
                children="Submit"
                disabled={!username || !password}
                onClick={() => onSubmit(username, password)}
            />
        </>
    );
};
