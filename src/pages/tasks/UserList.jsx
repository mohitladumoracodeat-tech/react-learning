import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const loadUsers = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Request failed");
        }

        const data = await response.json();

        setUsers(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    loadUsers();

    return () => controller.abort();
  }, [refreshKey]);

  return (
    <>
      <div>
        <div>
          <h1>User List</h1>

          <button onClick={() => setRefreshKey(refreshKey + 1)}>
            Refresh
          </button>
        </div>

        {loading && <h2>Loading users...</h2>}

        {error && <h2>{error}</h2>}

        {!loading && !error && (
          <div>
            {users.map((user) => (
              <div key={user.id}>
                <h2>{user.name}</h2>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
                <p>City: {user.address.city}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default UserList;