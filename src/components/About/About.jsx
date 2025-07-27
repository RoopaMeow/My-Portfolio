import React from "react";

import styles from "./About.module.css";

import aboutImage from "../../assets/about/aboutImage.png";


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
        src={aboutImage}
        alt="Me sitting with a laptop"
        className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>UG Degree </h3>
              <p>
                B.E. Computer Science and Engineering graduate
                from Kamaraj College of Engineering and Technology (2021–
                2025), skilled in React, Java, and frontend development with
                real-world project experience.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Higher Secondary</h3>
              <p>
                Completed schooling at P.S.Chidambara Nadar Senior English School(CBSE),
                graduated in 2021 with 80% in Higher Secondary(Class 12) and 83% in Secondary Education (Class 10)
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};