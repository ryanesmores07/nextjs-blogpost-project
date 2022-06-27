import ReactDOM from "react-dom";
import styled from "styled-components";

function Notification(props) {
  const { title, message, status } = props;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = "success";
  }

  if (status === "error") {
    statusClasses = "error";
  }

  const cssClasses = `notification ${statusClasses}`;

  return (
    <Wrapper>
      <div className={cssClasses}>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .notification {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-grey-100);
    background-color: var(--color-grey-800);
    padding: 0 var(--size-8);
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
    position: fixed;
    height: 5rem;
    bottom: 0;
    width: 100%;
    left: 0;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }

  .notification h2 {
    font-size: var(--size-6);
    margin: 0;
  }

  .notification p {
    margin: 0;
  }

  .success {
    background-color: var(--color-success-500);
    color: var(--color-grey-800);
  }

  .error {
    background-color: var(--color-error-500);
  }

  @media (min-width: 768px) {
    .notification {
      width: 40rem;
      left: calc(50% - 20rem);
      border-top-right-radius: 6px;
      border-top-left-radius: 6px;
    }
  }
`;

export default Notification;
