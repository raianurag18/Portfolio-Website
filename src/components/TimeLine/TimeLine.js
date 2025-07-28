import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';

const Timeline = ({ handleClick: handleProceedClick }) => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2rem' }}>
        <SectionText>
        I'm Anurag Rai, a web developer with a strong foundation in full-stack development and data structures & algorithms. I’m currently pursuing my B.Tech in ECE from BIT Mesra, and over time, I've transitioned into building robust and scalable web applications.

        I’ve worked on multiple real-world projects, including a College Placement Tracker platform and a Law Firm Application for ARS & AGS Legal and IP Associates, which is set to be deployed soon. These experiences have helped me sharpen my skills in frontend/backend development, API integration, and collaborative problem-solving.

        I’m proficient in technologies like React.js, Node.js, Express.js, MongoDB, and Next.js, and I actively use Git and GitHub for version control, enabling me to work efficiently in team-based development environments.

        I’m always looking forward to opportunities where I can contribute to impactful, real-world products and continue growing as a developer through hands-on experience.
        </SectionText>
        <Button onClick={handleProceedClick}>Proceed</Button>
      </div>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
