import React from "react";
import styles from "./experiences.module.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsBriefcaseFill } from "react-icons/bs";
import {
  FaGraduationCap,
  FaUniversity,
  FaHandHolding,
  FaHammer,
} from "react-icons/fa";
import { SiDatadog, SiMongodb } from "react-icons/si";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 50,
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Experiences() {
  const classes = useStyles();
  return (
    <div>
      {/* <h1 className={styles.name}> Timeline </h1> */}
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2021 - Dec 2021"
          iconStyle={{ background: "#7846A5", color: "#fff" }}
          icon={<SiDatadog />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineering Intern
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
          iconStyle={{ background: "#2C9FEF", color: "#fff" }}
          icon={<BsBriefcaseFill />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineering Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Cockroach Labs</h4>
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
          className="vertical-timeline-element--work"
          date="May 2020  - Sept 2020"
          iconStyle={{ background: "orange", color: "#fff" }}
          icon={<FaHandHolding />}
        >
          <h3 className="vertical-timeline-element-title">Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Radha Madhav Society
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Sept 2017 - Dec 2022"
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
          date="April 2017"
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
