import React, { useState } from "react";

const Signup = ({ formData, setFormData }) => {
  console.log("==>FormData", formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="ml-20">
      <button
        type="button"
        class=" flex justify-left ml-10 py-4 px-20 text-xl font-medium mt-10 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-500 hover:bg-black-500 hover:text-pink-400 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Login
      </button>

      <div className="flex justify-left ml-10 mt-10">
        <div className="max-w-lg w-full bg-white p-8 border border-gray-300 shadow-md rounded-md  ">
          <h2 className="flex justify-left  text-4xl font-semibold mb-6">
            Create Account
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="mt-10 p-4 w-full border rounded-md bg-gray-100"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="mt-5 p-4 w-full border rounded-md bg-gray-100"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="mt-5 p-4 w-full border rounded-md bg-gray-100"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-5 p-4 w-full border rounded-md bg-gray-100"
                required
              />
            </div>
            <button
              type="submit"
              className="float-right px-7 bg-pink-500 text-white p-2 rounded-md hover:bg-pink-600 focus:outline-none focus:ring focus:border-pink-300"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
