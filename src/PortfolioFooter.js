import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
const PortfolioFooter = () => {
  return (
    <footer className="section footer">
      <div className="container">
        <h2 className="section__heading">Contact Me</h2>
        <div className="footer__contact-icons">
          <a href="mailto: spencersaunders1537@gmail.com">
            <FontAwesomeIcon size="4x" icon={faEnvelope} />
          </a>
          <a href="https://www.linkedin.com/in/spencer-saunders1537">
            <FontAwesomeIcon size="4x" icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
