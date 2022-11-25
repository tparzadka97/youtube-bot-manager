import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Video from "./pages/video/Video";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/video" element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;
