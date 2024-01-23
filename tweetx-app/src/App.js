// import Header from "./layouts/dashboard/header/Header";
import "./App.css";
// import Profile from "./components/profile/Profile";
import Navbar from "./layouts/dashboard/navbar/Navbar";
// import Login from "./components/accounts/login/Login";
import Signup from "./components/accounts/signup/Signup";
//import Post from "./components/profile/Post";
import Feed from "./components/feeds/Feed";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <div className="App">
      {/* <Header /> */}
      <Signup formData={formData} setFormData={setFormData} />
      {/* <Login /> */}

      <Navbar />
      <Feed formData={formData} />
      {/* <Profile formData={formData} /> */}
      {/* <Post /> */}
    </div>
  );
}

export default App;
