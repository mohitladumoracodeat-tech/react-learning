import React, { useEffect, useState } from "react";

const SearchUsers = () => {

    const [query, setquery] = useState("")
    const [results, setresults] = useState([])
    const [loading, setloading] = useState(false)

    useEffect(() => {
        if (!query.trim()) {
            setresults([])
            return
        }

        const time = setTimeout(async () => {
            try {
                setloading(true)

                const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${query}`)
                const data = await response.json()
                setresults(data)

            } catch (error) {
                console.log(error)
            } finally {
                setloading(false)
            }
        }, 500)

        return () => clearTimeout(time)
    }, [query])


    return (
        <>
            <div>
                <h1>Search Users</h1>

                <input type="text"
                    placeholder="Search by username..."
                    value={query}
                    onChange={(event) => setquery(event.target.value)}
                />

                {loading && <p>Searching ...</p>}

                {!loading && query && results.length === 0 && (
                    <p>No users found</p>
                )}

                <div>
                    {results.map((user) => (
                        <div key={user.id}>
                            <h2>{user.name}</h2>
                            <p>Username: {user.username}</p>
                            <p>Email: {user.email}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SearchUsers