import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import styled from "styled-components";

const MainNavigation = () => {
  return (
    <Wrapper>
      <header className="header">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  .header {
    width: 100%;
    height: 6rem;
    background-color: var(--color-grey-900);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
  }

  .header ul {
    list-style: none;
    display: flex;
    align-items: baseline;
    margin: 0;
    padding: 0;
  }

  .header li {
    margin: 0 var(--size-4);
  }

  .header a {
    color: var(--color-grey-100);
    font-size: var(--size-4);
  }

  .header a:hover,
  .header a:active,
  .header a.active {
    color: var(--color-grey-200);
  }

  @media (min-width: 768px) {
    .header ul {
      gap: 0.5rem;
    }

    .header a {
      font-size: var(--size-5);
    }
  }
`;

export default MainNavigation;
