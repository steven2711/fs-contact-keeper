import React, { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import styled from "styled-components";

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  const { alerts } = alertContext;

  return (
    alerts.length > 0 &&
    alerts.map((alert) => (
      <Alert key={alert.id} type={alert.type}>
        {alert.msg}
      </Alert>
    ))
  );
};

const Alert = styled.div`
  font-size: 1.2rem;
  color: ${(props) => (props.type === "danger" ? "red" : null)};
`;

export default Alerts;
