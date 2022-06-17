import React from "react";
import styled from "styled-components";
import PostGrid from "./PostGrid";

const AllPosts = (props) => {
  return (
    <Wrapper>
      <section className="posts">
        <h1>All Posts</h1>
        <PostGrid posts={props.posts} />
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .posts {
    width: 90%;
    max-width: 60rem;
    margin: var(--size-8) auto;
  }

  .posts h1 {
    font-size: var(--size-8);
    color: var(--color-grey-800);
    text-align: center;
  }

  @media (min-width: 768px) {
    .posts h1 {
      font-size: var(--size-16);
    }
  }
`;

export default AllPosts;
