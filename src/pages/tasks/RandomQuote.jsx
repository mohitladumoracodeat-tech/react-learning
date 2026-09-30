import React, { useState, useEffect } from 'react';

const RandomQuote = () => {

    const [quote, setquote] = useState(null)
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState("")

    const loadquote = async () => {
        try {
            setloading(true)
            seterror("")

            const response = await fetch(
                "https://dummyjson.com/quotes/random"
            )

            if (!response.ok) {
                throw new Error("Unable to load quote")
            }

            const data = await response.json()

            setquote(data)
        } catch (err) {
            seterror(err.message)
        } finally {
            setloading(false)
        }
    }

    useEffect(() => {
        loadquote()

        const intervalID = setInterval(loadquote, 10000)

        return () => clearInterval(intervalID)
    }, [])

    return (
        <>
            <div>
                <h1>Random Quote</h1>

                {loading && <p>Loading quote ...</p>}

                {error && <p>{error}</p>}

                {!loading && !error && quote && (
                    <div>
                        <p>"{quote.quote}"</p>

                        <h3>-{quote.author}</h3>
                    </div>
                )}

                <button onClick={loadquote}>
                    Get New Quote
                </button>
            </div>
        </>
    )
}

export default RandomQuote
