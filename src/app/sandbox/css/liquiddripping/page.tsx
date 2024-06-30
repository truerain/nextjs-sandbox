'use client'

import React, { useEffect, createElement, useRef, useState } from 'react'
import styles from './liquidDripping.module.css'

interface Drop {
  id: number;
}

export default function LiquidDripping() {
  const [drops, setDrops]  = useState<Drop[]>([]);

  useEffect(() => {
    const interval = setInterval( () => {
      setDrops(prevDrops => [...prevDrops,
                              { id: prevDrops.length }
                            ])
    }, 1000)  
    
  }, [])

  return (
    <div className={styles.container}>
      <section className={styles.section1}>
        <div className={styles.box}>
          {drops.map(drop => (
            <div className={styles.drops} 
              key={drop.id} 
              style={{ width: `${Math.random() * 100}px`,  left: `${Math.random() * 400 }px`}}></div>
          ))}
        </div>
        <h2 className={styles.title}>Liquid</h2>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" 
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 18 -7" result="gooey" />
            <feBlend in="SourceGraphic" in2="gooey" />
          </filter>
        </defs>
      </svg>
    </div>
  )
}
