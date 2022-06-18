import React from "react";
import { Hero, FeaturedPost } from "../components";
import { getFeaturedPosts } from "../lib/PostsUtils";

const HomePage = (props) => {
  return (
    <>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1800,
  };
};

export default HomePage;
