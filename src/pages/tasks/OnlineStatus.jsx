import React, { useState, useEffect } from 'react';

const OnlineStatus = () => {

    const [isOnline, setIsOnline] = useState(navigator.onLine)

    useEffect(() => {
        const Online = () => {
            setIsOnline(true)
        }

        const Offline = () => {
            setIsOnline(false)
        }

        window.addEventListener("online", Online)
        window.addEventListener("offline", Offline)

        // return () => {
        //     window.removeEventListener("online", Online)
        //     window.removeEventListener("offline", Offline)
        // }
    }, [])

    return (
        <>
            <div className={`status-container ${isOnline ? "online" : "offline"}`}>
                <div>
                    {isOnline ? "🟢" : "🔴"}
                </div>

                <h1>
                    {isOnline ? "You are Online" : "You are Offline"}
                </h1>

                <p>
                    {isOnline ? "Your internet connection is active." : "Please check your internet connection."}
                </p>
            </div>
        </>
    )
}

export default OnlineStatus
