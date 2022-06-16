import React from "react";
import styled from "styled-components";

const FeaturedPost = () => {
  return (
    <Wrapper>
      <h1>Featured Post</h1>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .latest {
    width: 90%;
    max-width: 80rem;
    margin: var(--size-8) auto;
  }

  .latest h2 {
    font-size: var(--size-8);
    color: var(--color-grey-800);
    text-align: center;
  }

  @media (min-width: 768px) {
    .latest h2 {
      font-size: var(--size-16);
    }
  }
`;

export default FeaturedPost;
