import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import axios from "axios";

export default function VideoForm() {
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState("");

  const videoRegex =
    /^\s*((?:(?:https?:)?\/\/)?(?:(?:www|m)\.)?(?:youtube\.com|youtu.be)(?:\/(?:[\w-]+\?v=|embed\/|v\/|shorts\/)?))?([\w-]{11})/i;

  const changeHandler = (event) => {
    setFormValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const id = getVideoId(formValue);
    setFormValue("");
    try {
      const response = await axios.post("/api/youtube/videos", { id });
      console.log(response.data);
      navigate("/search/video-details", { state: response.data });
    } catch (error) {
      console.log(error.response);
    }
  };

  const getVideoId = (value) => {
    return value.match(videoRegex);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Label>YouTube Video URL or Video ID</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            value={formValue}
            onChange={changeHandler}
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
