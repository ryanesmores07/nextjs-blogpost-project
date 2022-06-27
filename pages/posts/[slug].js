import React from "react";
import Head from "next/head";
import PostContent from "../../components/Posts/SinglePost/PostContent";
import { getPostData, getPostsFiles } from "../../lib/PostsUtils";

const SinglePostPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </>
  );
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
