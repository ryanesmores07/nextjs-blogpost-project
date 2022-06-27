import React from "react";
import Head from "next/head";
import { AllPosts } from "../../components";
import { getAllPosts } from "../../lib/PostsUtils";

const AllPostPage = (props) => {
  return (
    <>
      <Head>
        <title>All posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 1800,
  };
};

export default AllPostPage;
