import React, { useContext } from "react";
import styled from "styled-components";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/ContactContext";

const ContactItem = ({ contact }) => {
  const { _id, name, email, phone, type } = contact;

  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <ContactItemContainer>
      <h3>
        {name}{" "}
        <Span color={type === "professional" ? "aquamarine" : "aqua"}>
          {type}
        </Span>
      </h3>
      <Ul>
        {email && (
          <li>
            <i>
              <FaEnvelope />
            </i>

            {email}
          </li>
        )}
        {phone && (
          <li>
            <i>
              <FaPhoneAlt />
            </i>
            {phone}
          </li>
        )}
      </Ul>

      <Button color="black" onClick={() => setCurrent(contact)}>
        Edit
      </Button>
      <Button color="red" onClick={onDelete}>
        Delete
      </Button>
    </ContactItemContainer>
  );
};

const ContactItemContainer = styled.div`
  border: 1px solid black;
  padding: 1rem 2rem;
  background: ivory;
  margin-bottom: 1rem;

  h3 {
    text-transform: capitalize;
  }
`;

const Span = styled.span`
  border: 1px solid blue;
  padding: 0.5rem;
  border-radius: 1rem;
  background: ${(props) => props.color};
  float: right;
`;

const Ul = styled.ul`
  list-style: none;
  margin: 1rem 0;

  li {
    margin: 0.5rem 0;

    i {
      margin: 0 0.5rem 0 0;
    }
  }
`;

const Button = styled.button`
  padding: 0.5rem;
  margin-right: 0.5rem;
  background: ${(props) => props.color};
  color: white;
  cursor: pointer;
`;

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
