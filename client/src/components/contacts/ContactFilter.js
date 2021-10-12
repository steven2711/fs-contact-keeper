import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/ContactContext";
import styled from "styled-components";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);

  const { filterContacts, clearFilter, filtered } = contactContext;

  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <Input
        ref={text}
        type="text"
        placeholder="Filter contacts..."
        onChange={onChange}
      />
    </form>
  );
};

const Input = styled.input`
  width: 50%;
  margin: 1rem 0;
  height: 2rem;
  padding: 0 0.5rem;
`;

export default ContactFilter;
