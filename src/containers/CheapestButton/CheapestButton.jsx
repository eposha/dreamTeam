import React from 'react';

import styles from './CheapestButton.module.scss';

const CheapestButton = ({ setCheapestProduct }) => {
  return (
    <button className={styles.cheapestBtn} onClick={setCheapestProduct}>
      Buy cheapest
    </button>
  );
};

export default CheapestButton;
