import React from "react";
import Head from "next/head";
import { Hero, FeaturedPost } from "../components";
import { getFeaturedPosts } from "../lib/PostsUtils";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Ryan's blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
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
