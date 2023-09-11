// content.js
import React from 'react';
import styled from 'styled-components';
import { Slide, Zoom, Fade } from "react-awesome-reveal";

const Background = styled.div`
  position: relative;
  background: #F2F2F4;
  height: 70vh;
`;

const ContentWrapper = styled.div`
  padding: 3rem 10rem 0rem 2rem;
`;

const SmallText = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 2rem;
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
  font-size: 4rem;
  font-weight: bold;
  color: #000;
`;

const Content3 = () => {
  return (
    <Background>
      <ContentWrapper>
        <Slide direction="right">
          <MediumText>Check out my projects</MediumText>
        </Slide>
        <Zoom>
          <br></br>
          <br></br>
          <SmallText>(Coming Soon)</SmallText>
        </Zoom>
      </ContentWrapper>
    </Background>
  );
};

export default Content3;
