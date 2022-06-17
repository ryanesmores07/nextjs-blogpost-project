import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <Wrapper>
      <div className="logo">Ryan's Next Blog</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .logo {
    text-transform: uppercase;
    font-size: var(--size-5);
    font-weight: bold;
    font-family: "Oswald", sans-serif;
    color: var(--color-grey-50);
  }

  @media (min-width: 768px) {
    .logo {
      font-size: var(--size-8);
    }
  }
`;

export default Logo;
