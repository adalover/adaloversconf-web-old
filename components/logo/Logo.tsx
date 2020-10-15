import React, { FC } from 'react';
import styled from '@emotion/styled';

const Img = styled.img<any>`
  max-width: 30vw;
`;

interface LogoProps {
  urlImg: string
}

export const Logo: FC<LogoProps> = ({ urlImg }) => {
  return <Img src={urlImg}/>;
};
