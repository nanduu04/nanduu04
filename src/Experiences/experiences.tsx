import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaUniversity, FaHammer } from "react-icons/fa";
import { SiAsana, SiDatadog, SiMongodb, SiCockroachlabs } from "react-icons/si";
import { GiGorilla } from "react-icons/gi";

function Experiences() {
  return (
    <div>
      {/* <h1 className={styles.name}> Timeline </h1> */}
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=""
          iconStyle={{ background: "#FA6579", color: "#fff" }}
          icon={<SiAsana />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Asana</h4>
        </VerticalTimelineElement>
       
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2021 - Dec 2021"
          iconStyle={{ background: "#7846A5", color: "#fff" }}
          icon={<SiDatadog />}
        >
          <h3 className="vertical-timeline-element-title">
            Data Engineering Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Datadog</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2021 - 2021 Aug"
          iconStyle={{ background: "#439743", color: "#fff" }}
          icon={<SiMongodb />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineering Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">MongoDB</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2021  - Apr 2021"
          iconStyle={{ background: "#2D99FE", color: "#fff" }}
          icon={<SiCockroachlabs />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Cockroach Labs</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=""
          iconStyle={{ background: "#212121", color: "#fff" }}
          icon={<GiGorilla />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">A Thinking Ape</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2020  - Sept 2020"
          iconStyle={{ background: "#555555", color: "#fff" }}
          icon={<FaHammer />}
        >
          <h3 className="vertical-timeline-element-title">Co-Founder</h3>
          <h4 className="vertical-timeline-element-subtitle">BookTrades</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=""
          iconStyle={{ background: "#1373B7", color: "#fff" }}
          icon={<FaUniversity />}
        >
          <h3 className="vertical-timeline-element-subtitle">
            Ontario Tech University
          </h3>
          <p>Computer Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=""
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">
            The Woodlands Secondary School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            High School Diploma
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
export default Experiences;
