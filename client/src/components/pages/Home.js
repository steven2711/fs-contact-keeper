import React, { useContext, useEffect } from "react";
import Contact from "../contacts/Contacts";
import styled from "styled-components";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import AuthContext from "../../context/auth/AuthContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <HomeContainer>
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contact />
      </div>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  padding: 5rem 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
`;

export default Home;
