import PortfolioHeader from "./PortfolioHeader";
import PortfolioMainContent from "./PortfolioMainContent";
import PortfolioFooter from "./PortfolioFooter";
import "./styles/header.scss";

const App = () => {
  return (
    <>
      <PortfolioHeader />
      <PortfolioMainContent />
      <PortfolioFooter />
    </>
  );
};

export default App;
