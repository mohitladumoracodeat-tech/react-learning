import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Register.css";

const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setemail] = useState("")
    const [password, setPassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const [terms, setterms] = useState(false);

    const registeruser = (event) => {
        event.preventDefault();

        // 1. Check empty fields
        if (username === "" ||
            email === "" ||
            password === "" ||
            confirmpassword === ""
        ) {
            alert("please fill all fields")
            return;
        }

        // 2. Check password
        if (password !== confirmpassword) {
            alert("Password does not match")
            return;
        }

        // 3. Check terms
        if (!terms) {
            alert("Please accept Terms & Conditions");
            return;
        }

        // 4. Get old users from localStorage
        const users = JSON.parse(
            localStorage.getItem("users")
        ) || [];

        // 5. Check username already exists
        const usernameExists = users.find(
            (user) => user.username === username
        );

        if (usernameExists) {
            alert("Username already exists");
            return;
        }

        // 6. Check email already exists
        const emailExists = users.find(
            (user) => user.email === email
        )

        if (emailExists) {
            alert("Email already exists");
            return;
        }

        // 7. Create new user
        const newuser = {
            username: username,
            email: email,
            password: password,
            role: "user"
        };

        // 8. Add new user to old users
        users.push(newuser);

        // 9. Save users in localStorage
        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );
        alert("Registration successful!")

        // 10. Go back to Login
        // navigate("/login")
    }

    return (
        <>
            <div className="register-container">
                <div className="register-header">

                    <div className="register-logo">@</div>
                    <h1>Create an account</h1>
                    <p>Create an account to get started</p>

                </div>

                <form className="register-form" onSubmit={registeruser}>

                    <div className="form-group">
                        <div className="label-box">
                            <label htmlFor="username">Username</label>
                        </div>
                        <input
                            className="form-input"
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <div className="label-box">
                            <label htmlFor="email">Email</label>
                        </div>
                        <input
                            className="form-input"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(event) => setemail(event.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <div className="label-box">
                            <label htmlFor="password">Password</label>
                            <input
                                className="form-input"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="label-box">
                            <label htmlFor="confirmpassword">Confirm Password</label>
                            <input
                                className="form-input"
                                type="password"
                                name="confirmpassword"
                                id="confirmpassword"
                                placeholder="Enter your Confirm Password"
                                value={confirmpassword}
                                onChange={(event) => setconfirmpassword(event.target.value)}
                            />
                        </div>
                    </div>

                    <label className="terms-box">
                        <input
                            className="terms-checkbox"
                            type="checkbox"
                            name="terms"
                            checked={terms}
                            onChange={(event) => setterms(event.target.checked)}
                        />
                        <span>
                            I agree to the
                            <Link href="#">
                                Terms & Conditions
                            </Link>
                        </span>
                    </label>

                    <button className="register-button" type="submit">
                        Create Account
                    </button>

                </form>

                <div className="or-section">
                    <span className="or-line"></span>
                    <span className="or-text">OR</span>
                    <span className="or-line"></span>
                </div>

                <p className="login-text">
                    Already have an Login?
                    <Link to="/login" className="login-Link">
                        Login
                    </Link>
                </p>

            </div>
        </>
    )
}

export default Register
