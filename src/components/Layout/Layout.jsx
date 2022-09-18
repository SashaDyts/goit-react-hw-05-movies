import React, { Suspense } from 'react';

import { AppBar } from 'components/AppBar/AppBar';
import { Container } from './Layout.styled';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Container>
        <AppBar />

        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}
