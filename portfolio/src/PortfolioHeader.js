import "./styles/header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const PortfolioHeader = () => {
  return (
    <header>
      <div className="portfolio-banner">
        <div className="portfolio-banner__socials">
          <a href="https://github.com">
            <FontAwesomeIcon size='4x' icon={faGithub} />
          </a>
          <a href="https:/linkedin.com">
            <FontAwesomeIcon size='4x' icon={faLinkedin} />
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
