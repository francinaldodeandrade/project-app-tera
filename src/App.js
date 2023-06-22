import {Routes, Route, BrowserRouter} from "react-router-dom"

import Home from "./components/Pages/Home";
import Users from "./components/Pages/Users"
import UserBlog from "./components/Pages/UserBlog"
import UserForm from "./components/Pages/UserForm"

import "./styles/normalize.css";
import "./styles/fontawesome.min.css";
import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Users" element={<Users />} />
      <Route path="/Users/:UserId" element={<UserBlog />} />
      <Route path="/Users/:UserId/post" element={<UserForm />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
