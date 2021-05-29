/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styles from "./homepage.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail, AiOutlineFilePdf } from "react-icons/ai";

function Homepage() {
  return (
    <div className={styles.homeScreen}>
      <h1 className={styles.name}> Nandu Pokhrel</h1>
      <h2 className={styles.info}>Programmer & Entrepreneur</h2>
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
        <a
          href="https://drive.google.com/file/d/1n0IpC3zL8YzI5VgPvTJhlqW0RMiTQYVM/view?usp=sharing"
          target="_blank"
        >
          <AiOutlineFilePdf style={{ paddingLeft: "1.5vh" }} />
        </a>
      </div>
    </div>
  );
}

export default Homepage;
