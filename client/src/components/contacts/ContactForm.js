import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import ContactContext from "../../context/contact/ContactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, current, clearCurrent, updateContact } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({ name: "", email: "", phone: "", type: "personal" });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const clearAll = () => {
    clearCurrent();
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }

    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal",
    });
  };

  const { name, email, phone, type } = contact;

  return (
    <Form onSubmit={onSubmit}>
      <h2>{current ? "Edit Contact" : "Add Contact"}</h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        onChange={onChange}
        checked={type === "personal"}
      />
      Personal
      <input
        type="radio"
        name="type"
        value="professional"
        onChange={onChange}
        checked={type === "professional"}
      />
      Professional
      <input type="submit" value={current ? "Update Contact" : "Add Contact"} />
      {current && <button onClick={clearAll}>Clear</button>}
    </Form>
  );
};

const Form = styled.form`
  h2 {
    text-align: center;
  }

  h5 {
    margin: 0.5rem 0;
  }

  input[type="radio"] {
    margin: 0 0.5rem;
  }

  input[type="submit"] {
    background: blue;
    color: white;
    width: 100%;
    cursor: pointer;
  }

  input:not([type="radio"]) {
    width: 100%;
    margin: 1rem 0;
    height: 2rem;
  }

  button {
    display: block;
    width: 100%;
    height: 2rem;
    background: red;
    color: white;
    cursor: pointer;
  }
`;

export default ContactForm;
