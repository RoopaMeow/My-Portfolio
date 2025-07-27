import React from "react";
import styles from "./Contact.module.css";

// Imported images instead of react-icons
import phoneIcon from "../../assets/contact/phone.png";
import emailIcon from "../../assets/contact/emailIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";

export const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.title}>Contact</h2>
      <div className={styles.contactContainer}>
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.985108091755!2d77.95505501479412!3d9.584894093178843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00b5e8322f4895%3A0x88562b5073be4b7!2sVirudhunagar%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1617775555674!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={styles.map}
        ></iframe>

        <div className={styles.formCard}>
          <h3>Have a question ?</h3>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required />
            <button type="submit">Send</button>
          </form>
        </div>

        <div className={styles.infoCard}>
          <h3>Info</h3>
          <p><img src={phoneIcon} alt="Phone" /> +91 8903287800</p>
          <p onClick={() => window.open("mailto:roopaselvaraj17@gmail.com")}>
           <img src={emailIcon} alt="Email" /> Gmail/roopaselvaraj17@gmail.com
          </p>
          <p onClick={() => window.open("https://www.linkedin.com/in/roopa21", "_blank")}>
            <img src={linkedinIcon} alt="LinkedIn" /> Linkedin/roopa21
          </p>

          <p onClick={() => window.open("https://github.com/RoopaMeow", "_blank")}>
            <img src={githubIcon} alt="GitHub" /> Github.com/Roopa
          </p>
        </div>
      </div>
    </section>
  );
};
