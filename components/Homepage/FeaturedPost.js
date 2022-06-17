import React from "react";
import styled from "styled-components";
import { PostGrid } from "../../components";

const FeaturedPost = (props) => {
  return (
    <Wrapper>
      <section className="latest">
        <h2>Featured Posts</h2>
        <PostGrid posts={props.posts} />
      </section>
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
