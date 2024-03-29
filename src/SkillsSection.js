import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faGit, faJs } from "@fortawesome/free-brands-svg-icons";
import {
  faPeopleGroup,
  faMicroscope,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";

const SkillsSection = () => {
  return (
    <section className="section skills-section">
      <div className="container">
        <h2 className="section__heading">Skills</h2>
        <p className="section__subheading">
          Skills including programming languages, libraries, tools, and
          development environments
        </p>
        <div className="skills-section__row">
          <div className="skills-section__item">
            <FontAwesomeIcon size="7x" icon={faReact} />
            <h4>React</h4>
            <p>
              3+ years of experience with React including React libraries like
              React Router, React Redux, and Mobx React Form. Experience with
              Next.js to create pre-rendered React applications with file-based
              routing.
            </p>
          </div>
          <div className="skills-section__item">
            <FontAwesomeIcon size="7x" icon={faGit} />
            <h4>Version Control</h4>
            <p>
              5+ years of experience working with git version control.
              Experience using GitHub, GitLab, and BitBucket for verion control.
            </p>
          </div>
          <div className="skills-section__item">
            <FontAwesomeIcon size="7x" icon={faJs} />
            <h4>Programming Languages</h4>
            <p>
              5+ years of experience with JavaScript, HTML, CSS, and Sass. 1+
              years of experience with TypeScript. Experience with Node.js and
              Express.js. Some exposure to Python, Java, and MySQL.
            </p>
          </div>
        </div>
        <div className="skills-section__row" style={{ marginTop: "3rem" }}>
          <div className="skills-section__item">
            <FontAwesomeIcon size="7x" icon={faPeopleGroup} />
            <h4>Agile</h4>
            <p>
              5+ years of experience excelling in Agile environments with
              developers, stakeholders, business analysts, and designers.
            </p>
          </div>
          <div className="skills-section__item">
            <FontAwesomeIcon size="7x" icon={faUniversalAccess} />
            <h4>Accessibility</h4>
            <p>
              Experience implementing Semantic HTML, ARIA labels, keyboard
              navigation to create accessible websites.
            </p>
          </div>
          <div className="skills-section__item">
            <FontAwesomeIcon size="7x" icon={faMicroscope} />
            <h4>Unit Testing</h4>
            <p>
              Experience writing unit tests with Jest and React Testing Library
              to improve code coverage
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
