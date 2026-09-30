import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Admin.css";

const Adminwelcome = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("loggedInUser");
        navigate("/login");
    };

    return (
        <>

            <div className="admin-page">
                <div className="admin-card">

                    <div className="admin-icon">👑</div>
                    <h1>Welcome Admin!</h1>
                    <p>Welcome to the admin area.You have successfully logged in.</p>
                    <button onClick={logout}>Logout</button>

                </div>
            </div>

        </>
    );
};


export default Adminwelcome;