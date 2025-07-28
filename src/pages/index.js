import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  const handleLearnMoreClick = () => {
    window.location.href = '#about';
  };

  const handleProceedClick = () => {
    window.location.href = '#projects';
  };

  const handleTechClick = () => {
    window.location.href = '#tech';
  };

  return (
    <Layout>
      <Section $grid>
        <Hero handleClick={handleLearnMoreClick} />
        <BgAnimation />
      </Section>
      <Timeline handleClick={handleProceedClick} />
      <Projects handleClick={handleTechClick} />
      <Technologies />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
