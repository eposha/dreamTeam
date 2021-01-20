import React from 'react';
import withData from '../HOC/withData';

import styles from './MainContent.module.scss';

const MainContent = ({ data }) => {
  return <div className={styles.mainContent}>test</div>;
};

export default withData(MainContent);
