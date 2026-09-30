import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import './UserCard.css'

const Useefect = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setUsers(data)
                setLoading(false)
            })

    }, [])

    return (
        <div className="container">

            <h1>Users List</h1>

            {loading ? (
                <p className="loading">Loading...</p>
            ) : (
                <div className="cards-container">

                    {users.map((user) => (
                        <UserCard
                            key={user.id}
                            name={user.name}
                            username={user.username}
                            email={user.email}
                            phone={user.phone}
                            website={user.website}
                            city={user.address.city}
                            company={user.company.name}
                        />
                    ))}

                </div>
            )}

        </div>
    )
}

export default Useefect