'use client'

import React from 'react'
import styles from './cssgrid.module.css'

export default function Sandbox() {
  return (
    <div>
      CSS Grid 연습
      <div className={styles.container}>
        <div className={`${styles.item} ${styles.item_1}`}>1</div>
        <div className={`${styles.item} ${styles.item_2}`}>2</div>
        <div className={`${styles.item} ${styles.item_3}`}>3</div>
      </div>
    </div>
  )
}
