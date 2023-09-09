// Header.js
import React from 'react';
import { Slide } from 'react-awesome-reveal';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  background-color: #fff;
  text-align: left;
  vertical-align: middle;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #000;
  margin-bottom: 0rem;
`;

const Title = styled.h1`
  padding-left: 1rem;
  vertical-align: middle;
`;

const HeaderElement = styled.h3`
  margin: 0;
  font-weight: normal;
  vertical-align: middle;
  padding-left: 2rem;
  &:hover {
    opacity: 0.5;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Slide direction="down" triggerOnce>
        <Title>Austin Liu</Title>
        <HeaderElement href='#footer'>Contact Me</HeaderElement>
      </Slide>
    </HeaderWrapper>
  );
};

export default Header;
