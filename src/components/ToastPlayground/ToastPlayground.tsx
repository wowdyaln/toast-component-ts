import { useState } from 'react'
import { ToastType } from '../../types'

import Button from '../Button'
import ToastShelf from '../ToastShelf'
import styles from './ToastPlayground.module.css'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error']

function ToastPlayground() {
  const [textarea, setTextarea] = useState('')
  const [variant, setVariant] = useState(VARIANT_OPTIONS[0])
  const [toasts, setToasts] = useState<ToastType[]>([])

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {/* Toast */}
      {toasts.length > 0 && <ToastShelf useToastState={{ toasts, setToasts }} />}
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
                  console.log({ textarea, variant })
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
