import React from 'react';
import avatar from '../../assets/img_avatar.png';
import styles from './Avatar.module.css';

export function Avatar() {
  return (
    <div className={styles.avatarContainer}>
      <img className={styles.avatar} src={avatar} alt="profilephoto" />
    </div>
  );
}
