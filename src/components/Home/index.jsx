import React from 'react';
import Branch from './Branch';
import Future from './Future';
import Opener from './Opener';

export const Home = () => {
  return (
    <div>
      <Opener />
      <Branch />
      <Future />
    </div>
  );
};

export default Home;
