import React from 'react';
import OrderForm from '../OrderForm/OrderForm';
import DollarIcon from '../../images/dollar.svg';
import { capitalize } from '../../utils/capitalize';
import CloseIcon from '../../images/close.svg';

import styles from './OrderPopup.module.scss';

const OrderPopup = ({ orderData, setOrderData }) => {
  const { name, category, price } = orderData;
  return (
    <div className={styles.orderPopup}>
      <div className={styles.category}>{category}</div>
      <div className={styles.productName}>{capitalize(name)}</div>
      <div className={styles.price}>
        <img src={DollarIcon} alt='dollar' className={styles.dollarIcon} />
        <div className={styles.priceNumber}>{price}</div>
      </div>
      <OrderForm />
      <button className={styles.closeForm} onClick={() => setOrderData(null)}>
        <img src={CloseIcon} alt='closeIcon' className={styles.CloseIcon} />
      </button>
    </div>
  );
};

export default OrderPopup;
