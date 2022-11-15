import React from 'react';
import { Link } from 'react-router-dom';
import GenericButton from '../../Generic/Button';
import { Container } from './style';

export const Future = () => {
  return (
    <Container>
      <Container.Header>Your Future Begins Here</Container.Header>
      <Container.Title>
        Built Your Amazing And Beautiful Career With Us Together
      </Container.Title>
      <Container.Title second>
        Admission is Open Now <br /> Admission is open for{' '}
        <span>grades 1-11 now.</span>
      </Container.Title>
      <Link to='/apply'>
        <GenericButton>Apply Now</GenericButton>
      </Link>
    </Container>
  );
};

export default Future;
