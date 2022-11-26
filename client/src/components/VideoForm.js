import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import axios from "axios";

export default function VideoForm() {
  const navigate = useNavigate();

  const [url, setUrl] = useState("");

  const urlChangeHandler = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const id = parseVideoId(url);
    setUrl("");
    try {
      const response = await axios.post("/api/youtube/videos", { id });
      console.log(response.data);
      navigate("/search/video-details", { state: response.data });
    } catch (error) {
      console.log(error.response);
    }
  };

  const parseVideoId = (url) => {
    return url.split("=")[1].split("&")[0];
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Label htmlFor="basic-url">YouTube Video URL</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            id="basic-url"
            value={url}
            type="url"
            onChange={urlChangeHandler}
          />
        </InputGroup>

        <div className="d-grid gap-2 col-12 mx-auto">
          <Button variant="primary" type="submit">
            Go
          </Button>
        </div>
      </Form>
    </div>
  );
}
