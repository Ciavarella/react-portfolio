// import React from 'react';
import { Avatar } from '../avatar/Avatar';
import { Quotes } from '../quotes/Quotes';
import Projects from '../projects/Projects';
import styles from './Banner.module.css';
import { text1, text2, text3 } from './texts';

const Banner = (): JSX.Element => {
  return (
    <div className={styles.banner}>
      <div className={styles.stars} />
      <div className={styles.stars2} />
      <div className={styles.stars3} />
      <div className={styles.wrapper}>
        <div className={styles.slideLeft}>
          <Quotes text={text1} />
        </div>
        <Avatar />
        <div className={styles.right}>
          <Quotes text={text2} />
        </div>
        <div className={styles.bottom}>
          <Quotes css='bottomDiv' text={text3} />
        </div>
      </div>
      <Projects />
    </div>
  );
};

export default Banner;
