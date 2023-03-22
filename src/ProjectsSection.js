const ProjectsSection = () => {
  return (
    <section className="section projects-section">
      <div className="container">
        <h2 className="section__heading">Projects</h2>
        <p className="section__subheading">A selection of completed coding projects</p>
        <div className="projects-section__project-list">
          <div className="projects-section__project-list__item">
            <img src={require("./imgs/budget.jpg")} alt="Monthly Budgeting" />
            <h4>Monthly Budgeting Application</h4>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/SpencerJSaunders/budgeting"
              className="projects-section__button"
            >
              Source Code
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://spencerjsaunders.github.io/budgeting"
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
              href="https://github.com/SpencerJSaunders/crypto-market-watch"
              className="projects-section__button"
            >
              Source Code
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://spencerjsaunders.github.io/crypto-market-watch"
              className="projects-section__button"
            >
              Website Link
            </a>
          </div>
          <div className="projects-section__project-list__item">
            <img src={require("./imgs/spencer-portfolio.png")} alt="Spencer Saunders Personal Portfolio" />
            <h4>Personal Portfolio</h4>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/SpencerJSaunders/SpencerJSaunders.github.io"
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
