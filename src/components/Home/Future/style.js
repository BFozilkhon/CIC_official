import styled from 'styled-components';
// imgs
import img from '../../../assets/imgs/building.png';

export const Container = styled.div`
  background-image: url(${img});
  background-size: 100% 100%;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    padding: 0px 80px;
  }
  @media (max-width: 600px) {
    padding: 0px 50px;
  }
  @media (max-width: 375px) {
    padding: 0px 28px;
  }
`;

Container.Header = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  line-height: 85px;
  text-align: center;
  color: #ffffff;
  @media (max-width: 1200px) {
    font-size: 64px;
    line-height: 80px;
  }
  @media (max-width: 900px) {
    font-size: 55px;
    line-height: 68px;
  }
  @media (max-width: 600px) {
    font-size: 45px;
    line-height: 54px;
  }
`;

Container.Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
  margin: ${({ second }) =>
    second ? '15px 0px 70px 0px' : '10px 0px 15px 0px'};
  span {
    color: #c19f80;
  }
  @media (max-width: 900px) {
    font-size: 20px;
    line-height: 28px;
  }
  @media (max-width: 600px) {
    font-size: ${({ second }) => (second ? '20px' : '17px')};
    margin-bottom: ${({ second }) => second && '25px'};
  }
`;
