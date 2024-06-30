'use client'

import React from 'react'
import styles from './loading.module.css'

export default function Sandbox() {
  return (
    <div>
      <div className={styles.loader}>
        <span></span>
      </div>
    </div>
  )
}
