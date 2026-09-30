import React from 'react'

const UserCard = ({
    name,
    username,
    email,
    phone,
    website,
    city,
    company
}) => {

    return (
        <div className="user-card">

            <div className="card-header">
                <h2>{name}</h2>
                <span>@{username}</span>
            </div>

            <div className="card-body">

                <p><strong>Email:</strong> {email}</p>

                <p><strong>Phone:</strong> {phone}</p>

                <p><strong>Website:</strong> {website}</p>

                <p><strong>City:</strong> {city}</p>

                <p><strong>Company:</strong> {company}</p>

            </div>

        </div>
    )
}

export default UserCard