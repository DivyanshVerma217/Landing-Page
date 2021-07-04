import React, { useState } from "react";

import {
  GlobalStyle,
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledButton,
} from "./ContactElement";

const ContactUs = () => {
  const initalState = {
    name: "",
    email: "",
    message: "",
    gender: "",
  };
  const [state, setState] = useState(initalState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted!");
    console.log(state);
  };

  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState((prev) => ({ ...prev, [inputName]: value }));
  };

  return (
    <>
      <GlobalStyle />
      <StyledFormWrapper id ="contactus">
        <StyledForm onSubmit={handleSubmit}>
          <h2>Contact Form</h2>
          <label htmlFor="name">Name</label>
          <StyledInput
            type="text"
            name="name"
            value={state.name}
            onChange={handleInput}
          />
          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            name="email"
            value={state.email}
            onChange={handleInput}
          />

          <label htmlFor="message">Message</label>
          <StyledTextArea
            name="message"
            value={state.message}
            onChange={handleInput}
          />

          <StyledButton type="submit" onClick={() => alert("Form Submitted")}>
            Send Message
          </StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};

export default ContactUs;
