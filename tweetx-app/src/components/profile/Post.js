import React from "react";

function Post() {
  const [posts, setTodos] = useState([]);
  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem("posts"));

    if (posts && posts.length > 0) {
      setTodos(posts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [todos]);
  return (
    <div>
      <div class="m-3 flex h-20 w-20 items-center justify-center rounded-full bg-pink-500">
        <p>User</p>
      </div>
    </div>
  );
}

export default Post;
