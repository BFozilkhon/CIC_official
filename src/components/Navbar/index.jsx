import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { data } from '../../utilits/navbar';
import {
  Container,
  NavItems,
  WrapPhone,
  Text,
  Arrow,
  DropdownClone,
  BoxMobile,
  PhoneDiv,
} from './style';
import { message, Space } from 'antd';

export const Navbar = () => {
  const [modal, setModal] = useState(true);

  const onClick = ({ key }) => {
    message.info(`Language change ${key}`);
  };

  const items = [
    {
      label: 'Eng',
      key: 'Eng',
    },
    {
      label: 'Uz',
      key: 'Uz',
    },
    {
      label: 'Rus',
      key: 'Rus',
    },
  ];
  return (
    <div>
      <Container>
        <Container.Logo />

        <NavItems>
          {data.map((value) => {
            return <NavItems.Item to={value.path}>{value.title}</NavItems.Item>;
          })}
        </NavItems>

        <WrapPhone href='tel: +998 71 200 0308'>
          <WrapPhone.Icon />
          <Text className='number'>+998 71 200 0308</Text>
        </WrapPhone>

        <DropdownClone menu={{ items, onClick }}>
          <Space>
            <Text>Uz</Text>
            <Arrow />
          </Space>
        </DropdownClone>

        <Container.Menu onClick={() => setModal(false)} />
        {/* mobile */}
        <BoxMobile menu={modal}>
          <BoxMobile.Exit onClick={() => setModal(true)} />
          <div>
            {data.map((value) => {
              return (
                <BoxMobile.Item to={value.path}>{value.title}</BoxMobile.Item>
              );
            })}
          </div>
          <PhoneDiv>
            <PhoneDiv.Icons />
            <PhoneDiv.Text>+998(71) 214-34-43</PhoneDiv.Text>
          </PhoneDiv>
        </BoxMobile>
      </Container>
      <Outlet />
    </div>
  );
};

export default Navbar;
