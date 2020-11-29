import React from 'react';
import propTypes from 'prop-types';
import styles from './Card.module.css';

const Card = (props) => {
  const { title, symbol, type, onClick } = props;
  return (
    <div className={styles.card} onClick={onClick}>
      <p className={styles.cardTitle}>{title}</p>
      <div className={styles.cardBody}>
        <p className={styles.symbol}>{symbol}</p>
        <p className={styles.type}>{type}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: propTypes.string.isRequired,
  symbol: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  onClick: propTypes.func,
};

export default Card;
