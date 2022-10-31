import Home from "../src/pages/homepage/Home"
import Register from "./component/register/Register";
import Login from "./component/login/Login";
import Profile from "./pages/homepage/profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>    
        <Route path="/login" element={<Login/>}/>      
        <Route path="/register" element={<Register/>}/>      
        <Route path="/profile/:username" element={<Profile/>}/>      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
