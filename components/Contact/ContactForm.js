import React from "react";
import styled from "styled-components";

const ContactForm = () => {
  return (
    <Wrapper>
      <section className="contact">
        <h1>How can I help you?</h1>
        <form className="form">
          <div className="controls">
            <div className="control">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" email required />
            </div>
            <div className="control">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" email required />
            </div>
          </div>
          <div className="control">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" rows="5"></textarea>
          </div>
          <div className="actions">
            <button>Send Message</button>
          </div>
        </form>
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
