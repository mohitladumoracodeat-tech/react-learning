import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <Link to="/Students">
                <button>Students</button>
            </Link>

            <Link to="/Addstudents">
                <button>Add Students</button>
            </Link>

            <Link to="/about">
                <button>About</button>
            </Link>

            <Link to="/StudentCard">
                <button>Student Card</button>
            </Link>

            <Link to="/NotFound">
                <button>Not Found</button>
            </Link>

            <Link to="/calculator">
                <button>calculator</button>
            </Link>

            <Link to="/UserList">
                <button>UserList</button>
            </Link>

            <Link to="/SearchUsers">
                <button>SearchUsers</button>
            </Link>

            <Link to="/PostsAutoRefresh">
                <button>PostsAutoRefresh</button>
            </Link>

            <Link to="/Timer">
                <button>Timer</button>
            </Link>

            <Link to="/CreatePost">
                <button>CreatePost</button>
            </Link>

            <Link to="/UserDetails">
                <button>UserDetails</button>
            </Link>

            <Link to="/PostsPagination">
                <button>PostsPagination</button>
            </Link>

            <Link to="/OnlineStatus">
                <button>OnlineStatus</button>
            </Link>

            <Link to="/RandomQuote">
                <button>RandomQuote</button>
            </Link>

            <Link to="/MiniDashboard">
                <button>MiniDashboard</button>
            </Link>
        </>
    )
}

export default Home