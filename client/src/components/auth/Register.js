import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import AuthContext from "../../context/auth/AuthContext";
import Alert from "../layout/Alert";
import { Link } from "react-router-dom";

const Register = (props) => {
  const authContext = useContext(AuthContext);

  const { register, error, clearErrors, isAuthenticated } = authContext;

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    setTimeout(clearErrors, 5000);

    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handlePasswordMatchError = (password, password2) => {
    if (password.length > 0 && password !== password2) {
      return <SubText color="red">Passwords do not match...</SubText>;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password.length >= 6 && password !== password2) {
      setSubmitError("Please enter matching passwords");
      setTimeout(() => setSubmitError(null), 5000);
      return;
    }

    register({ name, email, password });

    console.log("Register submit");
  };

  return (
    <FormContainer>
      <Form onSubmit={onSubmit}>
        <Title>Account Register</Title>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" value={email} onChange={onChange} />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            value={password}
            minLength="6"
            required
            onChange={onChange}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password2">Confirm Password</Label>
          <Input
            type="password"
            name="password2"
            value={password2}
            minLength="6"
            required
            onChange={onChange}
          />
        </FormGroup>

        {handlePasswordMatchError(password, password2)}

        <Submit type="submit">Register</Submit>

        {error && <Alert text={error} />}
        {submitError && <Alert text={submitError} />}

        <SubText>
          Already have an account? <Link to="/login">Login</Link>
        </SubText>
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;

  @media (max-width: 540px) {
    margin: 2rem 0;
  }
`;

const Title = styled.h1`
  text-align: center;
`;

const Form = styled.form`
  max-width: 20rem;
  width: 70%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 3rem;
  background: #f3f6f4;
  border-radius: 10px;

  @media (max-width: 540px) {
    padding: 2rem;
  }
`;

const SubText = styled.p`
  margin-top: 1rem;
  color: ${(props) => props.color || "black"};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

const Label = styled.label`
  margin: 0.5rem 0;
`;

const Input = styled.input`
  height: 2rem;
  padding: 0 0.5rem;
`;

const Submit = styled.button`
  padding: 0.9rem;
  cursor: pointer;
  background: blue;
  color: white;
  border: none;
  border-radius: 5px;
  width: 100%;
  margin: 1rem 0;
  background: #f6b26b;
  text-transform: uppercase;

  &:hover {
    transform: scale(1.02);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  &:active {
    transform: scale(1);
  }
`;

export default Register;
