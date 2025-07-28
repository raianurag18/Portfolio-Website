import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 8.67, text: 'College CGPA, Bit Mesra ECE'},
  { number: 89, text: 'CBSE 12th %', },
  { number: 92.2, text: 'CBSE 10th %', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Academic Record</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}${card.text.includes('%') ? '%' : ''}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
