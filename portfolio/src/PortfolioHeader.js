import './styles/header.scss';

const PortfolioHeader = () => {
  return (
    <header>
      <div className="portfolio-banner">
        <div className="portfolio-banner__text-container">
          <div>
            <h2 className="portfolio-banner__text-container__name">
              Spencer Saunders
            </h2>
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
