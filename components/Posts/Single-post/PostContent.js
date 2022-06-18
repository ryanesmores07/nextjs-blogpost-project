// import React from "react";
// import ReactMarkdown from "react-markdown";
// import styled from "styled-components";
// import PostHeader from "./PostHeader";

// const PostContent = (props) => {
//   const { post } = props;
//   const imagePath = `/images/posts/${post.slug}/${post.image}`;

//   return (
//     <Wrapper>
//       <article className="content">
//         <PostHeader title={post.title} image={imagePath} />
//         {post.content}
//         <ReactMarkdown></ReactMarkdown>
//       </article>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.article`
//   .content {
//     width: 95%;
//     max-width: 60rem;
//     margin: var(--size-8) auto;
//     font-size: var(--size-5);
//     line-height: var(--size-8);
//     background-color: var(--color-grey-100);
//     border-radius: 6px;
//     padding: var(--size-4);
//   }

//   .content p {
//     color: var(--color-grey-800);
//   }

//   .content .image {
//     margin: var(--size-4) auto;
//     width: 100%;
//     max-width: 600px;
//   }

//   @media (min-width: 768px) {
//     .content {
//       padding: var(--size-8);
//     }
//   }
// `;

// export default PostContent;

import React from "react";
import styled from "styled-components";
import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";

const DUMMY_POSTS = {
  slug: "getting-started-with-nextjs",
  title: "Getting Started with NextJs",
  image: "getting-started-nextjs.png",
  date: "2022-02-10",
  content: "# This is a first post",
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;

  return (
    <Wrapper>
      <article className="content">
        <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
        <ReactMarkdown>{DUMMY_POSTS.content}</ReactMarkdown>
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
