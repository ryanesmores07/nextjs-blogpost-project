import React from "react";
import Head from "next/head";
import ContactForm from "../components/Contact/ContactForm";

const ContactPage = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Send me your messages" />
      </Head>
      <ContactForm />
    </>
  );
};

export default ContactPage;
1;
