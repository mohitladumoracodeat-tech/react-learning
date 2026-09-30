import React, { useState, useEffect } from 'react';

const MiniDashboard = () => {

    const [user, setuser] = useState([])
    const [posts, setposts] = useState([])

    const [loading, setloading] = useState(true)
    const [error, seterror] = useState("")

    const [lastupdated, setupdated] = useState("")
    const [notification, setnotifiction] = useState("")

    useEffect(() => {
        const controller = new AbortController()

        let notificationTime

        const refreshDashboard = async () => {
            try {
                setloading(true)
                seterror("")

                const [usersresponse, postsresponse] = await Promise.all([
                    fetch("https://jsonplaceholder.typicode.com/users", {
                    }),

                    fetch("https://jsonplaceholder.typicode.com/posts", {
                    }),
                ])

                if (!usersresponse.ok || !postsresponse.ok) {
                    throw new Error("Failed to fetch dashboard data")
                }

                const userdata = await usersresponse.json()
                const postsdata = await postsresponse.json()

                setuser(userdata)
                setposts(postsdata)

                setupdated(new Date().toLocaleTimeString())

                setnotifiction("data refreshd")

                clearTimeout(notificationTime)

                notificationTime = setTimeout(() => {
                    setnotifiction("")
                }, 2000)

            } catch (err) {
                if (err.name !== "AbortError") {
                    seterror(err.message)
                }
            } finally {
                setloading(false)
            }
        }

        refreshDashboard()

        const intervalID = setInterval(() => {
            refreshDashboard()
        }, 15000)

        return () => {
            clearInterval(intervalID)
            clearTimeout(notificationTime)
        }
    }, [])

    const handleRefresh = () => {
        window.location.reload()
    }

    return (
        <>
            <div>
                <div>
                    <div>
                        <h1>Mini Dashboard</h1>
                        <p>
                            Last Updated:{" "}
                            {lastupdated || "Not updated yet"}
                        </p>
                    </div>

                    <button onClick={handleRefresh}>
                        Refresh
                    </button>
                </div>

                {notification && (
                    <div>
                        {notification}
                    </div>
                )}

                {loading && (
                    <h2>
                        Loading dashboard...
                    </h2>
                )}

                {error && (
                    <h2>
                        {error}
                    </h2>
                )}

                {!loading && !error && (
                    <>
                        <div>
                            <div>
                                <h2>{user.length}</h2>
                                <p>Total User</p>
                            </div>

                            <div>
                                <h2>{posts.length}</h2>
                                <p>Total Posts</p>
                            </div>
                        </div>

                        <div>
                            <div>
                                <h2>User</h2>

                                {user.length === 0 ? (
                                    <p>No users found.</p>
                                ) : (
                                    user.slice(0, 5).map((user) => (
                                        <div key={user.id}>
                                            <strong>{user.name}</strong>
                                            <span>{user.email}</span>
                                        </div>
                                    ))
                                )}
                            </div>

                            <div>
                                <h2>Latest Posts</h2>

                                {posts.length === 0 ? (
                                    <p>No posts found.</p>
                                ) : (
                                    posts.slice(0, 5).map((post) => (
                                        <div key={post.id}>
                                            <strong> #{post.id} {post.title} </strong>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default MiniDashboard
