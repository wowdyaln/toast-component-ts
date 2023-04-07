import { useEffect } from "react"

const useEscKey = (callback: (event: KeyboardEvent) => void) => {
  useEffect(() => {

    const pressESC = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        console.warn('ESC press')
        callback(event)
      }
    }

    window.addEventListener('keydown', pressESC, false)
    return () => { window.removeEventListener('keydown', pressESC, false) }
  }, [callback])
}

export default useEscKey