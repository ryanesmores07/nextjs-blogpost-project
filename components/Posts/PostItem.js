import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const PostItem = (props) => {
  const { title, image, excerpt, date, slug } = props.post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  const linkPath = `/posts/${slug}`;

  return (
    <Wrapper>
      <li className="post">
        <Link href={linkPath}>
          <a>
            <div className="image">
              <Image
                src={imagePath}
                alt={title}
                width={300}
                height={200}
                layout="responsive"
              />
            </div>
            <div className="content">
              <h3>{title}</h3>
              <time>{formattedDate}</time>
              <p>{excerpt}</p>
            </div>
          </a>
        </Link>
      </li>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .post {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    background-color: var(--color-grey-800);
    text-align: center;
  }

  .post a {
    color: var(--color-grey-100);
  }

  .image {
    width: 100%;
    max-height: 20rem;
    overflow: hidden;
  }

  .image img {
    object-fit: cover;
  }

  .content {
    padding: var(--size-4);
  }

  .content h3 {
    margin: var(--size-2) 0;
    font-size: var(--size-6);
  }

  .content time {
    font-style: italic;
    color: var(--color-grey-300);
  }

  .content p {
    line-height: var(--size-6);
  }
`;

export default PostItem;
