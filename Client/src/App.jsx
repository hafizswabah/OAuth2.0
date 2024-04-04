import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home/>}/>
    </Routes>
  );
}

export default App;
