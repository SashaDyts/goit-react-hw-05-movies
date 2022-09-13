import React from 'react';

import { AppBar } from 'components/AppBar/AppBar';
import { Container } from './Layout.styled';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <Container>
        <AppBar />
        <Outlet />
      </Container>
    </>
  );
}
