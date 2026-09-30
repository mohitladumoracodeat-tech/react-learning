import React, { useEffect, useState } from "react";

const PostsPagination = () => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const postsPerPage = 5;
  const totalPages = 20;

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);

        const start = (page - 1) * postsPerPage;

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${postsPerPage}`
        );

        const data = await response.json();

        setPosts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [page]);

  return (
    <div className="pagination-container">
      <h1>Posts Pagination</h1>
      <p>Showing 5 posts per page</p>

      {loading ? (
        <h2 className="loading">Loading posts...</h2>
      ) : (
        <div className="pagination-grid">
          {posts.map((post) => (
            <div className="pagination-card" key={post.id}>
              <span>Post #{post.id}</span>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}

      <div className="pagination-buttons">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>

        <span>Page {page} of {totalPages}</span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostsPagination;