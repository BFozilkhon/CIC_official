import styled from 'styled-components';
import { ReactComponent as icon } from '../../assets/icons/404.svg';
import { ReactComponent as arrow } from '../../assets/icons/arrow.svg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    padding: 0px 27px;
  }
`;

export const Icon = styled(icon)`
  width: 750px;
  height: 500px;
  border-radius: 0px;
  background: #ffffff;
  @media (max-width: 900px) {
    width: 80%;
    height: auto;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    margin-bottom: 40px;
  }
`;
export const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 65px;
  text-align: center;
  color: #323a56;
  span {
    color: #ff9d42;
  }
  @media (max-width: 900px) {
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
  }
  @media (max-width: 600px) {
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
  }
  @media (max-width: 375px) {
    font-weight: 700;
    font-size: 28px;
    line-height: 30px;
  }
`;
export const Text = styled.text`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 16px;
  color: #8a90a5;
  @media (max-width: 600px) {
    font-weight: 400;
    font-size: 18px;
    width: 80%;
  }
  @media (max-width: 375px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const Button = styled.button`
  width: 226px;
  height: 64px;
  background: #ff9d42;
  border-radius: 8px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
  margin-top: 20px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  :active {
    transform: scale(0.98);
  }
  @media (max-width: 600px) {
    width: 205px;
    height: 54px;
    font-size: 18px;
    line-height: 22px;
  }
`;

Button.Arrow = styled(arrow)`
  margin-left: 14px;
`;
