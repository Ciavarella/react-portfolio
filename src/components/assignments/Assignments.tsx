import styles from './Assignments.module.css';
import Item from '../item/Item';
import { Mpm, Tretton37, Gt } from './AssignmentObjects';


const Assignments = (): JSX.Element => {
  return (
    <div className={styles.assignmentContainer}>
      <Item item={Mpm} />
      <Item item={Tretton37} />
      <Item item={Gt} />
    </div>
  )
}

export default Assignments;
