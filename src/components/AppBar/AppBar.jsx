import React from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import { Container } from './AppBar.styled';

export function AppBar() {
  return (
    <>
      <Container>
        <Navigation></Navigation>
      </Container>
    </>
  );
}
