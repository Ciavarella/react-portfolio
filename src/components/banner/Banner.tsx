// import React from 'react';
import { Avatar } from '../avatar/Avatar';
import { Quotes } from '../quotes/Quotes';
import Projects from '../projects/Projects';
import styles from './Banner.module.css';

const text1 = "Fullstack developer but currently working as a frontend developer.";
const text2 = "CSS, Git, HTML, JavaScript, Node.js, React, Redux, SCSS, TypeScript, VueJS, Vuex, Vim";
const text3 = "I'm a fullstack developer that focuses on building web apps. My strength is my passion and stubbornness and frontend development. I have also worked with backed to be able to understand and build complete web apps. I feel most comfortable with JavaScript and constantly want to improve my skills. I have always had an interest in tech. I grew up playing computer games and were fascinated by how things worked. My curiosity on how the web worked spiked my interest and i wanted to build things myself. Programming still amazes me, in't incredible what we can build and achieve with just code. I am a curious person and always strive to improve and learn as much as possible.During my spare time i enjoy walking with my dog in the woods. If i'm not found outside with my dog, then you would most likely find me in the kitchen trying out new recipes. I also like to build mechanical keyboards.";

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
        <div className={styles.bottom}>
          <Quotes text={text3} />
        </div>
      </div>
      <Projects />
    </div>
  );
};

export default Banner;
