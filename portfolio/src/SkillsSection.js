import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faGit, faJs, faNpm } from "@fortawesome/free-brands-svg-icons";
import { faPeopleGroup, faTerminal } from "@fortawesome/free-solid-svg-icons";

const SkillsSection = () => {
  return (
    <section className="section skills-list">
      <div className="container">
        <h2 className="section__heading">Skills List</h2>
        <p className="section__subheading">
          Skills including programming languages, libraries, tools, and development
          environments
        </p>
        <div className="skills-list">
          <div className="skills-list__skill">
            <FontAwesomeIcon size='7x' icon={faReact}/>
            <p>React</p>
          </div>
          <div className="skills-list__skill">
          <FontAwesomeIcon size='7x' icon={faGit}/>
            <p>Version Control</p>
          </div>
          <div className="skills-list__skill">
          <FontAwesomeIcon size='7x' icon={faJs}/>
            <p>Programming languages</p>
          </div>
        </div>
        <div className="skills-list" style={{marginTop: '3rem'}}>
          <div className="skills-list__skill">
          <FontAwesomeIcon size='7x' icon={faPeopleGroup}/>
            <p>Agile</p>
          </div>
          <div className="skills-list__skill">
           <FontAwesomeIcon size='7x' icon={faTerminal}/>
            <p>Development Environments</p>
          </div>
          <div className="skills-list__skill">
            <FontAwesomeIcon size='7x' icon={faNpm} />
            <p>Libraries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
