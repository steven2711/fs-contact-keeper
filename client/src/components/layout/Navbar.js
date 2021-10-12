import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaIdCardAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";
import ContactContext from "../../context/contact/ContactContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <>
      <li>Hello, {user && user.name}</li>
      <li>
        <a href="#!" onClick={onLogout}>
          Logout
        </a>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </>
  );

  return (
    <StyledNavbar>
      <div>
        <i>
          <FaIdCardAlt />
        </i>

        <h1>{title}</h1>
      </div>

      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  height: 4rem;
  padding: 0 3rem;
  background: blue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;

  div {
    display: flex;

    i {
      color: white;
      font-size: 1.5rem;
      margin: 0 1rem;
    }

    h1 {
      color: white;
    }
  }

  ul {
    display: flex;
    width: 20%;
    justify-content: space-around;
    list-style: none;

    li {
      a {
        text-decoration: none;
        color: white;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Contact Keeper",
};

export default Navbar;
