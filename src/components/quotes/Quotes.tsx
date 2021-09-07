import React from 'react';
import styles from './Quotes.module.css';

interface QuotesProp {
  text: string;
  css?: string;
};

export function Quotes (props: QuotesProp): JSX.Element {
  return (
    <div className={`${styles.quotesContainer} ${props.css ? props.css : '' }`}>
      <h3>{props.text}</h3>
    </div>
  )
} 
