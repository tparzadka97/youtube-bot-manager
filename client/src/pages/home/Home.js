import React from "react";
import SiteNavbar from "../../components/Navbar";
import Button from "react-bootstrap/Button";

import "./Home.css";

export default function Home() {
  return (
    <div>
      <SiteNavbar></SiteNavbar>
      <div className="Home-center">
        <h1 className="text-center">I want to...</h1>
        <div className="d-grid gap-2 col-6 mx-auto">
          <Button variant="primary">Search for a video</Button>
          <Button variant="primary">View all my videos</Button>
        </div>
      </div>
    </div>
  );
}
