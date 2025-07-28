import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section $row $nopadding>
      <LeftSection>
        <SectionTitle $main $center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Here, you’ll Know about me, a showcase of my skills, projects, and a brief overview of me as a developer.
          Feel free to explore and get an insight into the work I’ve done and what I bring to the table.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
