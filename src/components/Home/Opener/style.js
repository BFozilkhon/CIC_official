import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

// imgs
import img from '../../../assets/imgs/opener.png';
import img_mobile from '../../../assets/imgs/mobile_opener.png';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  .mySwiper {
    position: absolute;
  }
  .swiper-pagination-bullet {
    width: 24px;
    height: 24px;
    border-radius: 0px;
    background: rgba(255, 255, 255, 0.52);
    color: #000000;
    margin: 10px 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    bottom: 40%;
    width: auto;
    right: 100px;
    left: auto;
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.46);
    border-radius: 5px;
    padding: 8px 6px;
    gap: 8px;
  }
  @media (max-width: 600px) {
    .swiper-horizontal > .swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal,
    .swiper-pagination-custom,
    .swiper-pagination-fraction {
      bottom: 10px;
      width: auto;
      right: 33%;
      left: auto;
      display: flex;
      flex-direction: row;
    }
  }
`;

export const Wrapper = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
  background-image: url(${img});
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    padding: 0px 50px;
    background-image: url(${img_mobile});
  }
`;

Wrapper.Header = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 70px;
  line-height: 85px;
  text-align: center;
  color: #ffffff;
  width: 99%;
  text-align: center;
  @media (max-width: 600px) {
    font-style: normal;
    font-weight: 500;
    font-size: 60px;
    line-height: 73px;
    text-align: center;
    color: #ffffff;
  }
`;

Wrapper.Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  margin: 35px 0px;
  text-align: center;
  @media (max-width: 600px) {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
  }
`;
