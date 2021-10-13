import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import AuthContext from "../../context/auth/AuthContext";
import Alert from "../layout/Alert";
import { Link } from "react-router-dom";

const Login = (props) => {
  const authContext = useContext(AuthContext);

  const { login, error, clearErrors, isAuthenticated } = authContext;

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    login({ email, password });
  };

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/dashboard");
    }

    setTimeout(clearErrors, 5000);
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  return (
    <FormContainer>
      <Form onSubmit={onSubmit}>
        <Title>Login</Title>

        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            value={password}
            required
            onChange={onChange}
          />
        </FormGroup>

        <Submit type="submit">Login</Submit>
        {error && <Alert text={error} />}
        <SubText>
          Don't have an account? <Link to="/register">Register</Link>
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
    margin-top: 2rem;
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
  border-radius: 10px;
  background: #f3f6f4;

  @media (max-width: 540px) {
    padding: 2rem;
  }
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

const SubText = styled.p`
  margin-top: 1rem;
`;

const Submit = styled.button`
  padding: 0.9rem;
  cursor: pointer;
  background: #f6b26b;
  color: white;
  border: none;
  border-radius: 5px;
  width: 100%;
  margin: 1rem 0;
  text-transform: uppercase;

  &:hover {
    transform: scale(1.02);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  &:active {
    transform: scale(1);
  }
`;

export default Login;
