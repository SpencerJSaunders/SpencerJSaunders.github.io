import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import BoozAllenHamiltonLogo from "./imgs/booz.jpg";
import LibertyITSolutionsLogo from "./imgs/liberty.jpg";
import NerveRenewLogo from "./imgs/NerveRenew.jpg";
import WiFiRangerLogo from "./imgs/wifiranger.jpg";
import BoiseStateLogo from "./imgs/bronco.png";
import "../src/styles/timeline.scss";

const EmploymentHistory = () => {
  return (
    <section className="section employment-history">
      <h2 className="section__heading">Work and Education History</h2>
      <p className="section__subheading">
        My past work experience and educational background
      </p>
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
            icon={<img src={WiFiRangerLogo} alt="WiFi Ranger logo" />}
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
            iconStyle={{ background: "#fff" }}
            icon={
              <img src={BoiseStateLogo} alt="Boise State University logo" />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Boise State University
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              BA - Computer Science
            </h4>
            <p>
              Notable coursework: Web Development, Databases, Data Structures,
              Algorithms, Programming Languages
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default EmploymentHistory;
