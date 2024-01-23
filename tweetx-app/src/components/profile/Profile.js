import React, { useState } from "react";

function Profile({ formData }) {
  return (
    <div>
      <div>
        <div>
          <div className="flex justify-center items-center ">
            <div
              className="w-96 px-8  
        pt-16 pb-24 rounded-lg overflow-hidden  
        text-center relative flex items-center"
            >
              <div
                className="w-40 h-40 rounded-full  
                inline-flex items-center justify-center  
                bg-pink-400 text-gray-700 text-xl font-bold"
              >
                User
              </div>
            </div>
            <div className="felx justify-end items-end">{formData.name}</div>
          </div>
          <div className="flex justify-center items-center  mb-0">
            <hr className="  w-96 h-1  bg-gray-200 rounded dark:bg-gray-70" />
            <hr className="  w-96 h-1  bg-gray-200 rounded dark:bg-gray-70" />
          </div>
        </div>

        <div className="flex justify-center text-xl mt-5">
          <div>
            <ul class="gap-10 font-medium text-xl flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-white bg-pink-700 rounded md:bg-transparent md:text-pink-500 md:p-0 dark:text-white md:dark:text-pink-500"
                  aria-current="page"
                >
                  Post
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-500 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Followers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-500 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Following
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
