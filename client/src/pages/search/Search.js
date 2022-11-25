import React from "react";
import SiteNavbar from "../../components/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import "./Search.css";

export default function Search() {
  return (
    <div>
      <SiteNavbar></SiteNavbar>
      <div className="Search-center">
        <div className="d-grid gap-2 col-6 mx-auto">
          <Form>
            <Form.Label htmlFor="basic-url">YouTube Video URL</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control id="basic-url" type="url" />
            </InputGroup>

            <div className="d-grid gap-2 col-12 mx-auto">
              <Button variant="primary" type="submit">
                Go
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
