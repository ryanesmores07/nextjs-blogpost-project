import React from "react";
import PostContent from "../../components/Posts/SinglePost/PostContent";
import { getPostData, getPostsFiles } from "../../lib/PostsUtils";

const SinglePostPage = (props) => {
  return <PostContent post={props.post} />;
};

export const getStaticProps = (context) => {
  const { slug } = context.params;
  const singlePost = getPostData(slug);

  return {
    props: {
      post: singlePost,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames
    .map((fileName) => fileName.replace(/\.md$/, ""))
    .map((slug) => ({ params: { slug: slug } }));

  return {
    paths: slugs,
    fallback: false,
  };
};

export default SinglePostPage;
