// App.js
import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTwubricData,
  sortData,
  setStartDate,
  setEndDate,
  removeDataOutOfRange,
} from "../features/twubricSlice";

function Header() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.twubric.status);
  const error = useSelector((state) => state.twubric.error);
  //   const startDate = useSelector((state) => state.twubric.startDate);
  //   const endDate = useSelector((state) => state.twubric.endDate);

  // useEffect(() => {
  //   dispatch(fetchTwubricData());
  // }, [dispatch]);

  // const handleSort = (sortBy) => {
  //   dispatch(sortData({ sortBy }));
  // };
  const handleSort = useCallback(() => {
    dispatch(sortData());
  }, [dispatch]);

  const handleFilter = () => {
    dispatch(removeDataOutOfRange());
  };

  const handleStartDateChange = (e) => {
    dispatch(setStartDate(new Date(e.target.value)));
  };

  const handleEndDateChange = (e) => {
    dispatch(setEndDate(new Date(e.target.value)));
  };
  useEffect(() => {
    dispatch(fetchTwubricData());

    const handleKeyDown = (event) => {
      // Check if the shortcut key 's' is pressed without any modifiers
      if (
        event.key === "s" &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.shiftKey &&
        !event.metaKey
      ) {
        handleSort();
      }
    };

    // Attach the event listener for keydown
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup: remove the event listener when the component is unmounted
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch, handleSort]);

  return (
    <div>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && (
        <>
          <div className="bg-blue-100 relative rounded-lg flex shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-5 justify-between ">
            <div>
              <h1 class="flex items-center text-5xl font-extrabold dark:text-white">
                Twitter
                <span class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
                  UI
                </span>
              </h1>
            </div>

            <div className="space-x-4 ">
              <label>
                Start Date:{" "}
                <input type="date" onChange={handleStartDateChange} />
              </label>
              <label>
                End Date: <input type="date" onChange={handleEndDateChange} />
              </label>
              <button
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                onClick={() => handleFilter("join_date")}
              >
                Filter
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                onClick={() => handleSort("total")}
              >
                Sort by Total
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                onClick={() => handleSort("friends")}
              >
                Sort by Friends
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                onClick={() => handleSort("influence")}
              >
                Sort by Influence
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                onClick={() => handleSort("chirpiness")}
              >
                Sort by Chirpiness
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
