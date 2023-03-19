import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faGit, faJs} from "@fortawesome/free-brands-svg-icons";
import { faPeopleGroup, faMicroscope, faUniversalAccess } from "@fortawesome/free-solid-svg-icons";

const SkillsSection = () => {
  return (
    <section className="section skills-section-container">
      <div className="container">
        <h2 className="section__heading">Skills</h2>
        <p className="section__subheading">
          Skills including programming languages, libraries, tools, and development
          environments
        </p>
        <div className="skills-list">
          <div className="skills-list__skill">
            <FontAwesomeIcon size='7x' icon={faReact}/>
            <h4>React</h4>
            <p>3+ years of experience with React including React libraries like React Router, React Redux, and Mobx React Form.</p>
          </div>
          <div className="skills-list__skill">
          <FontAwesomeIcon size='7x' icon={faGit}/>
            <h4>Version Control</h4>
            <p>5+ years of experience working with git version control. Experience using GitHub, GitLab, and BitBucket for verion control.</p>
          </div>
          <div className="skills-list__skill">
          <FontAwesomeIcon size='7x' icon={faJs}/>
            <h4>Programming Languages</h4>
            <p>5+ years of experience with HTML, CSS, Sass, and JavaScript. Also have experience with TypeScript. Some exposure to Python and Java.</p>
          </div>
        </div>
        <div className="skills-list" style={{marginTop: '3rem'}}>
          <div className="skills-list__skill">
          <FontAwesomeIcon size='7x' icon={faPeopleGroup}/>
            <h4>Agile</h4>
            <p>4+ years of experience working in Agile environments with developers, stakeholders, business analysts, and designers.</p>
          </div>
          <div className="skills-list__skill">
           <FontAwesomeIcon size='7x' icon={faUniversalAccess}/>
            <h4>Accessibility</h4>
            <p>Experience using Axe, Jaws, and Semantic HTML to create accessible 508-compliant websites.</p>
          </div>
          <div className="skills-list__skill">
            <FontAwesomeIcon size='7x' icon={faMicroscope} />
            <h4>Unit Testing</h4>
            <p>Experience writing unit tests with Jest and React Testing Library to reach full code coverage.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
