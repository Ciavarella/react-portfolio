import styles from './Assignments.module.css';
import Gt from '../gt/Gt';
import Mpm from '../mpm/Mpm';

const Assignments = (): JSX.Element => {
  return (
    <div className={styles.assignmentContainer}>
      <Mpm />
      <Gt />
    </div>
  )
}

export default Assignments;
