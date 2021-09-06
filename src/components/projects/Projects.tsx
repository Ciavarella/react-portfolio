import styles from './Projects.module.css';
import Card from '../card/Card';
import githubcat from '../../assets/GitHub-Mark-120px-plus.png';
import tretton37pic from '../../assets/tretton37.png';
import linkedInPic from '../../assets/linkedinlogo.png';

export interface CardItem {
  logo: string;
  link: string;
  name: string;
}

const github: CardItem = {
  logo: githubcat,
  link: 'https://github.com/Ciavarella',
  name: 'GitHub'
};

const linkedIn: CardItem = {
  logo: linkedInPic,
  link: 'https://www.linkedin.com/in/victor-ciavarella-7a4162142/',
  name: 'LinkedIn'
};

const tretton37: CardItem = {
  logo: tretton37pic,
  link: 'https://tretton37.com/',
  name: 'Tretton37'
};

const Projects = (): JSX.Element => {
  return (
    <div className={styles.projectsContainer}>
      <Card item={github} />
      <Card item={tretton37} />
      <Card item={linkedIn} />
    </div>
  )
}

export default Projects;
