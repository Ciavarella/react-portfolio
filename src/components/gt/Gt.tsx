import styles from './Gt.module.css';
import gt from '../../assets/gt.png';

const Gt = (): JSX.Element => {
  return (
    <div className={styles.gtContainer}>
      <img src={gt} className={styles.img} alt="Greater Than logo" />
      <h4>Greater Than</h4>
      <p>Fullstack developer mainly working with frontend using VueJS and Vuex.</p>
    </div>
  )
}

export default Gt;
