import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: black;

  :not(:last-child) {
    margin-right: 10px;
  }

  &.active {
    color: blue;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: orange;
  }
`;
