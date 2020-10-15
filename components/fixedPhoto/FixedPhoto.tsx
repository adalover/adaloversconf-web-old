import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Logo } from '../logo/Logo';
import { JustifyText } from '../justifyText/JustifyText';

const Container = styled.div`
   min-height: 100vh;
   background-position: center;
   background-size: cover;
   text-shadow: 0 0 4px rgba(0,0,0,0.5);
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin: 2rem auto;
   color: white;
   font-family: roboto, sans-serif;
 `;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Date = styled.p`
  font-size: 35px;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 26px;
  }
  @media (max-width: 786px) {
    font-size: 20px;
  }
`;

const Img = styled.img<any>`
  max-width: 25vw;
  margin-top: 1rem;
`;

export const FixedPhoto: FC = () => {
  return <Container>
    <Title>
      <Logo urlImg="/logowhite-ADA-LOVERS-CONF.png"/>
      <Date>25 Septiembre 2021</Date>
    </Title>
    <JustifyText>
      <p>Lamentándolo muchísimo, hemos decidido no celebrar la edición del #AdaLoversConf 2020.</p>
      <p>En todo momento hemos querido que la conferencia sea un punto de encuentro y reunión en el que estemos
        cómodos, dando mucha importancia a la calidad del propio evento, de su contenido y a los pequeños
        detalles que les hagan pasar un día inolvidable.</p>
      <p>De igual modo, sabemos las dificultades que podemos llegar tener, tanto a nivel personal como de
        empresas. Por lo que tampoco queremos poner en compromiso a los sponsors que han o les hubiera gustado
        colaborar.</p>
      <p>Es por todo esto que consideramos que la situación actual perjudica que podamos organizar y disfrutar
        realmente del evento. Por lo tanto, esperamos que entiendan que todo esto nos ha llevado a tomar la
        decisión de no celebrar la edición del 2020.</p>
      <p>¡¡Pero esto es solo un hasta luego!! Aprovecharemos la situación para coger fuerzas para que el próximo
        2021 tod@s l@s Adalovers disfrutemos el doble.</p>
    </JustifyText>
    <a href="https://adalovedev.es"><Img src="/logo_horizontal_white.png"/></a>
  </Container>
};
