import styled from 'styled-components';

// imgs
import bg from '../../../assets/imgs/branch_bg.png';
import founder from '../../../assets/imgs/branch.png';

export const Container = styled.div`
  background-image: url(${bg});
  background-size: 100% 100%;
  width: 100%;
  padding: 130px 0px;
  @media (max-width: 1300px) {
    padding: 80px 0px;
  }
  @media (max-width: 900px) {
    padding: 60px 0px;
  }
`;

export const Wrapper = styled.div`
  padding: 0px 260px;
  display: flex;
  align-items: center;
  @media (max-width: 1550px) {
    padding: 0px 150px;
  }
  @media (max-width: 900px) {
    padding: 0px 80px;
  }
  @media (max-width: 600px) {
    padding: 0px 50px;
    flex-direction: column;
  }
  @media (max-width: 375px) {
    padding: 0px 28px;
  }
`;

Wrapper.Img = styled.div`
  background-image: url(${founder});
  background-size: 100% 100%;
  width: 45%;
  height: 650px;
  @media (max-width: 1400px) {
    height: 45vh;
  }
  @media (max-width: 600px) {
    width: 90%;
    height: 334.55px;
    margin-bottom: 43px;
  }
`;

export const Box = styled.div`
  margin-left: 115px;
  width: 40%;
  span {
    color: #c19f80;
  }
  @media (max-width: 1300px) {
    width: 50%;
    margin-left: 50px;
  }
  @media (max-width: 600px) {
    margin: 0;
    width: 90%;
  }
`;

Box.Text = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #000000;
  margin-bottom: 28px;
  @media (max-width: 1300px) {
    font-size: 26px;
    line-height: 34px;
  }
  @media (max-width: 900px) {
    font-size: 21px;
    line-height: 28px;
    margin-bottom: 20px;
  }
`;

Box.Item = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  margin: 8.5px 0px;
  @media (max-width: 1300px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: 1300px) {
    font-size: 15px;
    line-height: 19px;
    margin: 6px 0px;
  }
`;
