// content.js
import React from 'react';
import styled from 'styled-components';
import { Slide, Zoom, Fade } from "react-awesome-reveal";

const ContentWrapper = styled.div`
  position: relative;
  background: #F2F2F4;
  height: 90vh;
`;

const BigText = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 3rem;
  font-weight: bold;
  color: #000;
`;

const Content = () => {
  return (
    <ContentWrapper>
      <BigText>Content</BigText>
    </ContentWrapper>
  );
};

export default Content;
