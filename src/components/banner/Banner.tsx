// import React from 'react';
import { Avatar } from '../avatar/Avatar';
import { Quotes } from '../quotes/Quotes';
import Projects from '../projects/Projects';
import styles from './Banner.module.css';

const text1 = "Some text here bla lorem ipsum and some other stuff";
const text2 = "SSome other text where this is text2. Not sure what to write here really but now im just writingSome other text where this is text2. Not sure what to write here really but now im just writingSome other text where this is text2. Not sure what to write here really but now im just writingSome other text where this is text2. Not sure what to write";

const Banner = () => {
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
      </div>
      <Projects />
    </div>
  );
};

export default Banner;
