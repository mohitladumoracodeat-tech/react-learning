import React, { useEffect, useState } from "react";

const Timer = () => {

    const [seconds, setseconds] = useState(60)
    const [running, setrunning] = useState(false)

    useEffect(() => {
        if (!running || seconds <= 0) {
            return
        }

        const intervalid = setInterval(() => {
            setseconds((prev) => prev - 1)
        }, 1000)

        return () => clearInterval(intervalid)
    }, [running, seconds])

    const starttimer = () => {
        setrunning(true)
    }

    const pausetimer = () => {
        setrunning(false)
    }

    const resettimer = () => {
        setseconds(60)
        setrunning(false)
    }

    return (
        <>
            <div>
                <h1>Countdown Timer</h1>
                <div>
                    {seconds}<span>seconds</span>
                </div>

                <div>
                    <button onClick={starttimer}>Start Timer</button>
                    <button onClick={pausetimer}>Pause Timer</button>
                    <button onClick={resettimer}>Reset Timer</button>
                </div>

                <p>
                    {seconds === 0 ? "Time's Up!" : running ? "Timer is Running" : "Timer is Paused"}
                </p>
            </div>
        </>
    )
}

export default Timer
