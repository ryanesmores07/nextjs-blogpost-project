import React from "react";
import styled from "styled-components";
import PostItem from "./PostItem";

const PostGrid = (props) => {
  const { posts } = props;
  return (
    <Wrapper>
      <ul className="grid">
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .grid {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 1.5rem;
    align-content: center;
  }
`;
export default PostGrid;
