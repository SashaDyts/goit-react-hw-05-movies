import React from 'react';
import { NavItem, NavContainer } from './Navigation.styled';

export function Navigation() {
  return (
    <NavContainer>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/movies">Movies</NavItem>
    </NavContainer>
  );
}
