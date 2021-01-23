import React, { useState, useCallback } from 'react';
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

  const setCheapestProduct = useCallback(() => {
    const reducer = (acc, productData) => {
      if (acc.price > productData.price) {
        return productData;
      } else {
        return acc;
      }
    };
    const cheapestProduct = data.reduce(reducer, data[0]);
    setOrderData(cheapestProduct);
  }, [data]);

  return (
    <div className={styles.mainContent}>
      {isCards ? (
        <>
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
          <CheapestButton setCheapestProduct={setCheapestProduct} />
        </>
      ) : (
        <div className={styles.emptyCards}>Current products not found</div>
      )}

      {orderData ? (
        <div className={styles.orderWrap}>
          <AutoClose
            handleClose={setOrderData}
            styles={autoCloseStyle}
            isScroll={Boolean(orderData)}
            render={() => (
              <OrderPopup orderData={orderData} setOrderData={setOrderData} />
            )}
          />
        </div>
      ) : null}
    </div>
  );
};

export default withData(MainContent);
