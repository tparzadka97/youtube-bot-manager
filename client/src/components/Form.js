import React, { useState } from "react";

import axios from "axios";

export default function Form() {
  const [formValue, setFormValue] = useState({
    apiKey: "",
  });

  const { apiKey } = formValue;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    alert("An API key was submitted: " + apiKey);
    event.preventDefault();

    try {
      const response = await axios.post("/api/auth", { apiKey });
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          API Key:
          <input
            name="apiKey"
            type="text"
            value={apiKey}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
