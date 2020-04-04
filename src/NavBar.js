/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import colors from "./colors";

const Spin = keyframes`
from {
transform: rotate(0deg)
}

to {
  transform: rotate(360deg)
}
`;

const SpyGlass = styled("span")`
  display: inline-block;
  animation: 1s ${Spin} linear infinite;
`;

const Container = styled("header")`
  background-color: ${colors.dark};
  position: sticky;
  top: 0;
  z-index: 10;
`;
const NavLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

const NavBar = () => (
  <Container>
    <NavLink to="/">Adopt Me!</NavLink>
    <NavLink to="/search-params">
      <SpyGlass aria-label="search" role="img">
        🔍
      </SpyGlass>
    </NavLink>
  </Container>
);

export default NavBar;
