import React from 'react';
import { Wrap } from './style';

const GenericButton = ({
  width,
  height,
  background,
  size,
  color,
  border,
  radius,
  padding,
  margin,
  shadow,
  hide,
  onClick,
  isIcon,
  children,
}) => {
  return (
    <Wrap
      width={width}
      height={height}
      background={background}
      size={size}
      border={border}
      color={color}
      radius={radius}
      padding={padding}
      margin={margin}
      shadow={shadow}
      hide={hide}
      onClick={onClick}
    >
      {isIcon ? children : <Wrap.Icons />}
      {children}
    </Wrap>
  );
};

export default GenericButton;
