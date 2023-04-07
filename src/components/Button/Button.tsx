import React from 'react'

import styles from './Button.module.css'

function Button({ className = '', children, ...delegated }: {
  className?: string;
  children: string;
  [x:string]: unknown;
}) {
  return (
    <button className={`${styles.button} ${className}`} {...delegated}>
      {children}
    </button>
  )
}

export default Button
