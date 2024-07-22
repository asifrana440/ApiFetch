import  { useState, useEffect } from 'react';

const API = "https://jsonplaceholder.typicode.com/posts";

function ApiReact() {
  // State to hold the fetched posts
  const [posts, setPosts] = useState([]);
  // State to handle loading state
  const [loading, setLoading] = useState(true);
  // State to handle error state
  const [error, setError] = useState(null);

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    // Fetch data from the API
    fetch(API)
      .then((response) => {
        // Check if the response is okay
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Update the state with the fetched data
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        setError(error);
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Render loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render error state
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Render fetched data
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ApiReact;
