import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import AuthContext from "../../context/auth/AuthContext";
import Alert from "../layout/Alert";

const Register = (props) => {
  const authContext = useContext(AuthContext);

  const { register, error, clearErrors, isAuthenticated } = authContext;

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    setTimeout(clearErrors, 5000);

    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    register({ name, email, password });

    console.log("Register submit");
  };

  return (
    <FormContainer>
      <Form onSubmit={onSubmit}>
        {error && <Alert text={error} />}
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

        <Submit type="submit" value="Register" />
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

const Title = styled.h1`
  text-align: center;
`;

const Form = styled.form`
  width: 30%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 3rem;
  background: #f3f6f4;
  border-radius: 10px;

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
  background: #f6b26b;

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(1);
  }
`;

export default Register;
