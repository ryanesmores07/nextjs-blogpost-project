import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Notification from "../ui/Notification";

const sendContactData = async (contactDetail) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetail),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
};

const ContactForm = () => {
  const emailInputRef = useRef("");
  const nameInputRef = useRef("");
  const messageInputRef = useRef("");
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
      emailInputRef.current.value = "";
      nameInputRef.current.value = "";
      messageInputRef.current.value = "";
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const sendMessageHandler = async (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    // optional: add client-side validation

    setRequestStatus("pending");

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus("success");
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  };

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way ",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success",
      message: requestError,
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error",
      message: "Something went wrong",
    };
  }

  return (
    <Wrapper>
      <section className="contact">
        <h1>How can I help you?</h1>
        <form className="form" onSubmit={sendMessageHandler}>
          <div className="controls">
            <div className="control">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" required ref={emailInputRef} />
            </div>
            <div className="control">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" required ref={nameInputRef} />
            </div>
          </div>
          <div className="control">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              rows="5"
              required
              ref={messageInputRef}
            ></textarea>
          </div>
          <div className="actions">
            <button>Send Message</button>
          </div>
        </form>
        {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact {
    margin: var(--size-8) auto;
    border-radius: 6px;
    background-color: var(--color-grey-100);
    width: 90%;
    max-width: 50rem;
    padding: var(--size-4);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    font-size: var(--size-6);
  }

  .contact h1 {
    font-size: var(--size-8);
    margin: var(--size-4) 0;
    text-align: left;
  }

  .form label {
    display: block;
    font-family: "Oswald", sans-serif;
    font-weight: bold;
    margin: var(--size-2) 0 var(--size-1) 0;
  }

  .form input,
  .form textarea {
    font: inherit;
    padding: var(--size-1);
    border-radius: 4px;
    width: 100%;
    border: 1px solid var(--color-grey-400);
    background-color: var(--color-grey-50);
    resize: none;
  }

  .controls {
    display: flex;
    column-gap: 1rem;
    flex-wrap: wrap;
  }

  .control {
    flex: 1;
    min-width: 10rem;
  }

  .actions {
    margin-top: var(--size-4);
    text-align: right;
  }

  .form button {
    font: inherit;
    cursor: pointer;
    background-color: var(--color-primary-700);
    border: 1px solid var(--color-primary-700);
    padding: var(--size-2) var(--size-4);
    border-radius: 4px;
    color: var(--color-primary-50);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  }

  .form button:hover {
    background-color: var(--color-primary-500);
    border-color: var(--color-primary-500);
  }

  @media (min-width: 768px) {
    .contact h1 {
      font-size: var(--size-16);
      text-align: center;
    }
  }
`;

export default ContactForm;
