import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";


const skillImages = import.meta.glob("../../assets/skills/*", {
  eager: true,
  import: "default",
});

function getImageUrl(imagePath) {
  return skillImages[`../../assets/${imagePath}`];
}

const aboutImages = import.meta.glob("../../assets/about/*", {
  eager: true,
  import: "default",
});

function getAboutImage(path) {
  return aboutImages[`../../assets/about/${path}`];
}


export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        </div>
        <section className={styles.container} id="about">
        <div className={styles.content}></div>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
             <img src={getAboutImage("cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer/UI Designer</h3>
              <p>
                I specialize in building responsive web interfaces using modern technologies like React, Figma, and CSS. I aim to create intuitive and seamless user experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
             <img src={getAboutImage("serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Experienced in designing RESTful APIs, managing databases, and developing secure, high-performance backend services.
            </p>

            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getAboutImage("iconimage.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Programming Languages</h3>
              <p>
                Proficient in multiple programming languages including Java, Python, and JavaScript, used for both backend development and problem-solving.
            </p>

            </div>
          </li>
        </ul>
    </section>
    </section>
  );
};