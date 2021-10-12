import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <StyledAbout>
      <h1>About This App</h1>
      <p>This is a full stack react app for keeping contacts.</p>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 1rem 0;
  }
`;

export default About;
