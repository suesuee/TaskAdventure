import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, pwd }),
            });
            const data = await response.json();
            if (response.ok) {
                setToken(data.token);
                localStorage.setItem("token", data.token);
                setMessage("Login successful!");
            } else {
                setMessage("Invalid credentials");
            }
        } catch (error) {
            setMessage("Error logging in");
        }
    };

    function signUp() {
        navigate("/signup");

    }

    return (
        <div className="login-page">
            <h1 className="title">⚔️ Welcome to Task Adventure</h1>
            <form onSubmit={handleSubmit}>
                <h2><label>👤 Username</label></h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />


                <h2><label>🔑 Password</label></h2>
                <input
                    type="password"
                    placeholder="Password"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                />

                <br/><br/><br/>

                <div className="input-container">
                    <button type="submit">Login</button>
                    <button onClick={signUp}>Sign Up</button>
                </div>
            </form>

            <div className="input-validation">
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Login;
