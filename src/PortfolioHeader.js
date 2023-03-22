import "./styles/header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const PortfolioHeader = () => {
  return (
    <header>
      <div className="portfolio-banner">
        <div className="portfolio-banner__contact-info-container">
          <a
            className="portfolio-banner__contact-icon"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/SpencerJSaunders"
          >
            <FontAwesomeIcon size="4x" icon={faGithub} />
          </a>
          <a
            className="portfolio-banner__contact-icon"
            href="mailto: spencersaunders1537@gmail.com"
          >
            <FontAwesomeIcon size="4x" icon={faEnvelope} />
          </a>
          <a
            className="portfolio-banner__contact-icon"
            rel="noreferrer"
            target="_blank"
            href="https://linkedin.com"
          >
            <FontAwesomeIcon size="4x" icon={faLinkedin} />
          </a>
          <a
            className="portfolio-banner__download-resume-link"
            href={require("./resume.pdf")}
            download="Spencer Saunders Resume"
          >
            Download my Resume
          </a>
        </div>
        <div className="portfolio-banner__text-container">
          <div>
            <h2 className="fade-in portfolio-banner__text-container__name">
              Spencer Saunders
            </h2>
            <p className="fade-in portfolio-banner__text-container__occupation">
              Front End Developer
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PortfolioHeader;
