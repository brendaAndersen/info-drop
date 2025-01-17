import styles from './Avatar.module.css'
import React from 'react';

export function Avatar({ src }) {
    
  return (
    <img
      className={styles.avatarWithBorder}
      src={src}
    />
  );
}