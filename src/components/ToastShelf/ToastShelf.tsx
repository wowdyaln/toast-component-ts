import React, { useEffect } from 'react'
import { ToastType } from '../../types'
import { ToastContext, ToastContextType } from '../ToastProvider'

import Toast from '../Toast'
import styles from './ToastShelf.module.css'

function ToastShelf() {
  const { useToasts } = React.useContext(ToastContext) as ToastContextType
  const [toasts, setToasts] = useToasts

  useEffect(() => {
    const pressESC = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        console.warn('ESC press')
        setToasts([])
      }
    }
    window.addEventListener('keydown', pressESC, false)

    return () => {
      window.removeEventListener('keydown', pressESC, false)
    }

  }, [])

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast variant={toast.variant} textarea={toast.text} deleteId={toast.id} />
        </li>
      ))}
    </ol>
  )
}

export default ToastShelf
