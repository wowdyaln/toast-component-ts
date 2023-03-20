import React, { useState } from 'react';

import Button from '../Button';
import Toast from '../Toast/Toast';
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [textarea, setTextarea] = useState('');
  const [variant, setVariant] = useState(VARIANT_OPTIONS[0]);
  const [isToastShow, setIsToastShow] = useState(false);
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {/* Toast */}
      {
        isToastShow && 
          <Toast
            textarea={textarea}
            variant={variant}
            setIsToastShow={setIsToastShow}
          />
      }
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={textarea} onChange={(e) => { setTextarea(e.target.value); }} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
              {
                VARIANT_OPTIONS.map((option, index) => (
                  <label htmlFor={option} key={index}>
                    <input
                      type="radio"
                      name="variant"
                      id={option}
                      value={option}
                      checked={variant === VARIANT_OPTIONS[index]}
                      onChange={event => {
                        setVariant(event.target.value)
                      }}
                    />
                    {option}
                  </label>
                ))
              }
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onClick={() => {
              console.log({ textarea, variant });
              setIsToastShow(true);
            }}
            >
              Pop Toast!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
