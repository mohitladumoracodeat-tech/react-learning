import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Login.css";

function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    // Default User + Admin
    const defaultUsers = [
        {
            username: "admin",
            email: "admin@gmail.com",
            password: "admin123",
            role: "admin"
        }
    ];


    // localStorage ma users check
    let users = JSON.parse(
        localStorage.getItem("users")
    );


    // Jo users na hoy to default users save karo
    if (!Array.isArray(users)) {

        localStorage.setItem(
            "users",
            JSON.stringify(defaultUsers)
        );
        users = defaultUsers;
    }


    const loginUser = (event) => {
        event.preventDefault();

        if (username === "" || password === "") {
            alert("Please enter username and password");
            return;
        }


        // localStorage mathi users fari thi lo
        const users = JSON.parse(
            localStorage.getItem("users")
        ) || [];


        // Username + password check
        const user = users.find(
            (item) =>
                item.username === username &&
                item.password === password
        );


        if (!user) {
            alert("Invalid username or password");
            return;
        }


        // Logged in user save
        localStorage.setItem(
            "loggedInUser",
            JSON.stringify(user)
        );


        // Role check
        if (user.role === "admin") {
            navigate("/admin");
        } else {
            navigate("/user");
        }
    };


    return (
        <div className="login-container">

            <div className="login-header">

                <div className="login-icon">@</div>

                <h1>Welcome Back</h1>

                <p>Sign in to your account</p>

            </div>


            <form onSubmit={loginUser}>

                <div className="form-group">

                    <div className="form-label-row">

                        <label>Username</label>

                    </div>

                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Enter your username"

                        value={username}

                        onChange={(event) =>
                            setUsername(event.target.value)
                        }
                    />

                </div>


                <div className="form-group">

                    <div className="form-label-row">

                        <label>Password</label>

                        <a href="#">
                            Forgot password?
                        </a>

                    </div>

                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"

                        value={password}

                        onChange={(event) =>
                            setPassword(event.target.value)
                        }
                    />

                </div>


                <label className="remember-me">

                    <input type="checkbox" />

                    <span>Remember me</span>

                </label>


                <button
                    type="submit"
                    className="sign-in-btn"
                >
                    Sign In
                </button>

            </form>


            <div className="divider">
                <span>OR</span>
            </div>


            <p className="register-text">

                Don't have an account?

                <Link to="/register">
                    {" "}Register
                </Link>

            </p>

        </div>
    );
}

export default Login;