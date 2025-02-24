import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ setToken }) => {
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");
    const [confPwd, setConfPwd] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        let validationString = inputValidation();
        
        if (validationString.length > 0) {
            setMessage(validationString);
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, pwd }),
            });
            const data = await response.json();

            if (response.ok) {
                setToken(data.token);
                localStorage.setItem("token", data.token);
                setMessage("Signup successful!");

            } else {
                setMessage(`Signup failed: ${data.message || response.statusText}`);
            }

        } catch (error) {
            setMessage(`Error signing up: ${error.message}`);
        }
    };


    function inputValidation() {
        let validationString = "";

        setUsername(username.trim());
        setPwd(pwd.trim());
        setConfPwd(confPwd.trim());

        if (username === "" || pwd === "" || confPwd === "") {
            validationString += "One or more fields are blank";
        }

        if (pwd !== confPwd) {
            if (validationString.length > 0) validationString += "\n";
            validationString += "Passwords do not match";
        }

        return validationString;
    }


    function back() {
        navigate("/");
    }


    return (
        <div className="login-page">
            <h1 className="title">⚔️ Account Signup</h1>
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

                    <h2><label>🔑 Confirm Password</label></h2>
                    <input
                    type="password"
                    placeholder="Re-enter Password"
                    value={confPwd}
                    onChange={(e) => setConfPwd(e.target.value)}
                    />

                    <br/><br/><br/>

                    <div className="input-container">
                        <button onClick={back}>Back</button>
                        <button type="submit">Create Account</button>
                    </div>
                </form>
                <div className="input-validation">
                    <p>{message}</p>
                </div>
        </div>
    );
};

export default Signup;
