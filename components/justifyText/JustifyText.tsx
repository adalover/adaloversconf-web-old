import React, { FC } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 70vw;
  text-align: justify;
  font-size: 20px;
  color: #FFF;
  margin-top: 3rem;

  @media(max-width: 1024px) {
    font-size: 18px;
  }
  @media(max-width: 540px) {
    font-size: 16px;
  }
  @media(max-width: 280px) {
    font-size: 12px;
  }
`;

export const JustifyText: FC = ({ children }) => {
  return <Container>{children}</Container>;
};
