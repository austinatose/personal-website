// content.js
import React from 'react';
import styled from 'styled-components';
import { Slide, Zoom, Fade } from "react-awesome-reveal";

const Background = styled.div`
  position: relative;
  background: #F2F2F4;
  height: 80vh;
`;

const ContentWrapper = styled.div`
  padding: 3rem 10rem 0rem 2rem;
`;

const SmallText = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 3rem;
  color: #000;
`;

const MediumText = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 3.5rem;
  color: #000;
`;

const BigText = styled.h1`
  margin: 0;
  font-size: 5rem;
  font-weight: bold;
  color: #000;
`;

const Content2 = () => {
  return (
    <Background>
      <ContentWrapper>
        <Slide direction="right">
          <BigText>I like</BigText>
          <MediumText>programming in</MediumText>
        </Slide>
        <Zoom>
          <br></br>
          <br></br>
          <SmallText>C++</SmallText>
          <SmallText>Javascript</SmallText>
          <SmallText>Python</SmallText>
        </Zoom>
      </ContentWrapper>
    </Background>
  );
};

export default Content2;
