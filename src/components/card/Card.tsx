import styles from './Card.module.css';
import { CardItem } from '../projects/Projects';

interface CardProps {
  item: CardItem
}

const Card = (data: CardProps): JSX.Element  => {
  return (
    <div className={styles.cardContainer} onClick={() => window.open(data.item.link)}>
        <img className={styles.img} alt="logo of socials" src={data.item.logo} />
        <p className={styles.imgText}>{data.item.name}</p>
    </div>
  )
};

export default Card;
