import React from "react";
import styled from "styled-components";

const Alert = ({ text }) => {
  return (
    <AlertMsg>
      <p>{text}</p>
    </AlertMsg>
  );
};

const AlertMsg = styled.div`
  padding: 0.8rem;
  background: red;
  color: white;
`;

export default Alert;
