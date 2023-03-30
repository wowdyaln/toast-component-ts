import React from 'react'
import { ToastContext, ToastContextType } from '../ToastProvider'

import Button from '../Button'
import ToastShelf from '../ToastShelf'
import styles from './ToastPlayground.module.css'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error']

function ToastPlayground() {
  const { useTextarea, useVariant, useToasts } = React.useContext(ToastContext) as ToastContextType

  const [textarea, setTextarea] = useTextarea
  const [variant, setVariant] = useVariant
  const [toasts, setToasts] = useToasts

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {/* Toast */}
      {toasts.length > 0 && <ToastShelf />}
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label htmlFor="message" className={styles.label} style={{ alignSelf: 'baseline' }}>
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={textarea}
              onChange={(e) => {
                setTextarea(e.target.value)
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option, index) => (
              <label htmlFor={option} key={index}>
                <input
                  type="radio"
                  name="variant"
                  id={option}
                  value={option}
                  checked={variant === VARIANT_OPTIONS[index]}
                  onChange={(event) => {
                    setVariant(event.target.value)
                  }}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <form>
              <Button
                type="submit"
                onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                  e.preventDefault()
                  setToasts([
                    ...toasts,
                    {
                      text: textarea,
                      variant,
                      id: crypto.randomUUID(),
                    },
                  ])
                  setTextarea('')
                  setVariant(VARIANT_OPTIONS[0])
                }}
              >
                Pop Toast!
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToastPlayground
