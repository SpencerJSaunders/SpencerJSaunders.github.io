import { slide as Menu } from "react-burger-menu";

const PortfolioHeader = () => {
  return (
    <header>
      {/* <Menu>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
      </Menu> */}
      <div className="portfolio-banner">
        <div className="portfolio-banner__text-container">
          <div>
            <p className="portfolio-banner__text-container__name">
              Spencer Saunders
            </p>
            <p className="portfolio-banner__text-container__occupation">
              Front End Developer
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PortfolioHeader;
