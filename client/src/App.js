import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import VideoDetails from "./pages/video-details/VideoDetails";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/video-details" element={<VideoDetails />} />
      </Routes>
    </div>
  );
}

export default App;
