import React from "react";
import styled from "styled-components";
import Image from "next/image";

const PostHeader = (props) => {
  const { title, image } = props;

  return (
    <Wrapper>
      <header className="header">
        <h1>{title}</h1>
        <Image src={image} alt="title" width={200} height={150} />
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  .header {
    padding-bottom: var(--size-8);
    border-bottom: 8px solid var(--color-primary-100);
    margin: var(--size-4) 0;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .header h1 {
    font-size: var(--size-8);
    color: var(--color-primary-500);
    margin: 0;
    line-height: initial;
    text-align: center;
  }

  .header img {
    object-fit: cover;
    width: 200px;
    height: 120px;
  }

  @media (min-width: 768px) {
    .header {
      margin: var(--size-8) 0;
      flex-direction: row;
      align-items: flex-end;
    }

    .header h1 {
      font-size: var(--size-16);
      text-align: left;
    }
  }
`;

export default PostHeader;
