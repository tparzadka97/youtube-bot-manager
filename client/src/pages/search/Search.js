import React from "react";

import SiteNavbar from "../../components/Navbar";
import VideoForm from "../../components/VideoForm";

import "./Search.css";

export default function Search() {
  return (
    <div>
      <SiteNavbar></SiteNavbar>
      <div className="Search-center">
        <div className="d-grid gap-2 col-6 mx-auto">
          <VideoForm></VideoForm>
        </div>
      </div>
    </div>
  );
}
