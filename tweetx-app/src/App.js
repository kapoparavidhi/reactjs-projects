// import Header from "./layouts/dashboard/header/Header";
import "./App.css";
// import Profile from "./components/profile/Profile";
// import Navbar from "./layouts/dashboard/navbar/Navbar";
// // import Login from "./components/accounts/login/Login";
// import Signup from "./components/accounts/signup/Signup";
// //import Post from "./components/profile/Post";
// import Feed from "./components/feeds/Feed";
import { useState } from "react";
import Feed from "./components/feeds/Feed";
//import ProfileLayout from "./router/ProfileLayout";
import Users from "./components/users/users";
import Profile from "./components/profile/Profile";

import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/profile/Navbar";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Feed formData={formData} />} />
        <Route path="/users" element={<Users />} />
        <Route path="profile" element={<Profile formData={formData} />} />
      </Routes>
    </div>
  );
}

export default App;
