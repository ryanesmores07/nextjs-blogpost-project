import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import PostHeader from "./PostHeader";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const PostContent = (props) => {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },

    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className="image">
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1];

      return (
        <SyntaxHighlighter
          language={language}
          children={children}
          style={atomDark}
        />
      );
    },
  };

  return (
    <Wrapper>
      <article className="content">
        <PostHeader title={post.title} image={imagePath} />
        <ReactMarkdown components={customRenderers}>
          {post.content}
        </ReactMarkdown>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .content {
    width: 95%;
    max-width: 60rem;
    margin: var(--size-8) auto;
    font-size: var(--size-5);
    line-height: var(--size-8);
    background-color: var(--color-grey-100);
    border-radius: 6px;
    padding: var(--size-4);
  }

  .content p {
    color: var(--color-grey-800);
  }

  .content .image {
    margin: var(--size-4) auto;
    width: 100%;
    max-width: 600px;
  }

  @media (min-width: 768px) {
    .content {
      padding: var(--size-8);
    }
  }
`;

export default PostContent;
