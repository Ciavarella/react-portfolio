import styles from './Item.module.css';

interface itemSpec {
  img: string;
  title: string;
  text: string;
  link: string;
}

interface ItemProps {
  item: itemSpec;
}

const Item = (data: ItemProps): JSX.Element => {
  return (
    <div className={styles.itemContainer} onClick={() => window.open(data.item.link)}>
      <img src={data.item.img} className={styles.img} alt={data.item.title} />
      <h4>{data.item.title}</h4>
      <p>{data.item.text}</p>
    </div>
  )
}

export default Item;