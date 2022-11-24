import React from "react";
import Button from "react-bootstrap/Button";

import "./Home.css";

export default function Home() {
  return (
    <div className="Home-center">
      <h1 className="text-center">I want to...</h1>
      <div className="d-grid gap-2 col-6 mx-auto">
        <Button variant="primary" size="lg">
          Search for a video
        </Button>
        <Button variant="primary" size="lg">
          View all my videos
        </Button>
      </div>
    </div>
  );
}
