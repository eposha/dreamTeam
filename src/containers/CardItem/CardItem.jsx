import React from 'react';
import { capitalize } from '../../utils/capitalize';
import DollarIcon from '../../images/dollar.svg';

import styles from './CardItem.module.scss';

const CardItem = ({ cardData }) => {
  const { name, category, price } = cardData;
  return (
    <div className={styles.cardItem}>
      <div className={styles.category}>{category}</div>
      <div className={styles.productName}>{capitalize(name)}</div>

      <div className={styles.orderWrap}>
        <div className={styles.price}>
          <img src={DollarIcon} alt='dollar' className={styles.dollarIcon} />
          <div className={styles.priceNumber}>{price}</div>
        </div>

        <button className={styles.buyBtn}>Buy</button>
      </div>
    </div>
  );
};

export default CardItem;
