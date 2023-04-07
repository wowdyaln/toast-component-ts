import React, { useCallback } from 'react'
import { ToastContext, ToastContextType } from '../ToastProvider'

import Toast from '../Toast'
import styles from './ToastShelf.module.css'
import useEscKey from '../../hooks/use-esc-key'

function ToastShelf() {
  const { useToasts } = React.useContext(ToastContext) as ToastContextType
  const [toasts, setToasts] = useToasts

  const handleESC = useCallback((event: KeyboardEvent) => {
    console.log(event.key)
    setToasts([])
  }, [setToasts])

  useEscKey(handleESC)

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
