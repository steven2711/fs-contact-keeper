import React, { useContext, useEffect } from "react";
import styled from "styled-components";

const Home = () => {
  return <h1>Home</h1>;
};

const HomeContainer = styled.div`
  padding: 5rem 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
`;

export default Home;
