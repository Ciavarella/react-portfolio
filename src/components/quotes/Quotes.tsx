import React from 'react';
import styles from './Quotes.module.css';

interface QuotesProp {
  text: String
};

export function Quotes (props: QuotesProp): JSX.Element {
  return (
    <div className={styles.quotesContainer}>
      <h3>{props.text}</h3>
    </div>
  )
} 
