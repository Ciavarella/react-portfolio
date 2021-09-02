import React from 'react';
import { Avatar } from '../avatar/Avatar';
import styles from './Banner.module.css';

export function Banner() {
  return (
    <div className={styles.banner}>
      <Avatar />
    </div>
  );
}
