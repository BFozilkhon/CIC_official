import React from 'react';
import { Box, Container, Wrapper } from './style';

export const Branch = () => {
  return (
    <Container>
      <Wrapper>
        <Wrapper.Img />
        <Box>
          <Box.Text>
            Study at one of our 3 CIC School Branches in Uzbekistan
          </Box.Text>
          <Box.Item>
            IBN SINO Branch - <span> Grade 1 - 11</span>
          </Box.Item>
          <Box.Item>
            A. NAVOI Branch - <span> Grade 7 - 11</span>
          </Box.Item>
          <Box.Item>
            SAMARKAND Branch - <span>Grade 5 - 11</span>
          </Box.Item>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Branch;
