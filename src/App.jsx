import React from "react";
import Navbar from "./Components/nav/Navbar";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import About from "./Components/about/About";
import TextUtils from "./Components/home/TextUtils";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<TextUtils />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}
