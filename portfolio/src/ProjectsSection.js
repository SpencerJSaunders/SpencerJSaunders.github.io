const ProjectsSection = () => {
  return (
    <section className="section projects-section">
      <div className="container">
        <h2 className="section__heading">Projects</h2>
        <p className="section__subheading">Personal projects I've completed</p>
        <div className="projects-section__project-list">
          <div className="projects-section__project-list__item">
            <img src={require("./imgs/budget.jpg")} alt="Monthly Budgeting" />
            <h4>Monthly Budgeting Application</h4>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://spencerjsaunders.github.io"
              className="projects-section__button"
            >
              Source Code
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://spencerjsaunders.github.io"
              className="projects-section__button"
            >
              Website Link
            </a>
          </div>
          <div className="projects-section__project-list__item">
            <img src={require("./imgs/crypto.jpeg")} alt="Cryptocurrency" />
            <h4>Cryptocurrency Market Watch</h4>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://spencerjsaunders.github.io"
              className="projects-section__button"
            >
              Source Code
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://spencerjsaunders.github.io"
              className="projects-section__button"
            >
              Website Link
            </a>
          </div>
          <div className="projects-section__project-list__item">
            <img src={require("./imgs/spencer-portfolio.PNG")} alt="Cryptocurrency" />
            <h4>Personal Portfolio</h4>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://spencerjsaunders.github.io"
              className="projects-section__button"
            >
              Source Code
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://spencerjsaunders.github.io"
              className="projects-section__button"
            >
              Website Link
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
