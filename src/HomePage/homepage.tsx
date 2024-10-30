/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styles from "./homepage.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail, AiOutlineFilePdf } from "react-icons/ai";

function Homepage() {
  return (
    <div className={styles.homeScreen}>
      <h1 className={styles.name}> Nandu Pokhrel</h1>
      <h2 className={styles.info}>Software Engineer</h2>
      <div className={styles.icon}>
        <a href="https://github.com/nanduu04">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
          <FaLinkedin style={{ paddingLeft: "1.5vh" }} />
        </a>
        <a href="mailto:nandupokhrel@gmail.com" target="_blank">
          <AiOutlineMail style={{ paddingLeft: "1.5vh" }} />
        </a>
      </div>
      <h2 className={styles.info}> - Currently exploring new area of interests.</h2>
    </div>
  );
}

export default Homepage;
