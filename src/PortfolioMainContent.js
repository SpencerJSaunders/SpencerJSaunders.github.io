import AboutSection from "./AboutSection";
import EmploymentHistory from "./EmploymentHistory";
import SkillsSection from "./SkillsSection";
import ProjectsSection from './ProjectsSection';

const PortfolioMainContent = () => {
    return (
      <main>
        <EmploymentHistory />
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
      </main>
    );
  };
  
  export default PortfolioMainContent;
  