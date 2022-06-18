import React from "react";
import { AllPosts } from "../../components";
import { getAllPosts } from "../../lib/PostsUtils";

const AllPostPage = (props) => {
  return <AllPosts posts={props.posts} />;
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
