import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import BoozAllenHamiltonLogo from "./imgs/booz.jpg";
import LibertyITSolutionsLogo from "./imgs/liberty.jpg";
import NerveRenewLogo from './imgs/NerveRenew.jpg';
import WiFiRangerLogo from './imgs/wifiranger.jpg';
import BoiseStateLogo from './imgs/bronco.png';

const EmploymentHistory = () => {
  return (
    <div className="employment-history">
      <h2 className='section-title'>Work and Education History</h2>
      <div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="April 2022 - present"
            icon={
              <img src={BoozAllenHamiltonLogo} alt="Booz Allen Hamilton logo" />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Booz Allen Hamilton
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Software Developer
            </h4>
            <p>Worked on a large-scale healthcare application</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2021 - April 2022"
            icon={
              <img
                src={LibertyITSolutionsLogo}
                alt="Liberty IT Solutions logo"
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Liberty IT Solutions, a Booz Allen Company
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Software Developer
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="November 2019 - July 2021"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<img src={NerveRenewLogo} alt="Nerve Renew logo" />}
          >
            <h3 className="vertical-timeline-element-title">Nerve Renew</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Front End Developer
            </h4>
            <p>Worked on building web funnels</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January 2019 - April 2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<img src={WiFiRangerLogo} alt='WiFi Ranger logo' />}
          >
            <h3 className="vertical-timeline-element-title">WiFi Ranger</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Software Developer - Intern
            </h4>
            <p>Worked on voice recognition software</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August 2015 - December 2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<img src={BoiseStateLogo} alt='Boise State University logo' />}
          >
            <h3 className="vertical-timeline-element-title">Boise State University</h3>
            <h4 className="vertical-timeline-element-subtitle">
              BA - Computer Science
            </h4>
            <p>Notable coursework: </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default EmploymentHistory;
