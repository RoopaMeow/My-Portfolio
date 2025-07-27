import React from "react";

import styles from "./Hero.module.css";
import heroImage from "../../assets/hero/heroImage.png";


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Roopa</h1>
        <p className={styles.description}>
          I'm a Computer Science Engineering student with a strong foundation in software development, passionate about innovation, learning, and building real-world solutions.
        </p>
        <a
        href="/ROOPA.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.contactBtn} // or any button style
        >
        View Resume
        </a>
      </div>
      <img
        src={heroImage}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};