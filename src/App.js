/** @format */

import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./features/sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import "./styles/globals.css";
import Login from "./components/login/components/LoginForm/Login";
import Sign from "./components/login/components/RegisterForm/Sign";
import PostsCard from "./components/Card/PostsCard";
import { Route, Routes } from "react-router-dom";
// import { Home } from './components/icons';
import { auth } from "./components/lib/firebase";
import { useState } from "react";
import Home from "./features/Home/Home";
function App() {
  const extraUser = JSON.parse(localStorage.getItem("userIn"));
  const [user, setUser] = useState();
  auth.onAuthStateChanged((user) => {
    setUser(user);
    localStorage.setItem("userIn", JSON.stringify(user));
  });

  return (
    <Routes>
      <Route path='/' element={!extraUser ? <Login /> : <Home user={user} />} />
      <Route
        path='/sign'
        element={extraUser ? <a href='/home'>Back to Home Page</a> : <Sign />}
      />
      <Route path='/home' element={extraUser ? <Home user={user} /> : null} />
      <Route path='/:id' element={extraUser ? <Profile user={user} /> : null} />

      <Route
        path='/profile'
        element={
          extraUser ? <Profile user={user} /> : <a href='/'>Back to Login page</a>
        }
      />
    </Routes>
  );
}

export default App;
