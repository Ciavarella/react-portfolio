import styles from './Projects.module.css';
import Card from '../card/Card';

const Projects = (): JSX.Element => {
  return (
    <div className={styles.projectsContainer}>
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Projects;
