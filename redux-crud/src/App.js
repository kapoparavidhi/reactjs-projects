// App.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTwubricData, sortData, removeData } from "./twubricSlice";

function App() {
  const dispatch = useDispatch();
  const twubricData = useSelector((state) => state.twubric.data);
  const status = useSelector((state) => state.twubric.status);
  const error = useSelector((state) => state.twubric.error);

  useEffect(() => {
    dispatch(fetchTwubricData());
  }, [dispatch]);

  const handleSort = (sortBy) => {
    dispatch(sortData({ sortBy }));
  };

  const handleRemove = (username) => {
    dispatch(removeData({ username }));
  };

  return (
    <div>
      <h1>Redux Toolkit CRUD App</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && (
        <>
          <button onClick={() => handleSort("total")}>Sort by Total</button>
          <button onClick={() => handleSort("friends")}>Sort by Friends</button>
          <button onClick={() => handleSort("influence")}>
            Sort by Influence
          </button>
          <button onClick={() => handleSort("chirpiness")}>
            Sort by Chirpiness
          </button>
          <ul>
            {twubricData.map((user) => (
              <li key={user.username}>
                {user.username} - Total: {user.total}, Friends: {user.friends},
                Influence: {user.influence}, Chirpiness: {user.chirpiness}
                <button onClick={() => handleRemove(user.username)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
