import React from 'react';
import { Swiper } from 'swiper/react';
import { Pagination } from 'swiper';
import { Container, Wrapper } from './style';
import 'swiper/css';
import 'swiper/css/pagination';
import Fade from 'react-reveal/Fade';
import GenericButton from '../../Generic/Button';
import { Link } from 'react-router-dom';

export const Opener = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <Container>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className='mySwiper'
      >
        <Wrapper>
          <Fade top cascade>
            <Wrapper.Header>Admission is open</Wrapper.Header>
          </Fade>
          <Fade left cascade>
            <Wrapper.Title>
              Admission for grades 1 to 11 is open at CIC school
            </Wrapper.Title>
          </Fade>
          <Link to='/apply'>
            <GenericButton>Apply now</GenericButton>
          </Link>
        </Wrapper>
        <Wrapper>
          <Fade top cascade>
            <Wrapper.Header>Admission is open</Wrapper.Header>
          </Fade>
          <Fade left cascade>
            <Wrapper.Title>
              Admission for grades 1 to 11 is open at CIC school
            </Wrapper.Title>
          </Fade>
        </Wrapper>
        <Wrapper>
          <Fade top cascade>
            <Wrapper.Header>Admission is open</Wrapper.Header>
          </Fade>
          <Fade left cascade>
            <Wrapper.Title>
              Admission for grades 1 to 11 is open at CIC school
            </Wrapper.Title>
          </Fade>
        </Wrapper>
      </Swiper>
    </Container>
  );
};

export default Opener;
