import React, { useEffect, useState } from 'react';
import { autoCloseStyle } from './MainContentGateway';
import CardItem from '../containers/CardItem/CardItem';
import CheapestButton from '../containers/CheapestButton/CheapestButton';
import OrderPopup from '../components/OrderPopup/OrderPopup';
import AutoClose from '../utils/AutoClose';
import withData from '../HOC/withData';

import styles from './MainContent.module.scss';

const MainContent = ({ data }) => {
  const isCards = data.length;
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    if (orderData) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [orderData]);

  return (
    <div className={styles.mainContent}>
      {isCards ? (
        <ul className={styles.cardsList}>
          {data.map((cardData, index) => (
            <li
              className={styles.cardItem}
              key={cardData.name + index}
              onClick={() => setOrderData(cardData)}>
              <CardItem cardData={cardData} />
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.emptyCards}>Current products not found</div>
      )}
      {isCards ? <CheapestButton /> : null}
      {orderData ? (
        <div className={styles.stickyWrap}>
          <AutoClose handleClose={setOrderData} styles={autoCloseStyle}>
            <OrderPopup orderData={orderData} setOrderData={setOrderData} />
          </AutoClose>
        </div>
      ) : null}
    </div>
  );
};

export default withData(MainContent);
