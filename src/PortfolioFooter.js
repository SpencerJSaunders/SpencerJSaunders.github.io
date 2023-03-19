import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const PortfolioFooter = () => {
  return (
    <footer className="section footer">
      <div className="container">
        <h2 className="section__heading">Contact Me</h2>
        <div className="footer__contact-icons">
          <a href="https://www.google.com">
            <FontAwesomeIcon size="4x" icon={faEnvelope} />
          </a>
          <a href='https://www.google.com'>
            <FontAwesomeIcon size="4x" icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
