import styled from 'styled-components';
// imgs
import { ReactComponent as apply } from '../../../assets/icons/apply.svg';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: ${({ width }) => (width ? width : '190px')};
  height: ${({ height }) => (height ? height : '60px')};
  background: ${({ background }) => (background ? background : '#C19F80')};
  font-size: ${({ size }) => (size ? size : '18px')};
  color: ${({ color }) => (color ? color : '#fff')};
  border-radius: ${({ radius }) => (radius ? radius : '5px')};
  padding: ${({ padding }) => (padding ? padding : '19px 35px')};
  border: ${({ border }) => (border ? border : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
  display: ${({ hide }) => hide && 'none'};
  cursor: pointer;
  user-select: none;
  :active {
    transform: scale(0.98);
  }
`;

Wrap.Icons = styled(apply)`
  margin-right: 7.5px;
`;
