import React, { useState, useEffect } from 'react';

const UserDetails = () => {

    const [selectedId, setselectedId] = useState(1)
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState("")

    useEffect(() => {
        const controller = new AbortController()

        const loaduser = async () => {
            try {
                setloading(true)
                seterror("")

                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/users/${selectedId}`,
                )

                if (!response.ok) {
                    throw new Error("User not found")
                }

                const data = await response.json()

                setuser(data)
            } catch (err) {
                if (err.name !== "AbortError") {
                    seterror(err.message)
                }
            } finally {
                setloading(false)
            }
        }
        loaduser()

    }, [selectedId])

    return (
        <>
            <div>
                <h1>User Details</h1>

                <label>Select User : </label>

                <select
                    value={selectedId}
                    onChange={(event) => setselectedId(event.target.value)}>

                    <option value="1">User 1</option>
                    <option value="2">User 2</option>
                    <option value="3">User 3</option>
                    <option value="4">User 4</option>
                    <option value="5">User 5</option>
                    <option value="6">User 6</option>
                    <option value="7">User 7</option>
                    <option value="8">User 8</option>
                    <option value="9">User 9</option>
                    <option value="10">User 10</option>
                </select>

                {loading && <h2>Loading User ...</h2>}

                {error && <h2>{error}</h2>}

                {!loading && !error && user && (
                    <div>
                        <h2>{user.name}</h2>
                        <p><strong>Username :</strong>{user.username}</p>
                        <p><strong>Email :</strong>{user.email}</p>
                        <p><strong>Phone :</strong>{user.phone}</p>
                        <p><strong>Website :</strong>{user.website}</p>
                        <p><strong>Company :</strong>{user.company.name}</p>
                        <p><strong>City :</strong>{user.address.city}</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default UserDetails
