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
      <Title>{current ? "Edit Contact" : "Add Contact"}</Title>
      <FormTextGroup>
        <Input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          required
          onChange={onChange}
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          required
          onChange={onChange}
        />
        <Input
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          required
          onChange={onChange}
        />
      </FormTextGroup>
      <FormRadioGroup>
        <SubTitle>Contact Type</SubTitle>

        <Label htmlFor="personal">
          <Input
            type="radio"
            id="personal"
            name="type"
            value="personal"
            onChange={onChange}
            checked={type === "personal"}
          />
          Personal
        </Label>

        <Label htmlFor="professional">
          <Input
            type="radio"
            name="type"
            id="professional"
            value="professional"
            onChange={onChange}
            checked={type === "professional"}
          />
          Professional
        </Label>
      </FormRadioGroup>
      <Submit
        type="submit"
        value={current ? "Update Contact" : "Add Contact"}
      />
      {current && <Clear onClick={clearAll}>Clear</Clear>}
    </Form>
  );
};

const Form = styled.form`
  padding: 1rem 1.5rem;
  background: #f3f6f4;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
`;

const FormTextGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  height: 2rem;
  padding: 0 0.5rem;
  margin: 0.6rem 0;

  &[type="radio"] {
    padding: 0;
    margin: 0 0.5rem 0 0;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
`;

const SubTitle = styled.h3`
  margin: 1rem 0;
`;

const Submit = styled.input`
  padding: 0.9rem;
  cursor: pointer;
  background: #f6b26b;
  color: white;
  border: none;
  border-radius: 5px;
  width: 100%;
  text-transform: uppercase;

  &:hover {
    transform: scale(1.02);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  &:active {
    transform: scale(1);
  }
`;

const FormRadioGroup = styled.div`
  margin: 1rem 0;
`;

const Clear = styled.button`
  padding: 0.9rem;
  cursor: pointer;
  background: #9fb496;
  color: white;
  border: none;
  border-radius: 5px;
  width: 100%;
  text-transform: uppercase;
  margin: 1rem 0;

  &:hover {
    transform: scale(1.02);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  &:active {
    transform: scale(1);
  }
`;

const Title = styled.h2`
  text-align: center;
`;

export default ContactForm;
