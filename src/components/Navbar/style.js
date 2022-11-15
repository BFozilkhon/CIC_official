import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// imgs
import { ReactComponent as logo } from '../../assets/icons/logo.svg';
import { ReactComponent as phone } from '../../assets/icons/phone.svg';
import { ReactComponent as arrow } from '../../assets/icons/arrow-language.svg';
import { ReactComponent as menu } from '../../assets/icons/menu.svg';
import { ReactComponent as exit } from '../../assets/icons/exit.svg';
import { Dropdown } from 'antd';

export const Container = styled.div`
  padding: 0px 260px;
  background: #000000;
  width: 100%;
  height: 132px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1550px) {
    padding: 0px 150px;
    height: 100px;
  }
  @media (max-width: 900px) {
    padding: 0px 80px;
  }
  @media (max-width: 600px) {
    padding: 0px 50px;
  }
  @media (max-width: 375px) {
    padding: 0px 28px;
  }
  position: fixed;
  top: 0;
  z-index: 999;
`;

Container.Logo = styled(logo)`
  @media (max-width: 1350px) {
    width: 180px;
  }
`;

Container.Menu = styled(menu)`
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    display: none;
  }
`;

NavItems.Item = styled(NavLink)`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;
  margin: 0px 34px;
  :hover {
    color: #c19f80;
  }
  @media (max-width: 1730px) {
    margin: 0px 15px;
  }
  @media (max-width: 1350px) {
    font-size: 18px;
    margin: 0px 10px;
  }
  @media (max-width: 1130px) {
    margin: 0px 12px;
  }
`;

export const WrapPhone = styled.a`
  display: flex;
  align-items: center;
  gap: 24px;
  :hover .number {
    color: #c19f80;
  }
  @media (max-width: 1350px) {
    gap: 12px;
  }
  @media (max-width: 1130px) {
    display: none;
  }
`;

WrapPhone.Icon = styled(phone)`
  @media (max-width: 1350px) {
    width: 40px;
    height: 28px;
  }
`;

export const Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 25px;
  color: #ffffff;
  @media (max-width: 1350px) {
    font-size: 18px;
  }
`;

export const DropdownClone = styled(Dropdown)`
  /* @media (max-width: 600px) {
    display: none;
  } */
`;

// mobile

export const BoxMobile = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: ${({ menu }) => (menu ? '-100%' : '0px')};
  background: #c19f80;
  padding: 33px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s;
`;

BoxMobile.Exit = styled(exit)`
  position: absolute;
  top: 28px;
  right: 33px;
  z-index: 999;
`;

BoxMobile.Item = styled(NavLink)`
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  color: #ffffff;
  display: block;
  margin: 25px 0px;
`;

export const PhoneDiv = styled.div`
  display: flex;
  align-items: center;
`;

PhoneDiv.Icons = styled(phone)`
  path {
    fill: white;
  }
`;

PhoneDiv.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
`;

export const Arrow = styled(arrow)``;
