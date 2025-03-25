import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";

function Routing() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default Routing;
