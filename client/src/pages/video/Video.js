import React from "react";
import { useLocation } from "react-router-dom";

import SiteNavbar from "../../components/Navbar";

import "./Video.css";

export default function Video(props) {
  const { state } = useLocation();
  return (
    <div>
      <SiteNavbar></SiteNavbar>
    </div>
  );
}
