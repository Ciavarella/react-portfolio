import React from 'react';
import profile from '../../assets/ciavarella.jpg';
import styles from './Avatar.module.css';

export function Avatar() {
  return (
    <div className={styles.avatarContainer}>
      <img className={styles.avatar} src={profile} alt="profilephoto" />
    <p style={{color: 'white'}}>Victor Ciavarella</p>
    </div>
  );
}
