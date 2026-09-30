import React, { useEffect, useState } from "react";

const PostsAutoRefresh = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [lastUpdated, setlastupdated] = useState("");

    const loadPosts = async () => {
        try {
            setLoading(true);

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts?_limit=10"
            );

            const data = await response.json();

            setPosts(data);
            setlastupdated(new Date().toLocaleTimeString());
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadPosts();
        const intervalId = setInterval(loadPosts, 10000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="posts-container">
            <div className="posts-header">
                <div>
                    <h1>Auto Refresh Posts</h1>
                    <p>Last Updated: {lastUpdated || "Not updated yet"}</p>
                </div>

                <button onClick={loadPosts}>Refresh Now</button>
            </div>

            {loading && posts.length === 0 && <h2>Loading posts...</h2>}

            <div className="posts-grid">
                {posts.map((post) => (
                    <div className="post-card" key={post.id}>
                        <span>Post #{post.id}</span>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostsAutoRefresh;