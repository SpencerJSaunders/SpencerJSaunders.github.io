import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
 faEnvelope
} from "@fortawesome/free-solid-svg-icons";

const PortfolioFooter = () => {
  return (
    <footer className="section footer">
      <div className="container">
        <h2 className="section__heading">Contact Me</h2>
        <div className="footer__contact-icons">
          <FontAwesomeIcon size='4x' icon={faEnvelope}/>
          <FontAwesomeIcon size='4x' icon={faLinkedin}/>
        </div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
