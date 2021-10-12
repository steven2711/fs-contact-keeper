import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import AuthContext from "../../context/auth/AuthContext";
import Alert from "../layout/Alert";

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
      props.history.push("/");
    }

    setTimeout(clearErrors, 5000);
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  return (
    <FormContainer>
      <h1>Login</h1>
      <Form onSubmit={onSubmit}>
        {error && <Alert text={error} />}
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

        <Submit type="submit" value="Login" />
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

  h1 {
    margin: 1rem 0;
  }
`;

const Form = styled.form`
  width: 20%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 3rem;

  @media (max-width: 1024px) {
    width: 40%;
  }

  @media (max-width: 540px) {
    width: 80%;
    padding: 1rem;
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

const Submit = styled.input`
  padding: 0.9rem;
  cursor: pointer;
  background: blue;
  color: white;
  border: none;
  border-radius: 5px;
  width: 100%;
  margin: 1rem 0;

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(1);
  }
`;

export default Login;
