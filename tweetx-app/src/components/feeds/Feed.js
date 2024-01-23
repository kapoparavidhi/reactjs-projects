import React from "react";

function Feed({ formData }) {
  return (
    <div>
      <button
        type="button"
        className="mt-5 flex text-white text-xl px-8  w-lg bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg  py-2.5 text-center me-2 mb-2"
      >
        Pink
      </button>
      <div className="flex justify-center ml-10 mt-10">
        <div className="max-w-lg w-full h-40 bg-white p-8 border border-gray-300 shadow-md rounded-md  ">
          <div className="">{formData.name}</div>
        </div>
        <div className=" text-base"></div>
      </div>
    </div>
  );
}

export default Feed;
