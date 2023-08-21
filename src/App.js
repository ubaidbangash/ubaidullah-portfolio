import "./App.css";
import styled from "styled-components";
import ProfComponent from "./components/Banner/ProfComponent";
import Header from "./components/Banner/Header";
import Services from "./components/Service/Services";
import Projects from "./components/Projects/Projects";
import Clients from "./components/Clients/Clients";
import AboutUs from "./components/About/AboutUs";
import Skill from "./components/Skills/Skill";
import Experience from "./components/Experience/Experience";
import OurTestimonial from "./components/OurTestimonial/OurTestimonial";
import Content from "./components/Content/Content";

function App() {
  return (
    <div>
      <Banner>
        <Header />
        <ProfComponent />
      </Banner>
      <Services />
      <LightColor>
        <Projects />
      </LightColor>
      <Clients />
      <AboutUs />
      <Experience />
      <Skill />
      <OurTestimonial />
      <Content/>
    </div>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
  background: white;
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: white;
`;
