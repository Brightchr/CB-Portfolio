import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Landing from "./pages/LandingPage";
import "./styles/index.css"; // This includes TailwindCSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
