import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"

function Login({activePage, userValue, passwordValue, handleChange, isLoggedIn, setIsLoggedIn}) {
    
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const loginObj = {
                login: userValue,
                password: passwordValue
            }

            const result = await fetch("http://localhost:3001/api/users/login", {
                method: "POST",
                body: JSON.stringify(loginObj),
                headers:{
                    "Content-Type":"application/json"
                }
            })

            const data = await result.json();

            if(result.ok){
                navigate("/", {replace: true})
                setIsLoggedIn(true);
                localStorage.token = data.token;
                localStorage.isLoggedIn = true;
                
            }
        } catch (error){
            console.error(error);
        }
    }

    return (
        <form id="loginForm" onSubmit={handleSubmit}>
            <input type="text" id="loginUsername" name="username" placeholder="email or username" value={userValue} onChange={handleChange} required></input>
            <input type="password" id="loginPassword" name="password" placeholder="password" value={passwordValue} onChange={handleChange} required></input>
            <div className="statusWindow">
                <p className="warningMessage" id="warningMessage">Oh noes!</p>
                <button className="submitButton" data-activepage={activePage}>{activePage}</button>
            </div>
        </form>
    );
}

export default Login;