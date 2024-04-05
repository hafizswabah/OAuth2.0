import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import { Routes, Route } from 'react-router-dom';
import axios from "axios";

function App() {
axios.defaults.withCredentials=true;
axios.defaults.baseURL=import.meta.env.VITE_SERVER_URL;


  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home/>}/>
    </Routes>
  );
}

export default App;
