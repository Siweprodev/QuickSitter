import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Babysitters from "./pages/Babysitters";
import Details from "./pages/Details";
import Booking from "./pages/Booking";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/babysitters" element={<Babysitters />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
