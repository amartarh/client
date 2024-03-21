import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Notifications from "./pages/Notifications";
import { Toaster } from "react-hot-toast";
import ApplyDoctor from "./pages/ApplyDoctor";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/apply-doctor" element={<ApplyDoctor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
