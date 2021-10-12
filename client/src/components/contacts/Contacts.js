import React, { useContext, useEffect } from "react";
import ContactContext from "../../context/contact/ContactContext";
import ContactItem from "./ContactItem";
import Skeleton from "react-loading-skeleton";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  if (filtered) {
    return (
      <>
        {filtered.map((contact) => (
          <ContactItem contact={contact} key={contact._id} />
        ))}
      </>
    );
  }

  return (
    <>
      {loading ? (
        <Skeleton height={50} />
      ) : (
        contacts.map((contact) => (
          <ContactItem contact={contact} key={contact._id} />
        ))
      )}
    </>
  );
};

export default Contacts;
