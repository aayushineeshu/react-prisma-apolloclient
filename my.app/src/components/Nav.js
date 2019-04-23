import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBarWrapper = styled.header``;

const NavBarContainer = styled.div`
  height: 4em;
  box-shadow: ${props =>
    props.transparent ? 'none' : '0px 2px 10px rgba(0, 0, 0, 0.2)'};
  background: ${props =>
    props.transparent ? 'clear' : props.theme.navBarBackground};
  display: grid;
  grid-template-columns: minMax(4em, auto) 1fr auto minMax(4em, auto);
  justify-items: center;
  align-items: center;
  text-align: center;
`;

export const NavBar = ({
  left,
  center,
  right,
  secondaryRight,
  fixed,
  transparent
}) => (
  <NavBarWrapper>
    <NavBarContainer fixed={fixed} transparent={transparent}>
      {left}
      {center}
      {secondaryRight || <div />}
      {right}
    </NavBarContainer>
  </NavBarWrapper>
);
export const NavBarTitle = styled.div`
  color: #20232a;
  margin: 0;
  padding: 0;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
`