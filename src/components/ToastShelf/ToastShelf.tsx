import React from 'react'
import { ToastType } from '../../types'

import Toast from '../Toast'
import styles from './ToastShelf.module.css'

function ToastShelf({
  useToastState,
}: {
  useToastState: {
    toasts: ToastType[]
    setToasts: React.Dispatch<React.SetStateAction<ToastType[]>>
  }
}) {
  const { toasts, setToasts } = useToastState

  const filterToast = (id: string) => () => {
    const filteredToast = toasts.filter((toast) => toast.id !== id)
    // console.log( { filteredToast });
    setToasts(filteredToast)
  }
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast
            variant={toast.variant}
            textarea={toast.text}
            deleteToast={filterToast(toast.id)}
          />
        </li>
      ))}
    </ol>
  )
}

export default ToastShelf
