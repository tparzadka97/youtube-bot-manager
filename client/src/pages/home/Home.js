import React from "react";
import { useNavigate } from "react-router-dom";

import SiteNavbar from "../../components/Navbar";
import Button from "react-bootstrap/Button";

import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  const navigateTo = (url) => {
    navigate(url);
  };

  return (
    <div>
      <SiteNavbar></SiteNavbar>
      <div className="Home-center">
        <h1 className="text-center">I want to...</h1>
        <div className="d-grid gap-2 col-6 mx-auto">
          <Button variant="primary" onClick={() => navigateTo("/search")}>
            Search for a video
          </Button>
          <Button variant="primary" onClick={() => navigateTo("/search")}>
            View all my videos
          </Button>
        </div>
      </div>
    </div>
  );
}
