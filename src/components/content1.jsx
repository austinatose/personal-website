// content.js
import React from 'react';
import styled from 'styled-components';
import { Slide, Zoom, Fade } from "react-awesome-reveal";

const ContentWrapper = styled.div`
  position: relative;
  background: #F2F2F4;
  height: 101vh;
`;

const SmallText = styled.h3`
  margin: 0;
  padding: 10rem 10rem 0 10rem;
  font-size: 7rem;
  color: #000;
`;

const BigText = styled.h1`
  margin: 0;
  padding: 0 10rem 10rem 10rem;
  font-size: 10rem;
  font-weight: bold;
  color: #000;
`;

const Content1 = () => {
  return (
    <ContentWrapper>
      <Slide direction="up" triggerOnce>
        <SmallText>Hi, my name is</SmallText>
        <BigText>Austin 👋</BigText>
      </Slide>
    </ContentWrapper>
  );
};

export default Content1;
