// Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #000;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>Austin Liu</Title>
    </HeaderWrapper>
  );
};

export default Header;
