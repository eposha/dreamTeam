import React from 'react';
import DollarIcon from '../../images/dollar.svg';
import { capitalize } from '../../utils/capitalize';

import styles from './OrderPopup.module.scss';

const OrderPopup = ({ orderData, setOrderData }) => {
  //   const { name, category, price } = orderData;
  return (
    <div className={styles.orderPopup} onClick={(e) => e.preventDefault()}>
      <div className={styles.category}>{'category'}</div>
      <div className={styles.productName}>{capitalize('name')}</div>
      <div className={styles.price}>
        <img src={DollarIcon} alt='dollar' className={styles.dollarIcon} />
        <div className={styles.priceNumber}>4.99</div>
      </div>
    </div>
  );
};

export default OrderPopup;
