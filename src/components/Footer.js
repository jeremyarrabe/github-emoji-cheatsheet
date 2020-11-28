import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <p>
        Made with 💚 by <a href="https://github.com/jeremeheh">Jeremy Arrabe</a>
      </p>
      <p>
        Are we missing something?
        <a
          className={styles.contribute}
          href="https://github.com/jeremeheh/github-emoji-cheatsheet"
        >
          Contrubute Here
        </a>
      </p>
    </div>
  );
};

export default Footer;
