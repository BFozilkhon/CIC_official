import React from 'react';
import { Container, Icon, Title, Text, Button } from './style';
import { Link } from 'react-router-dom';
export const Notfound = () => {
  return (
    <Container>
      <Icon />
      <Title>Sorry, an error occurred!</Title>
      <Text>Press the button to the main menu.</Text>
      <Link to='/main'>
        <Button>
          Main menu <Button.Arrow />{' '}
        </Button>
      </Link>
    </Container>
  );
};
export default Notfound;
