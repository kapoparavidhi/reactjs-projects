import React, { useState, useEffect } from "react";
import Popup from "./Popup";
import { formatDistanceToNow } from "date-fns";

function Feed() {
  localStorage.setItem("posts", JSON.stringify(posts));

  const data = localStorage.getItem("posts");
  console.log("data: ", JSON.parse(data));

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Retrieve posts from local storage on component mount
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];

    // Check if the user is authenticated
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }

    setPosts(storedPosts);
  }, []);

  const openPopup = () => {
    if (userId) {
      setPopupOpen(true);
    } else {
      alert("Please enter your user ID first.");
    }
  };

  const closePopup = () => setPopupOpen(false);

  const handlePost = (description) => {
    const post_Id = generateRandomInt();
    const created_time = new Date();
    const user_id = userId;
    const timeAgo = formatDistanceToNow(created_time, { addSuffix: true });

    const newPost = { post_Id, description, created_time, timeAgo, user_id };
    const updatedPosts = [...posts, newPost];

    setPosts(updatedPosts);
    storePostsInLocalStorage(updatedPosts);
  };
  const generateRandomInt = () => {
    return Math.floor(Math.random(2) * 1000000);
  };
  const storePostsInLocalStorage = (posts) => {
    localStorage.setItem("posts", JSON.stringify(posts));
  };
  const retrievePostsFromLocalStorage = () => {
    const storedPosts = localStorage.getItem("posts");
    return storedPosts ? JSON.parse(storedPosts) : [];
  };
  useEffect(() => {
    const storedPosts = retrievePostsFromLocalStorage();
    setPosts(storedPosts);
  }, []);
  const handleUserIdSubmit = (enteredUserId) => {
    setUserId(enteredUserId);
    localStorage.setItem("userId", enteredUserId);
    setPopupOpen(true);
  };
  return (
    <div className="Feed">
      <button
        type="button"
        onClick={openPopup}
        className="mt-5 flex text-white text-xl px-8  w-lg bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg  py-2.5 text-center me-2 mb-2">
        Write
      </button>
      {!userId && (
        <div>
          <p>Please enter your user ID:</p>
          <input type="text" onChange={(e) => setUserId(e.target.value)} />
          <button onClick={() => handleUserIdSubmit(userId)}>Submit</button>
        </div>
      )}
      <>
        {isPopupOpen && <Popup onClose={closePopup} onPost={handlePost} />}

        <div>
          <h2>Posts:</h2>
          <ul>
            {posts.map((post) => (
              <li key={post.post_id}>
                {post.description} - {post.timeAgo}
              </li>
            ))}
          </ul>
        </div>
      </>
    </div>
  );
}

export default Feed;
